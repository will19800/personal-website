"use client";
"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import resumeicon from "../../public/resumeicon.svg";

const hoverStyle = {
  textDecoration: "underline",
  textUnderlineOffset: "0.4em",
  textDecorationThickness: 1.5,
  textDecorationColor: "#A3AA8B",
};

function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  const [hovered, setHovered] = useState<string>();

  return (
    <ul
      className="flex flex-col justify-end gap-1"
      onMouseLeave={() => setHovered(undefined)}
    >
      <li
        className={`relative text-right ${
          pathname === "/" ? "text-mypink" : "text-black"
        }`}
        onMouseEnter={() => setHovered("experience")}
        style={hovered === "experience" ? hoverStyle : undefined}
      >
        <a href="/">experience</a>
      </li>
      
      <li
        className={`text-right ${
          pathname === "/contact" ? "text-mypink" : "text-black"
        }`}
        onMouseEnter={() => setHovered("contact")}
        style={hovered === "contact" ? hoverStyle : undefined}
      >
        <a href="mailto:lc5065@nyu.edu">contact</a>
      </li>
      <li
        className={`flex flex-row items-center ${
          pathname === "/resume" ? "text-mydarkgreen" : "text-black"
        } hover:text-black`}
        onMouseEnter={() => setHovered("resume")}
        style={hovered === "resume" ? hoverStyle : undefined}
      >
        <a
          href="/githubresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <p className="text-right pr-1 text-mydarkgreen">resume</p>
          <img
            src="/resumeicon.svg"
            alt="Download resume"
            className="w-5 h-5"
          />
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
