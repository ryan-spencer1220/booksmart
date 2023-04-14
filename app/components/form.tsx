import React from "react";
import BlueButton from "../components/blue-button";

export default function Form({
  setAuthor,
  setTitle,
}: {
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}) {
  const submitAuthorPrompt = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="text-left" onSubmit={submitAuthorPrompt}>
      <div className="py-4">
        <label className="text-xl">Enter Your Favorite Author</label>
        <input
          className="shadow appearance-none border rounded w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event) => setAuthor(event.target.value)}
        />
      </div>
      <label className="text-xl">Enter A Novel</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
        onChange={(event) => setTitle(event.target.value)}
      />
      {/* <button type="submit">Submit</button> */}
      <BlueButton text="Submit" />
    </form>
  );
}
