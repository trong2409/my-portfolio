import React from "react";

export default function Button({ content }) {
  return (
    <button className=" min-w-[80px] bg-transparent border border-slate-500 rounded-md text-lg hover:animate-jelly ">
      <p className="px-2 py-1 text-base lg:text-lg text-center capitalize">
        {content}
      </p>
    </button>
  );
}
