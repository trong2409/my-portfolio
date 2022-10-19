import React, { useEffect, useState } from "react";
import { displays } from "../utils/config";
import { FaBars, FaPlus } from "react-icons/fa";
import { useViewport } from "../hooks/useViewport";

export default function Navbar() {
  const [showBar, setShowBar] = useState(false);

  const SwitchDisplay = (display) =>
    document.getElementById(display.id).scrollIntoView({ behavior: "smooth" });

  const { isMobile } = useViewport(1023);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = showBar ? "hidden" : "auto";
    } else {
      setShowBar(false);
      document.body.style.overflow = "auto";
    }
  }, [showBar, isMobile]);

  const getNavLink = () => (
    <div className=" flex flex-col w-full h-[50vh] justify-around lg:flex-row lg:items-center lg:h-auto mt-[10vh] lg:mt-0">
      {displays.map((display) => (
        <div
          className=" text-xl text-center cursor-pointer font-khand font-semibold uppercase mr-6 pb-0 relative"
          key={display.id}
          onClick={() => {
            SwitchDisplay(display);
            if (isMobile) {
              setShowBar(false);
            }
          }}
        >
          {display.name}
        </div>
      ))}
    </div>
  );
  return (
    <div className=" p-auto flex-center" id="navbar">
      <div className=" max-w-[1024px] w-[90%] flex justify-between items-center">
        <div
          className=" cursor-pointer text-xl z-50 lg:hidden"
          onClick={() => setShowBar(!showBar)}
        >
          {showBar ? (
            <FaPlus className=" rotate-45 animate-fade-in" />
          ) : (
            <FaBars className=" animate-fade-in" />
          )}
        </div>
        <a
          href="/"
          className=" text-3xl md:text-3xl uppercase font-khand font-semibold"
        >
          Trong Nguyen
        </a>
        <div
          className=" bg-home h-screen w-full z-40 opacity-10 duration-700 ease-out absolute -left-full top-0 lg:bg-none lg:h-auto lg:opacity-100 lg:w-auto lg:static"
          style={showBar ? { left: "0", opacity: "1" } : {}}
        >
          {getNavLink()}
        </div>
      </div>
    </div>
  );
}
