"use client";
import Sidebar from "../components/sidebar";
import BookDisplay from "../components/BookDisplay";
import { useState, useEffect } from "react";
import ChatCard from "../components/chat-card";
import { Typewriter } from "react-simple-typewriter";

export interface gptResponse {
  role: string;
  content: string;
}

export default function page() {
  const [genre, setGenre] = useState<string>("Self_Help");
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [response, setResponse] = useState<gptResponse>({
    role: "",
    content: "",
  });

  let initialMessage = [
    {
      role: "system",
      content: `You are the famous author, Anthony Bourdain, author of Kitchen Confidential. Please keep responses under 200 characters.`,
    },
    {
      role: "user",
      content: `Hello, Anthony please introduce yourself.`,
    },
  ];

  const [gptArray, setGptArray] = useState<Array<gptResponse>>(initialMessage);

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

  // useEffect(() => {
  //   setGptArray(initialMessage);
  // }, [author, title]);

  useEffect(() => {
    {
      author.length > 1 && submitAuthorPrompt();
    }
  }, [author]);

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
        {author && (
          <ChatCard
            author={author}
            title={title}
            response={response}
            setGptArray={setGptArray}
            gptArray={gptArray}
          />
        )}
      </div>
    </div>
  );
}
