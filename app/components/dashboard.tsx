"use client";
import { useState } from "react";
import IntroCard from "../components/intro-card";
import ChatCard from "../components/chat-card";
import { Typewriter } from "react-simple-typewriter";

export default function Dashboard() {
  const [introCard, setIntroCard] = useState<boolean>(true);
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");

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
            setIntroCard={setIntroCard}
            setAuthor={setAuthor}
            setTitle={setTitle}
          />
        )}
      </div>
      <div>{!introCard && <ChatCard author={author} title={title} />}</div>
    </>
  );
}
