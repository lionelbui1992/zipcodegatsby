import React from "react";
import { ImageAnimation } from "../../ImageAnimation";
import { IIntroduceProps } from "../types";

export default function Introduce({ attributes: { introduces } }: { attributes: { introduces: IIntroduceProps[] } }): JSX.Element {

    return (
        <div className="section section-introduce">
            <div className="container">
                {introduces.map((introduce, index) => {
                    const overlayClass = introduce.background_position === "None" ? "overlay-none" : introduce.background_position === "Bottom" ? "overlay-bottom-center" : "overlay-top-right";
                    return (
                        <div key={index} className={`image-with-text-component text-${index % 2 ? 'right' : 'left'}`}>
                            <div className="d-flex">
                                <div className="col col-image col-right">
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
