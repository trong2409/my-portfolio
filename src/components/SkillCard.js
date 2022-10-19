import React from "react";
import { useWasViewed } from "../hooks/useWasViewed";

export default function SkillCard({ skill }) {
  const { name, icon, color } = skill;

  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-head-shake" : "null";

  return (
    <div
      className={`group p-4 flex-center cursor-pointer duration-500 ease-out opacity-25 grayscale relative hover:opacity-100 hover:grayscale-0 ${animation}`}
      ref={setRef}
    >
      <div className=" bg-white text-pink-red px-2 py-1 rounded-md shadow-tooltip opacity-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] absolute top-0 w-max group-hover:-top-8 group-hover:opacity-100 before:absolute before:content-[''] before:h-2 before:w-2 before:bg-inherit before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:rotate-45 text-md">
        {name}
      </div>
      <img
        src={icon}
        alt={name}
        className=" max-w-[90%] h-20 duration-500 ease-in-out group-hover:scale-110"
        style={color ? color : null}
      />
    </div>
  );
}
