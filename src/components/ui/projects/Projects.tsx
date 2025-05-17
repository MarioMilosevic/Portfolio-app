import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import Project from "@/components/ui/projects/Project";
import ProjectHeader from "@/components/ui/projects/header/ProjectHeader";
import ProjectDateCreated from "@/components/ui/projects/header/ProjectDateCreated";
import ProjectTitle from "@/components/ui/projects/header/ProjectTitle";
import ProjectTitleWrapper from "@/components/ui/projects/header/ProjectTitleWrapper";
import ProjectMain from "@/components/ui/projects/main/ProjectMain";
import ProjectDescription from "@/components/ui/projects/main/ProjectDescription";
import ProjectImage from "@/components/ui/projects/main/ProjectImage";

import { forwardRef } from "react";
import { FaGamepad } from "react-icons/fa";

const Projects = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    return (
      <Section id="projects" ref={ref} className="flex flex-col gap-2">
        <Subtitle>Freetime Projects</Subtitle>
        <Project>
          <ProjectHeader>
            <ProjectTitleWrapper>
              <FaGamepad size={25} />
              <ProjectTitle>
                GameVerse - game store for some of my favorite video games
              </ProjectTitle>
            </ProjectTitleWrapper>
            <ProjectDateCreated>April 2025</ProjectDateCreated>
          </ProjectHeader>

          <ProjectMain>
            <ProjectDescription>
              GameVerse is a full-stack application with a responsive design,
              built with Vue 3 on the frontend and Express.js on the backend,
              using a PostgreSQL database to store data. The app features a
              collection of 9 games, and users can create an account to leave
              reviews (rated 1–10) and comments for each game. Zod is used on
              the frontend for form validation, while the backend returns
              appropriate response messages for each request. After signing up,
              users must log in, at which point a JWT is generated on the
              server, sent to the client, and stored in localStorage. The UI is
              styled with Tailwind CSS and includes a dark mode feature, with
              the selected theme also stored in localStorage to persist user
              preferences. Users can update their profile information, including
              their name, email, and profile image. The app also includes a
              dedicated admin dashboard for user management, accessible only to
              admin users. The project is hosted on Render.
            </ProjectDescription>
            <ProjectImage path="/images/projects/gameVerseImg.PNG" />
          </ProjectMain>
        </Project>
      </Section>
    );
  }
);
// da napravim objekte, i da svaki objekat ima allign, ili order nesto tako, na osnovu cega cu da ih namjestam

export default Projects;
