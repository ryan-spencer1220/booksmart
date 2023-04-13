import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function ChatCard() {
  return (
    <section className="max-w-full shadow-2xl rounded-3xl bg-gray h-screen">
      <div className="h-10 w-full bg-lightGray rounded-t-3xl flex items-center space-x-1 ps-2">
        <div className="rounded-full bg-red w-5 h-5"></div>
        <div className="rounded-full bg-yellow w-5 h-5"></div>
        <div className="rounded-full bg-green w-5 h-5"></div>
      </div>
      <div className="p-10">
        <p className="text-white">{`>Anthony Bourdain`}</p>
        <p className="text-gold">
          <Typewriter
            words={[
              "Hello I'm Anthony Bourdain, what would you like to ask me?",
            ]}
            cursor={false}
            cursorColor="white"
          />
        </p>
        <p className="text-white">{`>You`}</p>
        <p className="text-aqua">
          <Typewriter
            words={["What was your inspiration for Kitchen Confidential?"]}
            cursor={true}
            cursorColor="white"
          />
        </p>
      </div>
    </section>
  );
}
