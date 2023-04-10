import Image from "next/image";
import Button from "./components/button";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 py-32 place-items-center">
        <div>
          <h1 className="text-8xl">Welcome to booksmart!</h1>
          <p className="">
            This web application employs the Chat GPT API to provide a platform
            for users to converse with their favorite authors, creating a unique
            and immersive literary experience.
          </p>
          <div className="py-10">
            <Button text="Check It Out!" link="/" />
          </div>
        </div>
        <div className="place-self-end">
          <Image src="/hero.png" width={400} height={400} alt="hero image" />
        </div>
      </section>
    </main>
  );
}
