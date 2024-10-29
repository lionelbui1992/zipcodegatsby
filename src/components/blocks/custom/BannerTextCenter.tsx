import React from "react";
import { IBannerTextCenterProps } from "../types";

const BannerTextCenter = ({ attributes }: { attributes: IBannerTextCenterProps }): JSX.Element => {
    const { background, heading } = attributes;
    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--screen-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()

    return (
        <div className="section section-banner">
            <div className="inner-section" style={{ backgroundImage: `url(${background.src})` }}>
                <h1 className="heading">{heading}</h1>
            </div>
        </div>
    );
};

export default BannerTextCenter;
