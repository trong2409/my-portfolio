import React, { useMemo } from "react";
import avatar from "../assets/avatar.jpg";
import wave from "../assets/footer.png";
import ScrollUp from "../components/ScrollUp";
import Navbar from "../components/Navbar";
import { useWasViewed } from "../hooks/useWasViewed";
import Button from "../components/Button";
import { useTypewriter } from "use-typewriter-hook";

export default function Introduction(props) {
  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-base" : "null";

  const { setRef: refIntro, isInView: introInView } = useWasViewed();

  const { textValue: typedText } = useTypewriter({
    targetText: "I'm a fresher ReactJS Developer",
    autoStartDelay: 1000,
    typingDelayMillis: 50,
    loopDelay: 2000,
    loop: true,
  });

  return (
    <div className=" bg-home">
      {useMemo(
        () => (
          <Navbar />
        ),
        []
      )}
      <div
        className=" p-auto flex flex-col justify-center items-center"
        ref={refIntro}
        id={props.id || ""}
      >
        <div className=" flex flex-col-reverse lg:grid lg:gap-12 lg:grid-cols-[1fr_200px] 2xl:gap-20 2xl:grid-cols-[1fr_300px] max-w-[1024px] w-[80%] items-center">
          <div className=" text-center">
            <div ref={setRef} className={animation}>
              <h3 className=" mt-4 text-xl lg:text-2xl 2xl:text-3xl">
                Hi ! My name's{" "}
                <span className=" text-pastel-pink font-khand font-semibold">
                  Trong Nguyen
                </span>
              </h3>

              <div className="text-lg md:text-xl xl:text-2xl min-h-[32px] md:min-h-[48px] xl:min-h-[60px] use-typewriter-hook">
                {typedText}
              </div>
              <p>
                I enjoy learning everything about Front-end and Back-end
                technologies
              </p>
              <div className="mt-4">
                <a href="/HoangAnhTuan_Fresher_ReactJS.pdf" download>
                  <Button content="Download Resume" />
                </a>
              </div>
            </div>
          </div>
          <div className=" rounded-full shadow-avatar flex-center h-[200px] w-[200px] 2xl:w-[300px] 2xl:h-[300px] mb-4 lg:mb-0">
            <img
              src={avatar}
              alt="Anh Tuan"
              className=" rounded-full w-[90%] h-[90%] transition duration-1000 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
      <img src={wave} alt="wave" className=" h-[130px] w-screen align-middle" />
      <ScrollUp visible={!introInView} />
    </div>
  );
}
