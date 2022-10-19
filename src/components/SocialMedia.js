import React from "react";
import { socialMediaIcons } from "../utils/config";
import { useWasViewed } from "../hooks/useWasViewed";

export default function SocialMedia() {
  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-base" : "null";

  return (
    <div className={` flex-center ${animation}`} ref={setRef}>
      <div className=" grid gap-4  grid-cols-4 items-center">
        {socialMediaIcons.map((icon, i) => (
          <div
            className=" flex-center flex-col w-12 h-12 rounded-full relative cursor-pointer group"
            key={i}
          >
            <div
              className=" px-2 py-1 rounded-md shadow-tooltip opacity-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] capitalize absolute top-0 group-hover:-top-8 group-hover:opacity-100 before:absolute before:content-[''] before:h-2 before:w-2 before:bg-inherit before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:rotate-45 text-md"
              style={{ backgroundColor: icon.color }}
            >
              {icon.name}
            </div>
            <a href={icon.url} target="_blank" rel="noopener noreferrer">
              <div className=" flex-center text-lg duration-500 ease-out hover:text-2xl">
                {icon.icon}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
