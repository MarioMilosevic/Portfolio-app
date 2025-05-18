import { FaGamepad, FaVuejs } from "react-icons/fa";
import { SiExpress, SiPostgresql } from "react-icons/si";
import { ProjectType } from "./globalTypes";
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
    title: "GameVerse game store for some of my favorite video games",
    description:
      "GameVerse is a full-stack application with a responsive design, built with Vue 3 on the frontend and Express.js on the backend, using a PostgreSQL database to store data. The app features a collection of 9 games, and users can create an account to leave reviews (rated 1–10) and comments for each game. Zod is used on the frontend for form validation, while the backend returns appropriate response messages for each request. After signing up, users must log in, at which point a JWT is generated on the server, sent to the client, and stored in localStorage. The UI is styled with Tailwind CSS and includes a dark mode feature, with the selected theme also stored in localStorage to persist user preferences. Users can update their profile information, including their name, email, and profile image. The app also includes a dedicated admin dashboard for user management, accessible only to admin users. The project is hosted on Render.",
    imagePath: "/images/projects/gameVerseImg.PNG",
    projectIcons: [
      { icon: FaVuejs, text: "Vue.js" },
      { icon: SiExpress, text: "Express.js" },
      { icon: SiPostgresql, text: "PostgreSQL" },
    ],
  },
];
