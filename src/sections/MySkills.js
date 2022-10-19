import React from "react";
import Heading from "../components/Heading";
import Highlight from "../components/Highlight";
import SkillCard from "../components/SkillCard";
import { abilities, skills } from "../utils/config";

export default function MySkills(props) {
  return (
    <div className=" p-auto flex-center" id={props.id || ""}>
      <div className=" box">
        <Heading text="My Skills" />
        <div className=" bg-box p-4 md:p-8 rounded-2xl shadow-primary">
          {abilities.map((ability, i) => (
            <Highlight highlight={ability} key={i} />
          ))}
        </div>
        <div className=" grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 py-8">
          {skills.map((skill, i) => (
            <SkillCard skill={skill} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
