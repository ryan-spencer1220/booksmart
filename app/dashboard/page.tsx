"use client";
import Dashboard from "../components/dashboard";
import Sidebar from "../components/sidebar";
import BookDisplay from "../components/BookDisplay";
import { useState, useEffect } from "react";
import IntroCard from "../components/intro-card";
import ChatCard from "../components/chat-card";
import { Typewriter } from "react-simple-typewriter";

export interface gptResponse {
  role: string;
  content: string;
}

export default function page() {
  const [genre, setGenre] = useState<string>("Self_Help");
  const [introCard, setIntroCard] = useState<boolean>(true);
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [response, setResponse] = useState<gptResponse>({
    role: "",
    content: "",
  });
  const [gptArray, setGptArray] = useState<Array<gptResponse>>([]);

  const submitAuthorPrompt = () => {
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

  const handleClick = () => {
    setIntroCard(false);
    submitAuthorPrompt();
  };

  useEffect(() => {
    let initialMessage = [
      {
        role: "system",
        content: `You are the famous author, George Orwell, author of Animal Farm. Please keep responses under 100 characters.`,
      },
      {
        role: "user",
        content: `Hello George, please introduce yourself.`,
      },
    ];
    setGptArray(initialMessage);
  }, [author, title]);

  return (
    <div className="flex">
      <div className="flex-none">
        <Sidebar setGenre={setGenre} />
      </div>
      <div className="grow justify-start items-start py-20">
        <p className="text-4xl text-gray ps-10">{author ? author : genre}</p>
        <hr className="h-px my-8 bg-gray border-0 "></hr>
        {!author && (
          <BookDisplay
            genre={genre}
            setAuthor={setAuthor}
            setTitle={setTitle}
          />
        )}
        {author && <Dashboard />}
      </div>
    </div>
  );
}
