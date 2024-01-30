import React from "react";
import "./styles.sass";
import { Banner } from "./Banner";
import { TextMarquee } from "../TextMarquee";
import { BoxContent } from "./BoxContent";

export const ProjectsPage = (): JSX.Element => {
    return (
        <>
            <div className="projects-page">
                <Banner />
                <TextMarquee />
                <BoxContent
                    className="box-image-left" 
                    boxTitle="Design-Driven. Human-Centered. Category-Challenging. " 
                    boxContent="Places and spaces have never been as vital as they are today. Because in an increasingly virtual world, something real is of even greater value, not just as an asset but for our growth and development. Because how and why we make things is as important as what we make." 
                    boxLinkText="Our Design & Build Philosophy" 
                    boxLinkUrl="#" 
                />
            </div>
        </>
    );
}
export default ProjectsPage;