import React, { useEffect } from "react";

export const Explore = (): JSX.Element => {
    return (
        <div className="section section-explore">
            <div className="container">
                <div className="d-flex">
                    <div className="col">
                        <div className="image-box">
                            <img src="/img/mask-group-32.png" alt="image" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="heading-text"><h4>Building Well with Deep Focus</h4></div>
                        <div className="image-with-text-component text-left">
                            <div className="d-flex">
                                <div className="col col-image">
                                    <div className="image-box">
                                        <img src="/img/mask-group-34.png" alt="image" />
                                    </div>
                                </div>
                                <div className="col col-text">
                                    <p>Zipcode builds with intention, and we explore alternative spaces and partnerships. We focus on community as much as construction and life quality as much as build quality.</p>
                                    <a href="">It all starts with thinking differently</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

