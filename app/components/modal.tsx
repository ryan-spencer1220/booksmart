"use client";
import { useState } from "react";
import React from "react";
import BlueButton from "./blue-button";
import GreenButton from "./green-button";
import Link from "next/link";
import { FaApple } from "react-icons/fa";

export default function Modal(props: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  if (!props.isVisible) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-lg flex justify-center items-center"
      onClick={() => props.closeModal()}
    >
      <div className="w-[600px] flex flex-col">
        <div className="bg-white p-12 rounded-2xl grid grid-cols-1 justify-center text-center">
          <p className="text-4xl py-10">Log in to Booksmart</p>
          <div className="grid grid-cols-1 gap-4">
            <BlueButton text="Continue With Apple" />
            <BlueButton text="Continue With Google" />
          </div>
          <div className="flex justify-center items-center py-4">
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-1"></hr>
            <p>or</p>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-1"></hr>
          </div>
          <form className="grid grid-cols-1 py-4">
            <input placeholder="Email" className="my-4 p-4 text-xl" />
            <input placeholder="Password" className="my-4 p-4 text-xl" />
            <GreenButton text="Login With Email" link="/" />
          </form>
          <Link href="/" className="py-4 hover:text-blue">
            Forgot your password?
          </Link>
          <Link href="/" className="py-4 hover:text-blue">
            You don&apos;t have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}
