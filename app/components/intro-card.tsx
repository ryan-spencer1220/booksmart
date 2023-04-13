"use client";
import Form from "../components/form";
import Image from "next/image";

export default function IntroCard({ setIntroCard }) {
  return (
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
        <button onClick={() => setIntroCard(false)}>Click me</button>
        <Form />
      </div>
    </section>
  );
}
