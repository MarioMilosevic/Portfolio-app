import {
  FaGamepad,
  FaVuejs,
  FaChair,
  FaReact,
  FaLightbulb,
  FaSass,
  FaBed,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiCloudinary,
  SiSupabase,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { ProjectType } from "@/lib/globalTypes";

export const navigationLinks = [
  "HOME",
  "ABOUT",
  "EXPERIENCE",
  "PROJECTS",
  "RECOMMENDATIONS",
  "EXPLORE",
];

export const personalProjects: ProjectType[] = [
  {
    mainIcon: FaGamepad,
    createdAt: "April 2025",
    title: "GameVerse - game store for some of my favorite video games",
    description:
      "GameVerse is a full-stack app built with Vue 3, Express.js, and PostgreSQL. It features 9 games, user accounts with JWT-based auth, the ability to leave ratings (1–10) and comments. The UI, styled with Tailwind CSS, supports dark mode and is fully responsive. Users can update their profiles, and an admin dashboard provides user management tools. The frontend uses Zod for validation, and the backend returns clear response messages. User preferences and JWTs are stored in localStorage. Hosted on Render.",
    imagePath: "/images/projects/gameVerseImg.PNG",
    projectIcons: [
      { icon: FaVuejs, text: "Vue.js" },
      { icon: SiExpress, text: "Express.js" },
      { icon: SiTypescript, text: "TypeScript" },
      { icon: SiPostgresql, text: "PostgreSQL" },
      { icon: SiTailwindcss, text: "TailwindCSS" },
    ],
    code: "https://github.com/MarioMilosevic/GameVerse",
    liveDemo: "https://game-verse-sigma.vercel.app/",
  },
  {
    mainIcon: FaChair,
    createdAt: "May 2024",
    title: "X shoppers dream - e-commerce furniture store",
    description:
      "Modern responsive e-commerce furniture store featuring a dymanic landing page, with smooth scroll effects. Integrated a product slider and implemented client-side filtering and sorting to improve UX. State managed using Redux Toolkit. Made responsive with Tailwind CSS.",
    imagePath: "/images/projects/x-shoppers-dream.PNG",
    projectIcons: [
      { icon: FaReact, text: "React.js" },
      { icon: SiRedux, text: "Redux Toolkit" },
      { icon: SiTypescript, text: "TypeScript" },
      { icon: SiTailwindcss, text: "TailwindCSS" },
    ],
    code: "https://github.com/MarioMilosevic/x-shoppers-dream-e-commerce",
    liveDemo: "https://x-shoppers-dream-e-commerce.vercel.app/",
  },
  {
    mainIcon: FaLightbulb,
    createdAt: "December 2024",
    title: "Product Feedback - app designed for managing feedbacks.",
    description:
      "Developed a full-stack feedback application using Vue 3 on the frontend and Supabase as the backend and database. Integrated Cloudinary API for image uploads and implemented infinite scrolling with data fetching on scroll. Features include server-side filtering and sorting, like (upvote) functionality. Utilized SASS for organized styling and Zod for schema-based form validation",
    imagePath: "/images/projects/product-feedback.PNG",
    projectIcons: [
      { icon: FaVuejs, text: "Vue.js" },
      { icon: SiTypescript, text: "TypeScript" },
      { icon: SiCloudinary, text: "Cloudinary" },
      { icon: SiSupabase, text: "Supabase" },
      { icon: FaSass, text: "Sass" },
    ],
    code: "https://github.com/MarioMilosevic/x-shoppers-dream-e-commerce",
    liveDemo: "https://x-shoppers-dream-e-commerce.vercel.app/",
  },
  {
    mainIcon: BiSolidMoviePlay,
    createdAt: "July 2024",
    title: "Cinema 100 - IMDB and Netflix inspired movie application.",
    description:
      "Cinema 100 is a React application where you can browse through 100 movies, view detailed information, and watch trailers. You can also bookmark your favorite movies and access them later. The app utilizes Firebase for authentication, database storage, and other backend services.",
    imagePath: "/images/projects/cinema-100.PNG",
    projectIcons: [
      { icon: FaReact, text: "React.js" },
      { icon: SiRedux, text: "Redux Toolkit" },
      { icon: SiTypescript, text: "TypeScript" },
      { icon: IoLogoFirebase, text: "Firebase" },
      { icon: SiTailwindcss, text: "TailwindCSS" },
    ],
    code: "https://github.com/MarioMilosevic/Cinema-100",
    liveDemo: "https://cinema-100.vercel.app/",
  },
  {
    mainIcon: MdDashboard,
    createdAt: "February 2025",
    title: "Employee Manager - Admin Dashboard",
    description:
      "Developed a full-stack employee management system using Vue 3, Express.js, and PostgreSQL. Implemented JWT-based authentication with persistent user sessions via localStorage. Features include user registration, login, and full CRUD functionality for managing employees, along with an admin dashboard for managing user roles and permissions. The frontend, styled with Sass, is fully responsive and utilizes Zod for robust form validation. The backend delivers clear, structured response messages. Hosted on render.",

    imagePath: "/images/projects/employee-manager.PNG",
    projectIcons: [
      { icon: FaVuejs, text: "Vue.js" },
      { icon: SiExpress, text: "Express.js" },
      { icon: SiTypescript, text: "TypeScript" },
      { icon: FaSass, text: "Sass" },
      { icon: SiPostgresql, text: "PostgreSQL" },
    ],
    code: "https://github.com/MarioMilosevic/Employee-Manager",
    liveDemo: "https://employee-manager-ashy.vercel.app/",
  },
  {
    mainIcon: FaBed,
    createdAt: "August 2024",
    title: "CityLaneRooms - Admin Room Management",
    description:
      "CityLaneRooms is an admin-focused full-stack room management application. It features room, bookings, settings, and user management. The frontend is built with React.js, and Supabase is used for the backend and database.\n\nLogin credentials:\nUsername: admin@gmail.com\nPassword: 12345678",

    imagePath: "/images/projects/citylane-rooms.PNG",
    projectIcons: [
      { icon: FaReact, text: "React.js" },
      { icon: SiSupabase, text: "Supabase" },
      { icon: SiTypescript, text: "TypeScript" },
      { icon: SiTailwindcss, text: "TailwindCSS" },
    ],
    code: "https://github.com/MarioMilosevic/CityLane-Rooms",
    liveDemo: "https://city-lane-rooms.vercel.app/",
  },
];

export const mySkills = [
  { icon: FaReact, text: "React.js" },
  {icon:RiNextjsFill, text:"Next.js"},
  { icon: FaVuejs, text: "Vue.js" },
  { icon: SiTypescript, text: "TypeScript" },
  { icon: SiJavascript, text: "JavaScript" },
  { icon: FaNodeJs, text: "Node.js" },
  { icon: SiExpress, text: "Express.js" }, 
  {icon:SiRedux, text:"Redux"},
  { icon: SiSupabase, text: "Supabase" },
  { icon: FaHtml5, text: 'HTML5' },
  {icon:FaCss3, text:"CSS3"},
  { icon: SiTailwindcss, text: "TailwindCSS" },
  { icon: FaSass, text: "Sass" },
  {icon:FaGitAlt, text:"Git"}
];
