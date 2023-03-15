import { FaFacebookSquare, FaGithub } from "react-icons/fa";

import svgHTML from "../assets/skills/html.svg";
import svgCSS from "../assets/skills/css.svg";
import svgJS from "../assets/skills/javascript.svg";
import svgReact from "../assets/skills/react.svg";
import svgBootstrap from "../assets/skills/bootstrap.svg";
import svgAntDesign from "../assets/skills/antd.svg";

import Introduction from "../sections/Introduction";
import AboutMe from "../sections/AboutMe";
import MySkills from "../sections/MySkills";
import MainProjects from "../sections/MainProjects";

import FoodStore from "../assets/mainProjects/store.png";
import PasswordGenerator from "../assets/mainProjects/generate-password.png";
import ShoeStore from "../assets/mainProjects/shoeStore.png";
import Contact from "../sections/Contact";
import EBackEnd from "../assets/mainProjects/E-commerce-back-end.png";
import EDashboard from "../assets/mainProjects/dashboard.png";

export const socialMediaIcons = [
  {
    name: "facebook",
    icon: <FaFacebookSquare />,
    url: "https://www.facebook.com/trong.trongnguyen249",
    color: "#4267B2",
  },
  {
    name: "github",
    icon: <FaGithub />,
    url: "https://github.com/trong2409",
    color: "#333333",
  },
];

export const facts = [
  "Currently, I'm a 4th year student majoring in Computer Engineering at Ho Chi Minh City University of Technology ",
  "I enjoy learning about JavaScript technologies like Express, ReactJS.",
  "I had successfully completed 2 months of internship at FPT Software",
  "Future Goals: Learn more technologies and become a full-stack developer",
];

export const abilities = [
  "Experience in using JavaScript(ES6), HTML5, CSS3, MongoDB",
  // "Experience with ReactJS, Redux and Router.",
  // "Responsive for a better user experience",
  "Have experience in Git",
  "Farmiliar with English",
  "TOEIC certificate: 755 (Reading & Listening)",
  // "Friendly with Ant Design, Bootstrap.",
];

export const skills = [
  {
    name: "HTML",
    icon: svgHTML,
  },
  {
    name: "CSS",
    icon: svgCSS,
  },
  {
    name: "Javascript",
    icon: svgJS,
  },
  {
    name: "React",
    icon: svgReact,
  },
  {
    name: "Bootstrap",
    icon: svgBootstrap,
  },
  {
    name: "Ant Design",
    icon: svgAntDesign,
  },
];

export const displays = [
  {
    id: "home",
    name: "Home",
    component: Introduction,
  },
  {
    id: "about-me",
    name: "About Me",
    component: AboutMe,
  },
  {
    id: "skills",
    name: "Skills",
    component: MySkills,
  },
  {
    id: "projects",
    name: "Projects",
    component: MainProjects,
  },
  {
    id: "contact",
    name: "Contact",
    component: Contact,
  },
];

export const miniProject = [
  // {
  //   id: 1,
  //   name: "Password Generator",
  //   img: PasswordGenerator,
  //   link: "https://github.com/trong2409/GeneratePassword",
  // },
  // {
  //   id: 2,
  //   name: "Food Store",
  //   img: FoodStore,
  //   link: "https://github.com/trong2409/store",
  // },
  // {
  //   id: 3,
  //   name: "Shoe store",
  //   img: ShoeStore,
  //   link: "https://github.com/trong2409/TNstore",
  // },
  {
    id: 4,
    name: "E-commerce Back-end",
    img: EBackEnd,
    link: "https://github.com/trong2409/E-Commerce_back_end",
  },
  {
    id: 5,
    name: "E-commerce Dashboard",
    img: EDashboard,
    link: "https://github.com/trong2409/E-commerce_front_end_dashboard",
  },
];
