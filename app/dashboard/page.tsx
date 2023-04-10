import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <section className="max-w-full shadow-2xl rounded-3xl p-20 grid grid-cols-2 gap-36">
        <div>
          <h3 className="text-4xl pb-20">Chat With Your Favorite Author!</h3>
          <form className="text-left">
            <div className="py-4">
              <label className="text-xl">Enter Your Favorite Author</label>
              <input className="shadow appearance-none border rounded w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            </div>
            <label className="text-xl">Enter A Novel</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"></input>
          </form>
        </div>
        <Image src="/form.png" alt="Form art" width={400} height={400} />
      </section>
    </div>
  );
}
