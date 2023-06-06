import Image from "next/image";
import GreenButton from "./components/green-button";
import { AiFillStar } from "react-icons/ai";
import { FaLightbulb, FaBookOpen } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// interface ModalProps {
//   showModal: boolean;
//   setShowModal: (open: boolean) => void;
// }

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-40 py-14">
        <section className="grid md:grid-cols-2 grid-cols-1 py-32 place-items-center">
          <div>
            <h1 className="text-8xl">Welcome to booksmart!</h1>
            <p className="">
              This web application employs the Chat GPT API to provide a
              platform for users to converse with their favorite authors,
              creating a unique and immersive literary experience.
            </p>
            <div className="py-10">
              <GreenButton text="Check It Out!" link="/dashboard" />
            </div>
          </div>
          <div className="place-self-end w-auto h-auto">
            <Image
              src="/hero.png"
              width={400}
              height={400}
              alt="hero image"
              priority
            />
          </div>
        </section>
        <section className="text-center py-4">
          <h3 className="text-5xl">
            Connect with your favorite authors like never before
          </h3>
          <div className="grid lg:grid-cols-3 gird-cols-1 gap-20 place-items-center py-20">
            <div className=" bg-paleBlue rounded-xl">
              <div className="p-10 grid grid-cols-1 place-items-center">
                <div className="p-6 text-7xl text-blue">
                  <FaBookOpen />
                </div>
                <p className="text-4xl py-6">Experience</p>
                <p>
                  Booksmart offers a unique platform for book lovers to come
                  together and share their ideas with others.
                </p>
              </div>
            </div>
            <div className="bg-paleBlue rounded-xl">
              <div className="p-10 grid grid-cols-1 place-items-center">
                <div className="p-6 text-7xl text-blue">
                  <FaLightbulb />
                </div>
                <p className="text-4xl py-6">Connect</p>
                <p>
                  A unique opportunity for book lovers to directly engage in
                  conversation with their favorite authors.
                </p>
              </div>
            </div>
            <div className=" bg-paleBlue rounded-xl">
              <div className="p-10 grid grid-cols-1 place-items-center">
                <div className="p-6 text-7xl text-blue">
                  <BsFillPersonFill />
                </div>
                <p className="text-4xl py-6">Interact</p>
                <p>
                  Ask questions, share feedback, and get a glimpse of the person
                  behind your favorite books.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 py-24">
          <div className="text-4xl text-gray">
            <p className="py-2">Be more knowledgeable</p>
            <p className="py-2">Be more successful</p>
            <p className="py-2">Be healthier</p>
            <p className="py-2">Be a better parent</p>
            <p className="py-2">Be happier</p>
            <p className="py-2">Be your best self!</p>
          </div>
          <div className="bg-paleGreen text-2xl">
            <div className="py-12 px-10">
              95% of Booksmart members read significantly more than before
            </div>
            <div className="px-10">
              91% of Booksmart members create better habits
            </div>
            <div className="py-12 px-10">
              87% have made positive changes in their lives thanks to Booksmart
            </div>
          </div>
        </section>
        <section className="pb-24 pt-12">
          <h3 className="text-5xl pb-28 text-center">
            What our members are saying
          </h3>
          <div className="grid grid-cols-2 ">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-paleYellow rounded-2xl">
                <div className="py-6 px-6">
                  <div className="flex pb-4 gap-6">
                    <div className="text-xl">Renee D.</div>
                    <div className="flex self-center text-blue text-xl">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  Great app. Good selection of book summaries you can read or
                  listen to while commuting. Instead of scrolling through your
                  social media news feed, this is a much better way to spend
                  your spare time in my opinion.
                </div>
              </div>
              <div className="bg-paleYellow rounded-2xl">
                <div className="py-6 px-6">
                  <div className="flex pb-4 gap-6">
                    <div className="text-xl">Sven O.</div>
                    <div className="flex self-center text-blue text-xl">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  Life changing. The concept of being able to grasp a book's
                  main point in such a short time truly opens multiple
                  opportunities to grow every area of your life at a faster
                  rate.
                </div>
              </div>
              <div className="bg-paleYellow rounded-2xl">
                <div className="py-6 px-6">
                  <div className="flex pb-4 gap-6">
                    <div className="text-xl">Jonathan A.</div>
                    <div className="flex self-center text-blue text-xl">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  It's highly addictive to get core insights on personally
                  relevant topics without repetition or triviality. Added to
                  that the apps ability to suggest kindred interests opens up a
                  foundation of knowledge.
                </div>
              </div>
            </div>
            <Image
              src="/reading.svg"
              height={800}
              width={800}
              alt="reader illustration"
              priority
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
