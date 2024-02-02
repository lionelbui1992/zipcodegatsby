import React from "react";
import "./styles.sass";

interface Props {
    OurCultureTitle: string;
    OurCultureimage: string;
    OurCultureContent: string;
}

export const OurCulture = ({
    OurCultureTitle,
    OurCultureimage,
    OurCultureContent
}: Props): JSX.Element => {
    return (
        <>
            <section className="projects-box-content projects-section">
                <div className="container">
                    <div className="column-box">
                        <div className="column-title">
                            <h2 className="title">{OurCultureTitle}</h2>
                        </div>
                        <div className="column-image">
                            <div className="image-inner">
                                <img
                                    loading="lazy"
                                    srcSet={`${OurCultureimage}`} className="img"
                                    alt={`${OurCultureTitle}`}
                                />
                            </div>
                        </div>
                        <div className="column-content">
                            <div className="description" dangerouslySetInnerHTML={{__html: OurCultureContent}} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default OurCulture;