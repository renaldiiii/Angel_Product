"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/Infinite-Moving-Cards";
import { companyProfile } from "@/data";
import { SparklesCore } from "./ui/Sparkles";

export default function About() {
  return (
    <>
      <div
        id="about"
        className="bg-black flex flex-col items-center justify-center overflow-hidden rounded-"
      >
        <h1 className="md:text-7xl lg:text-5xl font-bold text-center text-neutral-300 relative z-20 mt-8">
          About Us
        </h1>
        <div className="w-[40rem] h-3 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="w-auto h-80 mb-10 text-gray-400 items-start text-center p-1 h-56">
        <p className="lg:mt-5 lg:mx-16 2xl:mt-5 2xl:mx-20">
          PT Angels Products is a company operating in the refined crystal sugar
          industry located in Banten province. PT Angels Products is a
          subsidiary of PT Pasifik Agro Sentosa, which was founded on September
          16, 2002, and became active in early 2003. The presence of PT Angels
          Products can help meet the sugar needs of the food, beverage, and
          pharmaceutical industries in Indonesia.<br></br> <br></br>PT Angels
          Products is the first refined crystal sugar factory in Indonesia which
          operated in 1997 with an initial capacity of 500 tons per day (175,000
          tons per year) and increased gradually to reach 1,750 tons per day
          (600,000 tons per year). PT Angels Products was the first pioneer to
          apply the Auto Boiling System and continues to develop technology and
          operational methods so that it can become one of the companies
          providing refined crystal sugar that excels both in product quality
          and service for related parties.
        </p>
      </div>
    </>
    // <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    //   <InfiniteMovingCards
    //     items={companyProfile}
    //     direction="right"
    //     speed="slow"
    //   />
    // </div>
  );
}
