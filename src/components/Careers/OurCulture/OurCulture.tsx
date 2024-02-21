import React from "react";
import "./banner-three-columns.sass";

interface Props {
    OurCultureTitle: string;
    OurCultureImage: string;
    OurCultureContent: string;
}

export const OurCulture = ({
    OurCultureTitle,
    OurCultureImage,
    OurCultureContent
}: Props): JSX.Element => {
    return (
        <>
            <section className="our-culture-box careers-section">
                <div className="container">
                    <div className="column-box">
                        <div className="column-title">
                            <h2 className="h4">{OurCultureTitle}</h2>
                        </div>
                        <div className="column-image">
                            <div className="image-inner">
                                <img
                                    loading="lazy"
                                    srcSet={`${OurCultureImage}`} className="img"
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