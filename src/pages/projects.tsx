import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { ProjectsPage } from "../components/ProjectsPage";

const Projects: React.FC<PageProps> = () => {
    return (
        <>
          <ProjectsPage />
        </>
      );
}

export default Projects

export const Head: HeadFC = () => <title>Projects</title>
