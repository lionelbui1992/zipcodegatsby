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
                <BoxContent />
            </div>
        </>
    );
}
export default ProjectsPage;