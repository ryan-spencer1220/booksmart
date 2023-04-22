"use client";
import Image from "next/image";
import GreenButton from "./components/green-button";
import { FaLightbulb, FaBookOpen } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import Navbar from "./components/navbar";
import Modal from "./components/modal";
import { useState } from "react";

// interface ModalProps {
//   showModal: boolean;
//   setShowModal: (open: boolean) => void;
// }

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <main>
        <Navbar setShowModal={setShowModal} />
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
        <section className="text-center">
          <h3 className="text-4xl">
            Connect with your favorite authors like never before
          </h3>
          <div className="grid grid-cols-3 gap-20 place-items-center py-20">
            <div className="grid grid-cols-1 place-items-center">
              <div className="p-10 text-7xl text-blue">
                <FaBookOpen />
              </div>
              <p className="text-4xl">Experience</p>
              <p>
                Booksmart offers a unique platform for book lovers to come
                together and share their ideas with other passionate readers.
              </p>
            </div>
            <div className="grid grid-cols-1 place-items-center">
              <div className="p-10 text-7xl text-blue">
                <FaLightbulb />
              </div>
              <p className="text-4xl">Connect</p>
              <p>
                A unique opportunity for book lovers to directly engage in
                conversation with their favorite authors.
              </p>
            </div>
            <div className="grid grid-cols-1 place-items-center">
              <div className="p-10 text-7xl text-blue">
                <BsFillPersonFill />
              </div>
              <p className="text-4xl">Interact</p>
              <p>
                Ask questions, share feedback, and get a glimpse of the person
                behind your favorite books.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Modal isVisible={showModal} closeModal={closeModal} />
    </>
  );
}
