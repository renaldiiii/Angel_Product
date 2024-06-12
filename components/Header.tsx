import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";

export default function Header() {
  return (
    <div
      id="home"
      className=" h-screen bg-[url('../public/slide-1.jpg')] bg-no-repeat bg-cover relative w-screen"
    >
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 reati"
        fill="black"
      /> */}
      <div className="h-screen w-screen gradient absolute bg-gradient-to-r from-gray-900">
        <div className=" p-4 mx-auto relative mt-72 ml-16 mr-16 z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-left drop-shadow-md shadow-red-500">
            The 1<span className="text-xl align-top">ST</span>
            <br></br>
            Sugar Refinery In Indonesia
          </h1>
          <div className="button bg-cyan-600 w-40 h-12 place-content-center text-center rounded-lg mt-10 hover:bg-cyan-900">
            <a href="#">Show More!</a>
          </div>
        </div>
      </div>
    </div>
  );
}
