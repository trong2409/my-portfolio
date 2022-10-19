import React from "react";
import { useWasViewed } from "../hooks/useWasViewed";

export default function Highlight({ highlight, isLink = false }) {
  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-base" : "null";

  if (isLink) {
    return (
      <p
        ref={setRef}
        className={` before:content-['-'] before:mr-2 mb-4 last:mb-0 ${animation}`}
      >
        I had successfully completed the training program Professional Front-end
        Developer in{" "}
        <a
          href="https://cybersoft.edu.vn/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-pink-red font-khand font-semibold"
        >
          CYBERSOFT ACADEMY
        </a>{" "}
        with score 9.0
      </p>
    );
  }

  return (
    <p
      ref={setRef}
      className={` before:content-['-'] before:mr-2 mb-4 last:mb-0 ${animation}`}
    >
      {highlight}
    </p>
  );
}
