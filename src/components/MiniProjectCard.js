import React from "react";
import { useWasViewed } from "../hooks/useWasViewed";
import Button from "./Button";

export default function MiniProjectCard({ img, link }) {
  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-base" : "";
  return (
    <div
      className={` rounded-md overflow-hidden p-1 bg-[#2f3744] relative group ${animation} w-1/2 mx-5`}
      ref={setRef}
    >
      <img
        src={img}
        className="rounded-md group-hover:opacity-10"
        alt="preview"
      />
      <div className=" flex items-center justify-center absolute top-0 right-0 w-full h-full invisible group-hover:visible">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button content="Live Demo" />
        </a>
      </div>
    </div>
  );
}
