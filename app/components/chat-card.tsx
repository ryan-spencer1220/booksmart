"use client";
import React, { useState, KeyboardEvent } from "react";
import { Typewriter } from "react-simple-typewriter";

interface Props {
  author: string;
  title: string;
}

export default function ChatCard(props: {
  author: string;
  title: string;
  response: object;
}) {
  const [userInputArray, setUserInputArray] = useState<string[]>([
    "Hello, how are you doing today?",
  ]);
  const [userInput, setUserInput] = useState<string>("");

  const pushInputToArray = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      setUserInputArray([...userInputArray, userInput]);
      setUserInput("");
      console.log(userInputArray);
    }
  };

  console.log();

  // const submitAuthorPrompt = (userAuthor: string) => {
  //   console.log("HIT FROM THE FRONT");
  //   fetch("https://localhost:3006/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userInputArray,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let newAssistantMessage = {
  //         role: "assistant",
  //         content: `${data.completion.content}`,
  //       };
  //     });
  // };

  return (
    <section className="max-w-full shadow-2xl rounded-3xl bg-gray aspect-video overflow-hidden">
      <div className="h-10 w-full bg-lightGray rounded-t-3xl flex items-center space-x-1 ps-2 overflow-hidden">
        <div className="rounded-full bg-red w-5 h-5"></div>
        <div className="rounded-full bg-yellow w-5 h-5"></div>
        <div className="rounded-full bg-green w-5 h-5"></div>
      </div>
      <div className="flex items-end content-between h-full px-10 pt-10 text-xl relative overflow-hidden">
        <div className="px-6 py-10 absolute bottom-24 overflow-hidden">
          <p className="text-white">{`>${props.author}`}</p>
          <p className="text-gold">
            <Typewriter
              words={[props.response.content]}
              cursor={false}
              cursorColor="white"
            />
          </p>
          {userInputArray.map((text) => (
            <div className="pt-4" key={text}>
              <p className="text-white">{`>You`}</p>
              <p className="text-aqua">{text}</p>
            </div>
          ))}
        </div>
        <input
          type="text"
          className="bg-white p-2 rounded-2xl outline-none mb-8 mx-8 absolute bottom-8 w-11/12 right-2"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => pushInputToArray(e)}
        ></input>
      </div>
    </section>
  );
}
