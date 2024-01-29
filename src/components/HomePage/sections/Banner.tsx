import React, { useEffect } from "react";
import gsap from 'gsap';


export const Banner = (): JSX.Element => {
    return (
        <div className="section section-banner">
            <div className="inner-section">
                <h1 className="heading">We build differently.</h1>
                <div className="icon"><img src="/img/homepage/icon-z.png" width={64} height={74} alt="" /></div>
            </div>
        </div>
    );
};


export const BannerPreload = (): JSX.Element => {
    useEffect(() => {
        const tl = gsap.timeline({
            repeat: 0,
            yoyo: true,
            repeatDelay: 0.5,
            delay: 2,
            // defaults: { ease: "power3.inOut" }
        });

        tl.to("#textZ", 1, { x: -1500, y: -300 })
            .to("#textZ", 1, { x: -500, y: -300 })
            .to("#textZ", 1, { x: -1000, y: 0 })
            .to("#textZ", 1, { x: -2000, y: 0, transform: 'scale(20)', transformOrigin: 'center center' });

        // Optional: You can return a cleanup function if needed
        return () => {
            tl.kill(); // Kill the timeline to prevent memory leaks
        };
    }, []);

    return (
        <div className="section section-bannerpreload">
            <div className="banner">
                <img id="image-2" className="animated animatedFadeInUp fadeInUp" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/pexels-helena-lopes-1015568-scaled.jpg" />
                <img id="image-3" className="animated animatedFadeInUp fadeInUpPP" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/snapedit_1706243307257.png" />
                <svg id="demo" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                        <pattern id="svgBKG" patternUnits="userSpaceOnUse" width="10" height="10">
                            <image
                                xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPScjRTFFMUUxJyAvPgogIDxyZWN0IHg9JzAnIHk9JzAnIHdpZHRoPSc5JyBoZWlnaHQ9JzknIGZpbGw9J3doaXRlJyAvPgo8L3N2Zz4="
                                x="0"
                                y="0"
                                width="10"
                                height="10"
                            />

                        </pattern>
                        <clipPath id="theClipPath">
                            <text id="textZ" style={{ fontSize: "800px", fontFamily: "'DejaVu Sans', 'Bitstream Vera Sans'" }} xmlSpace="preserve" x="100%" y="120%">
                                <tspan>z</tspan>
                            </text>
                        </clipPath>
                    </defs>

                    <g id="clipReveal" clip-path="url(#theClipPath)">
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#svgBKG)"></rect>
                        <text text-anchor="middle" x="50%" y="50%" fill="#000" font-size="100">We build</text>
                        <text text-anchor="middle" x="50%" y="80%" fill="#000" font-size="100">differently</text>
                    </g>
                </svg>
            </div>
        </div>
    );
};