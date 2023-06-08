"use client";
import { useState, useEffect } from "react";
import IntroCard from "../components/intro-card";
import ChatCard from "../components/chat-card";
import { Typewriter } from "react-simple-typewriter";

export interface gptResponse {
  role: string;
  content: string;
}

export default function Dashboard() {
  const [introCard, setIntroCard] = useState<boolean>(true);
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
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
        content: `Hello George, please introduce yourself.`,
      },
    ];
    setGptArray(initialMessage);
  }, [author, title]);

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
        {introCard && (
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
        )}
      </div>
      <div>
        {!introCard && gptArray.length > 2 && (
          <ChatCard
            author={author}
            title={title}
            response={response}
            setGptArray={setGptArray}
            gptArray={gptArray}
          />
        )}
      </div>
    </>
  );
}
