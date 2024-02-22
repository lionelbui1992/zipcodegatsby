import React from "react";
import { IExploreProps } from "../types";

export default function Explore({ attributes }: {attributes: IExploreProps}): JSX.Element {
    const { heading, left_image, right_image, background_right_image, description, button } = attributes;

    return (
        <div className="section section-explore">
            <div className="small-container">
                <div className="d-flex">
                    <div className="col-left">
                        <div className="image-box">
                            <img src={left_image.src} alt={left_image.alt} />
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="heading-text"><h4 dangerouslySetInnerHTML={{__html: heading}} /></div>
                        <div className="image-with-text-component text-left">
                            <div className="d-flex">
                                <div className="col-text">
                                    <p dangerouslySetInnerHTML={{__html: description}} />
                                     <div style={{display: "none"}} className="col-image mobile">
                                        <div className="image-box">
                                            <img src={right_image.src} alt={right_image.alt} />
                                        </div>
                                    </div>
                                    <a className="btn btn-primary" href={button.url}>{button.title}</a>
                                </div>
                                <div className="col-image hide-mobile">
                                    <div className="image-box" data-background={background_right_image.src}>
                                        <img src={right_image.src} alt={right_image.alt} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
