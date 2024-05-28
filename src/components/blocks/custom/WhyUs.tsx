import React from "react";
import "./why-us.sass";
import { IWhyUs } from "../types";

export const WhyUs = ({ attributes }: { attributes: IWhyUs }): JSX.Element => {
    const lifeIconRow = '/img/why-us-icon-row.svg';
    const lifeIconCol = '/img/why-us-icon-col.svg';
    const lifeIconColMobile = '/img/why-us-icon-col-mobile.svg';
    const { title, description, background } = attributes;

    return (
        <>
            {(title) &&
                <div className="careers-why-us careers-section" style={{ backgroundImage: "url(" + background.src + ")" }}>
                    <div className="container">
                        <div className="section-title">
                            <h2 className="h4" dangerouslySetInnerHTML={{ __html: title }} />
                        </div>
                        {(description) &&
                            <div className="section-content">
                                {lifeIconRow &&
                                    <div className="gallery-icon gallery-icon-row">
                                        <img loading="lazy" srcSet={lifeIconRow} />
                                    </div>
                                }
                                {lifeIconCol &&
                                    <div className="gallery-icon gallery-icon-col">
                                        <img className="visible-desktop" loading="lazy" srcSet={lifeIconCol} />
                                        <img className="visible-mobile" loading="lazy" srcSet={lifeIconColMobile} />
                                    </div>
                                }
                                <div className="description" dangerouslySetInnerHTML={{__html: description}} />
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}
export default WhyUs;