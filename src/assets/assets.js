import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaLaptopCode, FaGitAlt, FaGlobe, FaCss3Alt, FaBolt, FaHtml5, FaJs } from 'react-icons/fa';

import logo from './logo.jpeg';

export { logo };

import profileImg from '../assets/Profile-pic.jpeg';
import projectImg1 from '../assets/project1.jpg';
import projectImg2 from '../assets/project2.jpg';
import projectImg3 from '../assets/project3.jpg';
import projectImg4 from '../assets/project4.jpg';
import projectImg5 from '../assets/project5.jpg';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
 {
  icon: FaLightbulb,
  title: 'Quick Learner',
  description: 'Always learning new technologies and improving my skills.',
  color: 'text-purple'
},
{
  icon: FaPaintBrush,
  title: 'Problem Solver',
  description: 'Building practical solutions with modern web technologies.',
  color: 'text-pink'
},
{
  icon: FaCode,
  title: 'Clean Code',
  description: 'Writing clean, efficient, and maintainable code with best practices.',
  color: 'text-blue'
}
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and modern user interfaces.',
    tags: ['React.js','Tailwind CSS','HTML','CSS','JavaScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Developing RESTful APIs and server-side applications.',
    tags: ['Node.js', 'Express.js', 'REST API', 'JWT']
  },
  {
    title: 'Database',
    icon: FaDatabase,
    description: 'Managing and designing NoSQL databases.',
    tags: ['MongoDB', 'Mongoose', 'CRUD', 'Database Design']
  },
  {
    title: 'Version Control',
   icon: FaGitAlt,
    description: 'Managing projects and collaboration with Git.',
    tags: ['Git', 'GitHub', 'Git Bash', 'Version Control']
  },
  {
    title: 'Tools',
    icon: FaTools,
    description: 'Tools I use for efficient development.',
    tags: ['VS Code', 'Postman', 'npm', 'Vite']
  },
  {
    title: 'Web Technologies',
    icon: FaGlobe,
    description: 'Building complete MERN Stack applications.',
    tags: ['MERN Stack', 'Responsive Design', 'Bootstrap', 'JSON']
  }
];



export const projects = [
  {
    title: "Food Delivery Web App",
    description:
      "A full-stack MERN application featuring user authentication, food browsing, cart management, and order functionality.",
    image: projectImg1,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaServer, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Developer Portfolio",
    description:
      "A responsive personal portfolio showcasing my skills, projects, and experience with smooth animations and a modern UI.",
    image: projectImg2,
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    icons: [FaReact, FaCss3Alt, FaBolt, FaCode],
    demo: "#",
    code: "#",
  },
  {
    title: "Restaurant Backend API",
    description:
      "A RESTful backend API for restaurant management built with Node.js, Express.js, and MongoDB.",
    image: projectImg3,
    tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
    icons: [FaNodeJs, FaServer, FaDatabase, FaCode],
    demo: "#",
    code: "#",
  },
  {
    title: "Traveling Website",
    description:
      "A responsive travel website with interactive sections, smooth navigation, and modern frontend design.",
    image: projectImg4,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "#",
    code: "#",
  },
  {
    title: "QR Code & Utility Apps",
    description:
      "A collection of JavaScript projects including a QR Code Generator and a Digital Life Timer.",
    image: projectImg5,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "#",
    code: "#",
  },
  {
    title: "JavaScript Mini Projects",
    description:
      "A collection of frontend projects including a Code Editor, Landing Page, Quiz App, and Tic-Tac-Toe Game.",
    image: projectImg6,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "#",
    code: "#",
  },
];


export const workData = [
  {
    role: "Junior MERN Stack Developer",
    focus: "Full-Stack Development",
    duration: "2026 - Present",
    description:
      "Building full-stack web applications with React, Node.js, Express.js, and MongoDB while improving my development and problem-solving skills.",
    color: "purple"
  },
  {
    role: "JavaScript & MERN Learner",
    focus: "Self-Learning & Projects",
    duration: "2025 - 2026",
    description:
      "Learned JavaScript and MERN Stack through online resources and hands-on projects while continuing my university studies.",
    color: "pink"
  },
  {
    role: "Web Development Beginner",
    focus: "Frontend Development",
    duration: "2024 - 2025",
    description:
      "Started my web development journey with HTML and CSS, building small websites and developing a strong foundation in frontend development.",
    color: "blue"
  }
];