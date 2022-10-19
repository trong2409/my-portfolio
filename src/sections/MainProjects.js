import React from "react";
import Heading from "../components/Heading";
import { miniProject } from "../utils/config";
import MiniProjectCard from "../components/MiniProjectCard";

export default function MainProjects(props) {
  return (
    <div className=" p-auto flex-center" id={props.id || ""}>
      <div className=" box">
        <Heading text="Mini project" />
        <div className="flex-center">
          {miniProject.map((project) => {
            return (
              <MiniProjectCard
                link={project.link}
                img={project.img}
                key={project.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
