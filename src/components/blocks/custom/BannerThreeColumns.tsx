import React from "react";
import "./banner-three-columns.sass";
import { IImage } from "../types";

interface IBannerThreeColumnsProps {
    title: string,
    description: string,
    culture_image: IImage,
}

interface Props {
    title: string;
    culture_image: string;
    description: string;
}

export const BannerThreeColumns = ({ attributes }: { attributes: IBannerThreeColumnsProps }): JSX.Element => {
    const { title, description, culture_image } = attributes;
    return (
        <section className="our-culture-box careers-section">
            <div className="container">
                <div className="column-box">
                    <div className="column-title">
                        <h2 className="h4">{title}</h2>
                    </div>
                    <div className="column-image">
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