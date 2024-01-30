import React from "react";
import "./styles.sass";
import { Link } from "gatsby";

export const Banner = (): JSX.Element => {
    return (
        <>
            <section className="projects-banner projects-section">
                <div className="section-bkg">
                    <img loading="lazy" srcSet="/img/page-privacy-policy-bkg.png" />
                </div>
                <div className="container">
                    <div className="section-content">
                        <div className="content-inner">
                            <h1 className="title h5 small">Spaces & Places</h1>
                            <div className="projects-items text-center">
                                <div className="item" data-popup="projects-popup-1">
                                    <h3>Project<img loading="lazy" srcSet="/projects/page-projects-image-1.png" /> Koala</h3>
                                    <span>A Universe within A University.</span>
                                </div>
                                <div className="item" data-popup="projects-popup-1">
                                    <h3>Project<img loading="lazy" srcSet="/projects/page-projects-image-2.png" /> Kanga</h3>
                                    <span>A Limitless Creative Oasis</span>
                                </div>
                                <div className="item" data-popup="projects-popup-1">
                                    <h3>Project<img loading="lazy" srcSet="/projects/page-projects-image-3.png" /> Heyday</h3>
                                    <span>An Experience Like No Other.</span>
                                </div>
                                <div className="item">
                                    <h3>DIB Museum Bangkok</h3>
                                    <span>A Boundaryless Museum-in-a District.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Banner;