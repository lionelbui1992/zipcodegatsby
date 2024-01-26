import React from "react";

export const Company = (): JSX.Element => {
    return (
        <div className="section section-company">
            <div className="container">
                <div className="title"><h2>A company like no other.</h2></div>
                <div className="company-box">
                    <div className="image-box">
                        <img src="/img/homepage/c-grid-box.png" alt="image" />
                    </div>
                    <div className="text text--top">Consulting</div>
                    <div className="text text--middle">Developing</div>
                    <div className="text text--bottom">Investing</div>
                </div>
                <div className="company--image--text">
                    <div className="c-image">
                        <div className="image-box">
                            <img src="/img/image-6.png" alt="image" />
                        </div>
                    </div>
                    <div className="c-text">
                        <p>Our business model, design and build principles, and interdisciplinary team greenlight a unique approach. It helps us challenge the stereotype of what it means to be a real estate developer in 21st-century Thailand. </p>
                        <a href="#">We exemplify a new possibility
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                    <path d="M6.70505 9.5L5.93942 8.74432L9.09141 5.59233H0.928058V4.49858H9.09141L5.93942 1.35653L6.70505 0.590909L11.1596 5.04545L6.70505 9.5Z" fill="white" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
