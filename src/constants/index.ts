import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  csharp,
  aspDotNet,
  mysql,
  rockPaperScissor,
  billEvader,
  GFP,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "ASP.NET",
    icon: aspDotNet,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Rock-Paper-Scissors Multiplayer Game",
    description:
      "Web-based rock-paper-scissor game that allows users to chat real-time, providing a fun way to connect and engage in fierce competition!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "yellow-text-gradient",
      },
    ],
    image: rockPaperScissor,
    source_code_link: "https://capstone-game-ui.vercel.app/",
  },
  {
    name: "Bill-Evader",
    description:
      "A fun web-based side-scrolling endless runner game developed for the 2024 Global Game Jam Hackathon.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: billEvader,
    source_code_link: "https://sionara.github.io/GGJ/",
  },
  {
    name: "Group Flight Planner",
    description:
      "A collaborative, full-stack web application which displays flights to tree planting events for groups of volunteers.",
    tags: [
      {
        name: "CSharp",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "green-text-gradient",
      },
      {
        name: "BootStrap",
        color: "pink-text-gradient",
      },
    ],
    image: GFP,
    source_code_link: "https://github.com/sionara/GroupFlightPlanner",
  },
];

export { services, technologies, projects };
