"use client";
import { useState, useEffect } from "react";
import IntroCard from "../components/intro-card";
import ChatCard from "../components/chat-card";
import { Typewriter } from "react-simple-typewriter";

export interface gptResponse {
  role: string;
  content: string;
}

export default function Dashboard({
  author,
  title,
}: {
  author: string;
  title: string;
}) {
  const [introCard, setIntroCard] = useState<boolean>(true);
  const [response, setResponse] = useState<gptResponse>({
    role: "",
    content: "",
  });
  const [gptArray, setGptArray] = useState<Array<gptResponse>>([]);

  useEffect(() => {
    let initialMessage = [
      {
        role: "system",
        content: `You are the famous author, George Orwell, author of Animal Farm. Please keep responses under 100 characters.`,
      },
      {
        role: "user",
        content: `Hello, please introduce yourself.`,
      },
    ];
    setGptArray(initialMessage);
    submitAuthorPrompt();
  }, [author, title]);

  const submitAuthorPrompt = () => {
    console.log(gptArray);
    fetch("http://localhost:3006/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gptArray),
    })
      .then((res) => res.json())
      .then((data) => {
        setGptArray([
          ...gptArray,
          {
            role: "assistant",
            content: `${data.completion.content}`,
          },
        ]);
      });
  };

  return (
    <>
      {!introCard && (
        <p className="text-7xl py-6 text-purple">
          <Typewriter
            words={[`> George Orwell`]}
            cursor={true}
            cursorColor="text-purple"
          />
        </p>
      )}
      <div>
        {/* {introCard && (
          <IntroCard
            setResponse={setResponse}
            setIntroCard={setIntroCard}
            setAuthor={setAuthor}
            setTitle={setTitle}
            setGptArray={setGptArray}
            gptArray={gptArray}
            author={author}
            title={title}
            response={response}
          />
        )} */}
      </div>
      <div>
        {/* {!introCard && gptArray.length > 2 && ( */}

        {/* )} */}
      </div>
    </>
  );
}
