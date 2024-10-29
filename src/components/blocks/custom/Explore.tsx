import React from "react";
import { IExploreProps } from "../types";
import { ImageAnimation } from "../../ImageAnimation";

export default function Explore({ attributes }: { attributes: IExploreProps }): JSX.Element {
    const { heading, left_image, right_image, background_right_image, description, button } = attributes;

    return (
        <div className="section section-explore">
            <div className="container">
                <div className="d-flex">
                    <div className="col-left">
                        <ImageAnimation classes="animation-image stop image-2" alt="image" alt={left_image.alt} src={left_image.src} amount={.3} duration=".6" from="start" axis="x" />
                    </div>
                    <div className="col-right">
                        <div className="heading-text"><h4 dangerouslySetInnerHTML={{ __html: heading }} /></div>
                        <div className="image-with-text-component text-left">
                            <div className="d-flex">
                                <div className="col-text">
                                    <p dangerouslySetInnerHTML={{ __html: description }} />

                                    <a className="btn btn-primary" href={button.url}>{button.title}</a>
                                </div>
                                <div className="col-image">
                                    <div className="image-wrapper" data-background={background_right_image.src}>
                                        <ImageAnimation classes="animation-image stop image-2" alt="image" alt={right_image.alt} src={right_image.src} amount={.3} duration=".6" from="start" axis="x" />
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
