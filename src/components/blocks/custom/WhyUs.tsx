import React, { useState } from "react";
import "./why-us.sass";
import { IWhyUs } from "../types";

export const WhyUs = ({ attributes }: { attributes: IWhyUs }): JSX.Element => {
    const lifeIconRow = '/img/why-us-icon-row.svg';
    const lifeIconCol = '/img/why-us-icon-col.svg';
    const lifeIconColMobile = '/img/why-us-icon-col-mobile.svg';
    const { title, description, background, readmore } = attributes;
    
    const [openReadMore, setOpenReadMore] = useState(false);
    const readMoreFunc = async () => {
        setOpenReadMore(false);
        document.querySelector('.why-us-description')?.classList.toggle('show');
    }
    return (
        <>
            {(title) &&
                <div className="careers-why-us careers-section" style={{ backgroundImage: "url(" + background?.src + ")" }}>
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
                                <div className={`description why-us-description`} dangerouslySetInnerHTML={{__html: description}} />
                                {readmore &&
                                    <button className="button btn-white read-more" onClick={() => readMoreFunc()}>{ readmore }</button>
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}
export default WhyUs;