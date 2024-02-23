import React from "react";
import { ImageAnimation } from "../../ImageAnimation";

export const Introduce = (): JSX.Element => {
    return (
        <div className="section section-introduce">
            <div className="container">
                <div className="image-with-text-component text-left">
                    <div className="d-flex">
                        <div className="col col-image col-right">
                            {/* <img src="/img/mask-group-34.png" alt="image" /> */}
                            <ImageAnimation classes="animation-image image-2" src="/img/mask-group-34.png" amount={.3} alt="" duration=".6" from="end" axis="x" />
                        </div>
                        <div className="col text-animation col-text col-left" data-dir="rtl">
                            <p>We seek properties with unexpected potential and transform sites into game-changing spaces.</p>
                        </div>
                    </div>
                </div>
                <div className="image-with-text-component ">
                    <div className="d-flex">
                        <div className="col col-image col-left">
                            <ImageAnimation classes="animation-image image-1" src="/img/mask-group-20.png" alt="" amount={.3} duration=".6" from="start" axis="x" />
                        </div>
                        <div className="col col-text text-animation col-right" data-dir="ltr" >
                            <p>Our projects resonate with individuality yet are considerate of their surroundings.</p>
                        </div>
                    </div>
                </div>
                <div className="image-with-text-component text-left">
                    <div className="d-flex">
                        <div className="col col-image overlay-bottom-center col-right">
                            <ImageAnimation classes="animation-image image-2" src="/img/image-5.png" amount={.3} alt="" duration=".6" from="end" axis="x" />
                        </div>
                        <div className="col col-text text-animation col-left" data-dir="rtl">
                            <p>Our spaces make cities better and lift living standards.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
