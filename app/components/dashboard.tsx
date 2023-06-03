"use client";
import { useState } from "react";
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

  return (
    <>
      {!introCard && (
        <p className="text-7xl py-6 text-purple">
          <Typewriter
            words={[`> ${author}`]}
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
            author={author}
            title={title}
          />
        )}
      </div>
      <div>
        {!introCard && response.content && (
          <ChatCard author={author} title={title} response={response} />
        )}
      </div>
    </>
  );
}
