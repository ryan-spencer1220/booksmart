import React, { useState, KeyboardEvent, useEffect } from "react";
import GptResponse from "./GptResponse";
import UserResponse from "./UserResponse";
import { gptResponse } from "./dashboard";

export default function ChatCard({
  author,
  title,
  response,
  gptArray,
  setGptArray,
}: {
  author: string;
  title: string;
  response: gptResponse;
  gptArray: Array<gptResponse>;
  setGptArray: React.Dispatch<React.SetStateAction<Array<gptResponse>>>;
}) {
  const [userInputArray, setUserInputArray] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [newResponse, setNewResponse] = useState<string>("");
  const [gptResponseArray, setGptResponseArray] = useState<string[]>([]);

  const submitAuthorPrompt = () => {
    fetch("http://localhost:3006/conversation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gptArray,
      }),
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

  const pushInputToArray = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      userInputArray.push(userInput);
      gptArray.push({ role: "user", content: userInput });
      submitAuthorPrompt();
      setUserInput("");
    }
  };

  useEffect(() => {
    gptResponseArray.push(gptArray[gptArray.length - 1].content);
    console.log(gptResponseArray);
  }, [gptArray]);

  return (
    <section className="max-w-full shadow-2xl rounded-3xl bg-gray aspect-video overflow-hidden">
      <div className="h-10 w-full bg-lightGray rounded-t-3xl flex items-center space-x-1 ps-2 overflow-hidden">
        <div className="rounded-full bg-red w-5 h-5"></div>
        <div className="rounded-full bg-yellow w-5 h-5"></div>
        <div className="rounded-full bg-green w-5 h-5"></div>
      </div>
      <div className="flex items-end content-between h-full px-10 pt-10 text-xl relative overflow-hidden">
        <div className="px-6 py-10 absolute bottom-24 overflow-hidden">
          {gptArray.length &&
            gptArray.slice(2).map((obj, key) => {
              return key % 2 == 0 ? (
                <GptResponse key={key} text={obj.content} />
              ) : (
                <UserResponse key={key} text={obj.content} />
              );
            })}
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
