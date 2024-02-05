import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Banner } from "../components/ProjectsPage/Banner";
import { TextMarquee } from "../components/TextMarquee";
import { BoxContent } from "../components/ProjectsPage/BoxContent";

const Projects: React.FC<PageProps> = () => {
  const BoxContentTitle = 'Design-Driven. <br />Human-Centered. <br />Category-Challenging.';
  const BoxContentContent = 'Places and spaces have never been as vital as they are today. Because in an increasingly virtual world, something real is of even greater value, not just as an asset but for our growth and development. Because how and why we make things is as important as what we make.';
  const BoxContentButtonLink = '#';
  const BoxContentButtonText = 'Our Design & Build Philosophy';

  return (
    <>
      <div className="projects-page">
        <Banner />
        <TextMarquee />
        <BoxContent 
          BoxContentTitle={BoxContentTitle} 
          BoxContentContent={BoxContentContent} 
          BoxContentButtonLink={BoxContentButtonLink} 
          BoxContentButtonText={BoxContentButtonText} 
        />
      </div>
    </>
  );
}

export default Projects

export const Head: HeadFC = () => <title>Projects</title>
