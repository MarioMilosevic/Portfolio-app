import { FaGamepad, FaVuejs, FaChair, FaReact } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiTailwindcss, SiRedux } from "react-icons/si";
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
    title: "GameVerse - game store for some of my favorite video games",
    description:
      "GameVerse is a full-stack app built with Vue 3, Express.js, and PostgreSQL. It features 9 games, user accounts with JWT-based auth, and the ability to leave ratings (1–10) and comments. The UI, styled with Tailwind CSS, supports dark mode and is fully responsive. Users can update their profiles, and an admin dashboard provides user management tools. The frontend uses Zod for validation, and the backend returns clear response messages. User preferences and JWTs are stored in localStorage. Hosted on Render.",
    imagePath: "/images/projects/gameVerseImg.PNG",
    projectIcons: [
      { icon: FaVuejs, text: "Vue.js" },
      { icon: SiExpress, text: "Express.js" },
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
      { icon: SiTailwindcss, text: "TailwindCSS" },
    ],
    code: "https://github.com/MarioMilosevic/x-shoppers-dream-e-commerce",
    liveDemo: "https://x-shoppers-dream-e-commerce.vercel.app/",
  },
];
