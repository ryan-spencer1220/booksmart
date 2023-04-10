import React from "react";

export default function page() {
  return (
    <div>
      <section className="max-w-full shadow-2xl p-20">
        <h3 className="text-4xl pb-20">Chat With Your Favorite Author!</h3>
        <form className="text-center">
          <label className="text-xl">Enter Your Favorite Author</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
        </form>
      </section>
    </div>
  );
}
