import Form from "../components/form";
import Image from "next/image";
import BlueButton from "../components/blue-button";

export default function IntroCard({
  setIntroCard,
  setAuthor,
  setTitle,
}: {
  setIntroCard: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <section className="max-w-full shadow-2xl rounded-3xl p-20 grid grid-cols-2 gap-24">
      <Image
        src="/dashboard1.png"
        alt="Form art"
        width={400}
        height={400}
        priority
        className="rotate-180"
      />
      <div>
        <h3 className="text-4xl pb-10">Chat With Your Favorite Author!</h3>
        <Form setAuthor={setAuthor} setTitle={setTitle} />
        {/* <button onClick={() => setIntroCard(false)}> */}
        <BlueButton text="Submit" />
        {/* </button> */}
      </div>
    </section>
  );
}
