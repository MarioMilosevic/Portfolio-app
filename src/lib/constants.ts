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
  FaGitAlt,
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
import {
  ExperienceType,
  ProjectType,
  RecommendationType,
} from "@/lib/globalTypes";
import dejan from "/images/recommendations/dejan.jpeg";
import nemanja from "/images/recommendations/nemanja.jpg";
import drazen from "/images/recommendations/drazen.jpg";
import ilhan from "/images/recommendations/ilhan.jpg";

export const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
export const privateKey = import.meta.env.VITE_EMAILJS_PRIVATE_KEY;
export const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export const navigationLinks = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Recommendations",
  "Explore",
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
  { icon: RiNextjsFill, text: "Next.js" },
  { icon: FaVuejs, text: "Vue.js" },
  { icon: SiTypescript, text: "TypeScript" },
  { icon: SiJavascript, text: "JavaScript" },
  { icon: FaNodeJs, text: "Node.js" },
  { icon: SiExpress, text: "Express.js" },
  { icon: SiRedux, text: "Redux" },
  { icon: SiSupabase, text: "Supabase" },
  { icon: FaHtml5, text: "HTML5" },
  { icon: FaCss3, text: "CSS3" },
  { icon: SiTailwindcss, text: "TailwindCSS" },
  { icon: FaSass, text: "Sass" },
  { icon: FaGitAlt, text: "Git" },
];

export const recommendations: RecommendationType[] = [
  {
    fullName: "Nemanja Malesija",
    image: nemanja,
    role: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/nemanja-malesija/",
    github: "https://github.com/nemanjamalesija",
    instagram: "https://www.instagram.com/nemanja_malesija/",
    text: "I have worked with Mario for several years now, before at Devcor, and now at Emasys. He was always respectfull of others, and worked very professionaly, and it has truly been a joy to work with him. While other developers could get offended when receiving a feedback, he always used feedback as an opportunity to learn and improve, whether it being good or bad feedback, he always wanted to understand the bigger picture.",
  },
  {
    fullName: "Dejan Bogićević",
    image: dejan,
    role: "Lead Software Engineer",
    linkedin: "https://www.linkedin.com/in/dejan-bogi%C4%87evi%C4%87-66b47ba3/",
    github: "",
    instagram: "https://www.instagram.com/dbogi_89/",
    text: "I've known Mario for several years, and working with him has always been a pleasure. His curiosity and attention to detail stand out immediately. Rather than just writing code to fix a problem, Mario carefully considers long-term maintainability, accessibility, and performance. He consistently looks beyond the immediate task, thinking about how each part fits into the overall system. His problem-solving is thoughtful, his code is clean and scalable, and he's always eager to learn and improve. Feedback—positive or negative—is something he welcomes, using it as a tool to grow and refine his craft. A reliable and growth-minded developer, Mario adds value to every project he joins",
  },
  {
    fullName: "Dražen Jelić",
    image: drazen,
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/drazen-jelic-1a1b24238/",
    github: "",
    instagram: "https://www.instagram.com/drazen.jelic/",
    text: "I met Mario last year, and we immediately clicked. What stood out to me was his professionalism and sharp attention to detail. Even when facing tight deadlines or high-pressure situations, he remained calm and focused. Rather than rushing into code, Mario would take a step back, write out the problem on a whiteboard, and clearly lay out all his options before deciding on the most effective solution. That level of composure and strategic thinking is rare—and it made working with him not only productive but genuinely enjoyable.",
  },
  {
    fullName: "Ilhan Kalač",
    image: ilhan,
    role: "Software Developer",
    linkedin: "https://www.linkedin.com/in/ilhankalac/",
    github: "https://github.com/ilhankalac",
    instagram: "https://www.instagram.com/vizija/",
    text: "Mario once asked me to review one of his personal side projects. Even outside of work, he is always eager to improve by practicing on side projects and experimenting with new ideas. This clearly shows his curiosity and strong commitment to becoming a better developer every day. After I gave him detailed feedback with suggestions on how to enhance his project, he took it seriously and implemented most of the improvements we discussed. I believe Mario is a great developer, and with time, he will continue to improve.",
  },
];

export const experiences: ExperienceType[] = [
  {
    companyName: "Emasys",
    destination: "Zagreb Croatia",
    job: "Frontend Developer",
    startDate: "Aug 2023",
    endDate: "Present",
    about:
      "At Emasys, I joined the team through a recommendation from a colleague at Devcor and have been working with them remotely. The company specializes in energy efficiency, providing solutions to optimize energy consumption.",
    accomplishments: [
      "Built responsive frontend interfaces for multiple client projects utilizing modern CSS techniques,",
      "Integrated state management stores, optimizing application performance and reducing load time by 47%,",
      "Participated in peer code reviews, providing feedback on best practices, which helped resolve 52% of production bugs improving code maintainabillity,",
      "Mentored junior developers and established code review processes to enhance performance and meet bussiness goals, reducint production issues by 15%,",
      "Collaborating effectively with the backend team utilizing Laravel,",
      "Deploying code to QA environments to address bugs not detected locally, ensuring smoother product releases,",
      "Maintaining high productivity during weekly development meetings.",
    ],
  },
  {
    companyName: "Devcor",
    destination: "Podgorica Montenegro",
    job: "Frontend Developer",
    startDate: "Oct 2021",
    endDate: "Jun 2023",
    about:
      "At Devcor, I had the opportunity to work on multiple projects for various clients. As an agency, we handled a diverse range of tasks using different solutions.",
    accomplishments: [
      "Utilized HTML CSS and JavaScript to crate 15+ responsive landing pages,",
      "Successfully migrated legacy JavaScript codebases to React.js and Vue.js with TypeScript,",
      "Participated in product releases and code reviews with senior developers and team leads,",
      "Worked in a cross-functional team to receive and implement design requirements to build and enhance 10+ web applicatons,",
      "Identified and implemented dynamic web solutions in accordance to company standards and best practices.",
    ],
  },
];
