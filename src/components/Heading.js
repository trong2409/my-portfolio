import React from "react";
import { useWasViewed } from "../hooks/useWasViewed";

export default function Heading({ text }) {
  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-jelly" : "null";
  
  return (
    <div className=" flex-center w-full mb-12 flex-col" ref={setRef}>
      <div
        className={` heading text-2xl lg:text-3xl 2xl:text-[4rem] text-transparent capitalize text-center ${animation}`}
      >
        {text}
      </div>
      <div className=" flex-center relative w-[150px] lg:w-[200px] 2xl:w-[250px]">
        <div className=" w-full h-1 bg-heading"></div>
        <div className=" absolute w-full h-3 flex-center">
          <div className=" w-9 h-full rounded-lg bg-heading"></div>
        </div>
      </div>
    </div>
  );
}
