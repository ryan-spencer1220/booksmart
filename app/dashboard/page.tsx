"use client";
import { useState } from "react";
import Image from "next/image";
import BlueButton from "../components/blue-button";

export default function page() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const submitAuthorPrompt = (e: any) => {
    e.preventDefault();
    console.log(author, title);
  };

  return (
    <div>
      <section className="max-w-full shadow-2xl rounded-3xl p-20 grid grid-cols-2 gap-24">
        <Image
          src="/dashboard.png"
          alt="Form art"
          width={400}
          height={400}
          priority
        />
        <div>
          <h3 className="text-4xl pb-20">Chat With Your Favorite Author!</h3>
          <form className="text-left" onSubmit={submitAuthorPrompt}>
            <div className="py-4">
              <label className="text-xl">Enter Your Favorite Author</label>
              <input
                className="shadow appearance-none border rounded w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </div>
            <label className="text-xl">Enter A Novel</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <button type="submit">Submit</button>
            {/* <BlueButton text="Submit" /> */}
          </form>
        </div>
      </section>
    </div>
  );
}
