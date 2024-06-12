"use client";

import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { SparklesCore } from "./ui/Sparkles";

export function LayoutGridDemo() {
  return (
    <>
      <div id="galery">
        <div className="bg-black flex flex-col items-center justify-center overflow-hidden rounded-">
          <h1 className="md:text-7xl lg:text-5xl font-bold text-center text-neutral-300 relative z-20 mt-8">
            Gallery
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
        <div className="h-screen py-20 w-full lg:h-max 2xl:h-max mt-[-100px]">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonNine = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonTen = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonEleven = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonTwlev = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonThritteen = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonFourteen = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonFiveteen = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};
const SkeletonSixteen = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/COMMON-AREA-(1).jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/COMMON-AREA-(2).jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:col-span-1",
    thumbnail: "/FACILITIES-(1).jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-2",
    thumbnail: "/FACILITIES-(2).jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail: "/COMMON-AREA-(3).jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail: "/COMMON-AREA-(4).jpg",
  },
  {
    id: 6,
    content: <SkeletonSeven />,
    className: "md:col-span-1",
    thumbnail: "/FACILITIES-(10).jpg",
  },
  {
    id: 7,
    content: <SkeletonEight />,
    className: "col-span-2",
    thumbnail: "/FACILITIES-(15).jpg",
  },
  {
    id: 8,
    content: <SkeletonNine />,
    className: "md:col-span-2",
    thumbnail: "/building-factory-(3).jpg",
  },
  {
    id: 9,
    content: <SkeletonTen />,
    className: "col-span-1",
    thumbnail: "/building-factory-(4).jpg",
  },
  {
    id: 10,
    content: <SkeletonEleven />,
    className: "md:col-span-1",
    thumbnail: "/building-factory-(5).jpg",
  },
  {
    id: 11,
    content: <SkeletonTwlev />,
    className: "col-span-2",
    thumbnail: "/FACILITIES-(24).jpg",
  },
  {
    id: 12,
    content: <SkeletonThritteen />,
    className: "md:col-span-2",
    thumbnail: "/PRODUCTION-(1).jpg",
  },
  {
    id: 13,
    content: <SkeletonFourteen />,
    className: "col-span-1",
    thumbnail: "/PRODUCTION-(2).jpg",
  },
  {
    id: 14,
    content: <SkeletonFiveteen />,
    className: "md:col-span-1",
    thumbnail: "/PRODUCTION-(3).jpg",
  },
  {
    id: 15,
    content: <SkeletonSixteen />,
    className: "col-span-2",
    thumbnail: "/PRODUCTION-(4).jpg",
  },
];
