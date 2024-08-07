"use client";

import "./globals.css"

import React from "react";
import Navbar from "./components/Navbar";
import NavbarBottom from "./components/NavbarBottom";
import {Canvas} from "@react-three/fiber"
import Cube from "./components/Cube"

export default function Home() {

  return (
    <div className="max-w-2xl w-full">
      <div className="w-full bg-white bg-opacity-50">
        <div className="min-h-screen ">
          <div className="flex flex-row justify-between ">
            <p className="custom-text-18">Will Chen</p>
            <Navbar />
          </div>
          <div className="font-bold pt-10 pb-3 text-mydarkgreen tracking-widest text-lg">
            hello!
          </div>
          <p>[ he/him ]</p>
          <p className="pt-10">
            I&apos;m currently a computer science and engineering major at Ohio
            State University. I have a strong interest in system-related topics,
            full-stack development, and data science.
          </p>
          <p className="pt-10">
            When I&apos;m not coding you can find me cooking, taking walks in a
            park, and trying to pet stray cats.{" "}
          </p>
          <p className="pt-10">
            I still have so much to learn about, and I&apos;m always open to
            exploring new opportunities, so feel free to reach out!
          </p>
          <div className="font-bold pt-10 pb-5 text-mydarkgreen">PROJECTS</div>
          <div className="flex justify-between items-center">
            <p className="">book corner</p>
            <div className="flex">
              <a
                href="https://github.com/will19800/Book-Site"
                className="hover:underline"
              >
                github
              </a>
            </div>
          </div>
          <p className="text-mygray">
            springboot, react, tailwind, postgresql, docker, aws
          </p>
          <div className="flex justify-between items-center">
            <p className="pt-5">wtorrent</p>
            <div className="flex">
              <a
                href="https://github.com/will19800/wtorrent"
                className="hover:underline"
              >
                github
              </a>
            </div>
          </div>
          <p className="text-mygray">java, javaFX</p>
          <div className="font-bold pt-10 pb-5 text-mydarkgreen">WORK</div>{" "}
          <p>
            worked as a cashier at{" "}
            <a href="https://www.ohkdog.com/" className="underline">
              Oh!K-Dog
            </a>
          </p>
          <p className="text-mygray">June 2023 - August 2024</p>
          <br />
          <p>
            worked as a server at{" "}
            <a href="https://www.madforchicken.com/" className="underline">
              Mad For Chicken
            </a>
          </p>
          <p className="text-mygray">June 2022 - September 2022</p>
          <div className="flex h-64 my-6">
            <Canvas dpr={[1, 2]}>
              <Cube />
            </Canvas>
          </div>
          <NavbarBottom />
        </div>
      </div>
    </div>
  );
}
