import { NavItemType, passionType, projectType, skillType } from "./type";
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineFacebook,
  } from "react-icons/ai";
  import { RiTelegramLine } from "react-icons/ri";
export const NAV_ITEMS: Array<NavItemType> = [
    {
      label: "Home",
      page: "home",
    },
   
    {
      label: "About",
      page: "about",
    },
     
    {
      label: "Passion",
      page: "passion",
    },
    // {
    //   label: "Projects",
    //   page: "projects",
    // },
   
  ];

  export  const SOCIAL_MEDIA = [
    {
      link: "https://github.com/seanglayz",
      icon: AiOutlineGithub,
    },
    {
      link: "https://www.linkedin.com/in/seanglay-ly-9a0584209/",
      icon: AiOutlineLinkedin,
    },
    {
      link: "https://web.facebook.com/li.seanglay.2k/",
      icon: AiOutlineFacebook,
    },
    {
      link: "https://t.me/SeangLayz",
      icon: RiTelegramLine,
    },
  ];

 
export const SKILLS: Array<skillType> = [
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "React JS" },
    { skill: "Next JS" },
    { skill: "Node JS" }, { skill: "Nest JS" },
    { skill: "MongoDB" }, { skill: "MySQL" },
    { skill: "React Native" },
    { skill: "Tailwind CSS" },
    { skill: "Chakra UI" },
    { skill: "Material UI" },
    { skill: "Flutter" },
    { skill: "Laravel" },
  ];

  export const PASSIONS : Array<passionType> =[{
    "title":"Front-end",
    "src":'/frontend.png',
    "desc":"Creativity is nothing but the way to solve new problems. It’s through mistakes that you actually can grow. You have to get bad in order to get good",
  },{
    "title":"Back-end",
    "desc":"Networks don't want a show with a continuing story. There's no backend potential.",
    "src":'/backend.png',
  },{
    "title":"Mobile",
    "desc":"Mobile is becoming not only the new digital hub, but also the bridge to the physical world. That’s why mobile will affect more than just your digital operations — it will transform your entire business.",  "src":'/mobile.png',
  }];

  export const PROJECTS: Array<projectType> = [
    {
      name: "Music App",
      description:
        "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
      image: "/thankfulthoughts.png",
      github: "https://github.com/seanglayz/music_app",
      link: "",
    },
    {
      name: "Food Delivery",
      description: "PlatoIO is a to do list app that built using the PERN stack.",
      image: "/platoio.png",
      github: "https://github.com/seanglayz/Food_Delivery",
      link: "",
    },
    {
      name: "Power Blog",
      description:
        "Kator Family Photos is a photos and video digitization service in the LA area.",
      image: "/familyphotos.png",
      github: "https://github.com/seanglayz/power-blog",
      link: "",
    },
     {
      name: "Travel App",
      description:
        "Kator Family Photos is a photos and video digitization service in the LA area.",
      image: "/familyphotos.png",
      github: "https://github.com/seanglayz/travel_app",
      link: "",
    },
  ];