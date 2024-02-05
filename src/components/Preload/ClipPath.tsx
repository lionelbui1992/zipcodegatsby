import React from "react";
// import "./style.sass";

export default function ClipPath(): JSX.Element {
    return (

        <div className="preload-clippath">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <clipPath id="clippp">
                        <text className="textZ" id="textZ" x="110vw" y="110vh" dominantBaseline="middle" textAnchor="middle">&#xe900;</text>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};