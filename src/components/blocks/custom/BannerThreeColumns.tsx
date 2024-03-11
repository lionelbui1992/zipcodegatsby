import React from "react";
import "./banner-three-columns.sass";
import { IBannerThreeColumnsProps } from "../types";

export const BannerThreeColumns = ({ attributes }: { attributes: IBannerThreeColumnsProps }): JSX.Element => {
    const { title, description, culture_image, background } = attributes;
    return (
        <section className="our-culture-box careers-section" style={{ backgroundImage: `url(${background?.src})` }}>
            <div className="container">
                <div className="column-box">
                    <div className="column-image">
                        <h2 className="h4">{title}</h2>
                        <div className="image-inner">
                            <img
                                loading="lazy"
                                srcSet={`${culture_image.src}`} className="img"
                                alt={`${title}`}
                            />
                        </div>
                    </div>
                    <div className="column-content">
                        <div className="description" dangerouslySetInnerHTML={{__html: description}} />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default BannerThreeColumns;