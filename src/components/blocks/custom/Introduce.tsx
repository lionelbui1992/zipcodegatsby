import React from "react";
import { ImageAnimation } from "../../ImageAnimation";
import { IIntroduceProps } from "../types";

export default function Introduce({ attributes: { introduces } }: { attributes: { introduces: IIntroduceProps[] } }): JSX.Element {

    return (
        <div className="section section-introduce">
            <div className="container">
                {introduces.map((introduce, index) => {
                    let overlayClass = index % 2 ? "overlay-bottom-center" : "overlay-top-right";
                    if (index === 0) overlayClass = "overlay-top-right"
                    if (index === 1) overlayClass = ""
                    if (index === 2) overlayClass = "overlay-bottom-center"
                    return (
                        <div key={index} className={`image-with-text-component text-${index % 2 ? 'right' : 'left'}`}>
                            <div className="d-flex">
                                <div className={`col col-image col-right ${overlayClass}`}>
                                    <ImageAnimation classes="animation-image image-2" alt="image" src={introduce.image.src} amount={.3} duration=".6" from={index % 2 ? 'start' : 'end'} axis="x" />
                                </div>
                                <div className="col text-animation col-text col-left" data-dir={index % 2 ? 'ltr' : 'rtl'}>
                                    <p dangerouslySetInnerHTML={{ __html: introduce.title }} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
