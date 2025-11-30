import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  YashLogo,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  NodeJS,
  DauchiLogo,
  MobileLogo,
  MobileWeb,
   LendWeb,
  Dauchiweb
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Node.js Backend Developer",
    icon: backend,
  },
  {
    title: "Ruby on Rails Developer",
    icon: mobile,
  },
  {
    title: "Full-stack MERN Developer",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Yash Techs",
    icon: YashLogo,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-stack MERN Developer",
    company_name: "Yash Techs",
    icon: YashLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using MongoDB, Express, React, and Node.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Ruby on Rails Developer",
    company_name: "Upwork",
    icon: NodeJS,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using Ruby on Rails and SQL database management.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Sharetribe Marketplace Developer",
    company_name: "Upwork",
    icon: NodeJS,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining marketplace applications using Sharetribe (Go & Flex) platform.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Great ReactJS developer, very strong understanding of the React stack. Iram was able to help us in designing a full invoicing application, and even was able to code wireframes for pages we hadn't come up with quite yet. It was great to work with her.",
    name: "Melanie Neilan",
    designation: "CEO",
    company: "Dragonsurge Software",
    image: DauchiLogo,
  },
  { 
    testimonial:
      "Working with Iram has been a really good experience. Clear communication, professional approach, and always responsive throughout the process. The project requirements were understood well, which made collaboration smooth. I’d definitely recommend working with Iram again.",
    name: "Jamie Hutchinson",
    designation: "Senior Software Engineer",
    company: "FreeAgent",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Iram was a pleasure to work with. She was able to understand the project requirements quickly and was able to deliver the project on time. She was also able to provide valuable feedback and suggestions for the project. I would definitely recommend working with Iram again.",
    name: "Sangheon Jung",
    designation: "Founder",
    company: "Mobilife",
    image: MobileLogo,
  },
];

const projects = [
  {
    name: "Dauchi",
    description:
      "Web-based platform that allows users to assist in two healthcare software projects: a newer payment portal application and a legacy telehealth wellness application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Dauchiweb,
    source_code_link: "https://github.com/",
  },
  {
    name: "",
    description:
      "A fashion rental marketplace where users can lend and rent designer outfits and accessories for special occasions. The platform enables users to browse collections, book rentals, and manage listings seamlessly through an intuitive, modern interface focused on accessibility and style.",
    tags: [
      {
        name: "Ruby on Rails",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: LendWeb,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mobilife WebApp",
    description:
      "Mobilife is an Australian user-friendly web platform that simplifies the process of renting apartments. It allows users to explore available properties, view detailed listings with images and amenities, and connect directly with owners or agents. The platform focuses on delivering a smooth and responsive experience with clean UI design, advanced search filters, and real-time availability updates — making apartment hunting faster, easier, and more reliable.",
    tags: [
      {
        name: "Sharetribe",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: MobileWeb,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
