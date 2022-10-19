import React from "react";
import Button from "./Button";
import { useWasViewed } from "../hooks/useWasViewed";

export default function MainProjectCard({ project }) {
  const { id, background, preview, name, description, technologies, website } =
    project;

  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-base" : "";

  return (
    <div
      className={` grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 mb-8 last:mb-0 p-4 md:odd:pl-12 rounded-md ${animation}`}
      style={{ background: background }}
      ref={setRef}
    >
      <div className={` flex-center ${id % 2 === 0 && "md:order-2"}`}>
        <img src={preview} alt={name} className=" rounded-sm" />
      </div>
      <div className=" flex flex-col justify-between">
        <div className=" flex flex-col">
          <p className=" text-xl lg:text-2xl font-khand font-semibold text-pink-red text">
            {name}
          </p>
          <p> {description}</p>
        </div>
        <div>
          {technologies.map((tech, i) => (
            <p
              className="text-list m-0 md:text-[1.1rem] xl:text-[1.2rem] "
              key={i}
            >
              {tech}
            </p>
          ))}
        </div>
        <div className=" flex items-center justify-around mt-2">
          <a href={website} target="_blank" rel="noopener noreferrer">
            <Button content="Live Demo" />
          </a>
        </div>
      </div>
    </div>
  );
}
