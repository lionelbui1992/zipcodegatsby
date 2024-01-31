import React from "react";

export const Introduce = (): JSX.Element => {
    return (
        <div className="section section-introduce">
            <div className="container">
                <div className="image-with-text-component text-left">
                    <div className="d-flex">
                        <div className="col col-image">
                            <div className="image-box">
                                <img src="/img/mask-group-34.png" alt="image" />
                            </div>
                        </div>
                        <div className="col col-text">
                            <p>We seek properties with unexpected potential and transform sites into game-changing spaces.</p>
                        </div>
                    </div>
                </div>
                <div className="image-with-text-component ">
                    <div className="d-flex">
                        <div className="col col-image">
                            <div className="image-box">
                                <img src="/img/mask-group-20.png" alt="image" />
                            </div>
                        </div>
                        <div className="col col-text text-animation" data-dir="ltr" >

                            <p>Our projects resonate with</p>
                            <p>individuality yet are considerate</p>
                            <p>of their surroundings.</p>

                        </div>
                    </div>
                </div>
                <div className="image-with-text-component text-left">
                    <div className="d-flex">
                        <div className="col col-image">
                            <div className="image-box">
                                <img src="/img/image-5.png" alt="image" />
                            </div>
                        </div>
                        <div className="col col-text text-animation" data-dir="rtl">

                            <p>Our spaces make cities better</p>
                            <p>and lift living standards.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
