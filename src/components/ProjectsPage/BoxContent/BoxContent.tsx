import React from "react";
import "./styles.sass";
import { Link } from "gatsby";

export const BoxContent = (): JSX.Element => {
    return (
        <>
            <section className="projects-box-content projects-section">
                <div className="container">
                    <div className="column-box">
                        <h2 className="title">Design-Driven. <br />Human-Centered. <br />Category-Challenging. </h2>
                        <div className="content">
                            <div className="description visible-desktop">Places and spaces have never been as vital as they are today. Because in an increasingly virtual world, something real is of even greater value, not just as an asset but for our growth and development. Because how and why we make things is as important as what we make.</div>
                            <Link className="btn btn-primary" to={`#`}>Our Design & Build Philosophy</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default BoxContent;