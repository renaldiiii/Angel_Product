"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scrill-animation";
import Image from "next/image";
import { SparklesCore } from "./ui/Sparkles";

export function HeroScrollDemo() {
  return (
    <div
      id="product"
      className="flex flex-col overflow-hidden mx-0 mt-[-20] lg:mt-[-150px]"
    >
      <ContainerScroll
        titleComponent={
          <>
            <div className="bg-black flex flex-col items-center justify-center overflow-hidden rounded-">
              <h1 className="md:text-7xl lg:text-5xl font-bold text-center text-neutral-300 relative z-20 mt-8">
                Product <br />
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
          </>
        }
      >
        <Image
          src={`/product.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
