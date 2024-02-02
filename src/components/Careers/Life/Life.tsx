import React from "react";
import "./style.sass";

interface Props {
    lifeTitle: string;
    lifeBackground: string;
}

export const Life = ({
    lifeTitle,
    lifeBackground,
}: Props): JSX.Element => {
    return (
        <div className="careers-life careers-section" style={{backgroundImage: "url("+lifeBackground+")"}}>
            <div className="container">
                <div className="section-title">
                    <h2 className="h3">{lifeTitle}</h2>
                </div>
                <div className="section-content">
                    <div className="life-gallery">
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://maasi2404zip.merket.io/wp-content/uploads/2024/02/gallery-image-1.jpg" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://maasi2404zip.merket.io/wp-content/uploads/2024/02/gallery-image-2.jpg" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://maasi2404zip.merket.io/wp-content/uploads/2024/02/gallery-image-3.jpg" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://maasi2404zip.merket.io/wp-content/uploads/2024/02/gallery-image-4.jpg" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://maasi2404zip.merket.io/wp-content/uploads/2024/02/gallery-image-5.jpg" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://maasi2404zip.merket.io/wp-content/uploads/2024/02/gallery-image-6.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Life;