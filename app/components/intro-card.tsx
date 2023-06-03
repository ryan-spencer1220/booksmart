import Form from "../components/form";
import Image from "next/image";
import BlueButton from "../components/blue-button";
import React, { useState, KeyboardEvent, useEffect } from "react";
import { gptResponse } from "./dashboard";

export default function IntroCard({
  setResponse,
  setIntroCard,
  setAuthor,
  setTitle,
  author,
  title,
}: {
  setResponse: React.Dispatch<React.SetStateAction<gptResponse>>;
  setIntroCard: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  author: string;
  title: string;
}) {
  const [userInput] = useState<object>({
    author: "George Orwell",
    title: "1984",
  });

  console.log(author, title);

  const submitAuthorPrompt = () => {
    console.log("HIT FROM THE FRONT");
    fetch("http://localhost:3006/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userInput,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse({
          role: "assistant",
          content: `${data.completion.content}`,
        });
      });
  };

  const handleClick = () => {
    setIntroCard(false);
    submitAuthorPrompt();
  };

  return (
    <section className="max-w-full shadow-2xl rounded-3xl p-20 grid grid-cols-2 gap-24">
      <Image
        src="/dashboard1.png"
        alt="Form art"
        width={400}
        height={400}
        priority
        className="rotate-180"
      />
      <div>
        <h3 className="text-4xl pb-10">Chat With Your Favorite Author!</h3>
        <Form setAuthor={setAuthor} setTitle={setTitle} />
        <BlueButton text="Submit" onClick={handleClick} />
      </div>
    </section>
  );
}
