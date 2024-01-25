import React from "react";
import "./styles.sass";
import { OurTeams } from "./OurTeams";
import { BoxImage } from "./BoxImage";

export const AboutPage = (): JSX.Element => {
    return (
        <div className="about-page">
            <section className="about-our-teams about-section">
                <div className="box-image-left box-image">
                    <BoxImage />
                </div>
                <div className="our-teams">
                  <OurTeams />
                </div>
            </section>
        </div>
    );
};