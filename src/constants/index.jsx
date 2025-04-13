import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Sumon Mia",
  greet: "Hello there! 👋🏻",
  description: "I build software for science.",
};
export const HERO1 = {
  description: " I'm passionate developer.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "Muhammad Sumon Mia is a passionate and dedicated frontend and full-stack web developer, currently pursuing his Bachelor’s degree in Computer Science and Engineering at Presidency University. He enrolled in 2022 and is now studying in his fourth semester, all while actively building his professional journey alongside his academic path.",
  "Driven by a deep interest in web technologies, he completed his web development training from Programming Hero, a renowned learning platform based in Bangladesh. There, he built a strong foundation in modern web development practices and technologies.",
  "In 2024, Sumon founded his own IT company,  'ERROR IT SOLUTION LID.', with the goal of delivering creative and impactful digital solutions. As the Founder, CEO, and Full Stack Developer, he has been independently running the company for over a year, working on diverse client projects and building innovative web applications",
  "His skill set spans from core technologies like HTML, CSS, and JavaScript to advanced frameworks and tools such as React.js,Next js, Node.js, Express.js, and MongoDB. Constantly learning and growing, Sumon is committed to mastering the latest technologies and delivering high-quality work in every project he undertakes.",
  "His long-term vision is to become a skilled Software Architect and to create digital solutions that empower people and businesses in meaningful ways.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "8+ month",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "8+ month",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "8+ month",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "8+ month",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "8+ month",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "8+ month",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Web Developer & CEO",
    company: "Error It Solution Ltd.",
    duration: "August 2024 - Present",
    description: [
      "A web developer builds and optimizes web applications, while a CEO sets the company’s vision and strategy.",
      "I collaborated with teams to enhance website performance, while also managing business operations and growth.",
      "I wrote clean, efficient code to improve functionality, while leading and motivating teams for productivity.",
      "I ensured website reliability through testing and debugging, while also building partnerships for company success.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Presidency University, Bangladesh",
    duration: "June 2022 - Ongoing (4th Semester) ",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform.",
  },
  {
    degree: "Mern Stack Web Development Course",
    institution: "Programming Hero , Bangladesh",
    duration: "june2024 - Dec 2024",
    description:
      "Skilled in MERN Stack web development with hands-on experience in building full-stack applications using MongoDB, Express.js, React,Next js, and Node.js.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/sumonmia360/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discordapp.com/users/sumonmia360_85210",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sumonmia360/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/SumonMia360/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/sumonmia360",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sumonmia360/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
