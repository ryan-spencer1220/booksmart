"use client";
import { useState } from "react";
import IntroCard from "../components/intro-card";
import ChatCard from "../components/chat-card";

export default function page() {
  const [introCard, setIntroCard] = useState(true);
  return (
    <>
      <div>{introCard && <IntroCard setIntroCard={setIntroCard} />}</div>
      <div>{!introCard && <ChatCard />}</div>
    </>
  );
}
