import React from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollUp({ visible }) {
  return (
    <div
      className=" fixed text-center right-4 bottom-8 overflow-hidden flex-col z-10 cursor-pointer animate-bounce duration-700 ease-in-out"
      style={
        visible
          ? { visibility: "visible", opacity: "1" }
          : { visibility: "hidden", opacity: "0" }
      }
    >
      <FaChevronUp
        className=" p-2 bg-[#ca4242] text-2xl rounded-lg"
        onClick={() =>
          document.getElementById("navbar").scrollIntoView({ behavior: "smooth" })
        }
      />
    </div>
  );
}
