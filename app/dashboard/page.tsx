"use client";

import { useState } from "react";
import IntroCard from "../components/intro-card";
import ChatCard from "../components/chat-card";

export default function page() {
  const [introCard, setIntroCard] = useState(true);
  return (
    <div className="[perspective-100px]">
      <div className="relative duration-500">
        <div className="absolute inset-0">
          {introCard && <IntroCard setIntroCard={setIntroCard} />}
        </div>
        <div className="absolute">{!introCard && <ChatCard />}</div>
      </div>
    </div>
  );
}
