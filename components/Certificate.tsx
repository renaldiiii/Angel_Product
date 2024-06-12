"use client";

import { SparklesCore } from "./ui/Sparkles";
import { CardStack } from "../components/ui/Card-Stack";
import { cn } from "@/lib/utils";
import { certificate } from "@/data";
import React from "react";

export default function MeteorsDemo() {
  return (
    <>
      <div id="certificate">
        <div className="bg-black flex flex-col items-center justify-center overflow-hidden rounded-">
          <h1 className="md:text-7xl lg:text-5xl font-bold text-center text-neutral-300 relative z-20">
            Certificate
            <br />
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
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 lg:w-full h-48 mt-5">
          {certificate.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="2xl:w-40 lg:w-32 md:w-10 w-16"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    content: (
      <p className="mt-10 text-justify">
        - ISO 9001 (Since November 2006)<br></br>- ISO 22000 (Since May 2010)
        <br></br>- OHSAS 18001 (Since December 2011)<br></br>- ISO 14001 (Since
        December 2011)<br></br>- FSSC 22000 (Since June 2013)<br></br>
      </p>
    ),
  },
  {
    id: 1,
    content: (
      <p className="mt-8 text-justify">
        - SNI 01-3140.2-2006 (Since May 2008)<br></br>- Halal Certification
        (Since May 2008)<br></br>- Halal Guarantee System Status A (Since May
        2014)<br></br>- Blue Rating Proper Certificate (Since 2008)<br></br>-
        SMK3 (Since September 2020))<br></br>
      </p>
    ),
  },
];
