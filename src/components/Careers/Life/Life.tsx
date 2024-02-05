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
                    <h2 className="h4" dangerouslySetInnerHTML={{__html: lifeTitle}} />
                </div>
                <div className="section-content">
                    <div className="gallery-icon gallery-icon-row">
                        <img loading="lazy" srcSet="https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/gallery-box-icon-row.svg" />
                    </div>
                    <div className="gallery-icon gallery-icon-col">
                        <img loading="lazy" srcSet="https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/gallery-box-icon-col.svg" />
                    </div>
                    <div className="life-gallery">
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/gallery-image-1.png" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/gallery-image-2.png" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/gallery-image-3.png" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/gallery-image-4.png" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/gallery-image-5.png" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img loading="lazy" srcSet="https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/gallery-image-6.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Life;