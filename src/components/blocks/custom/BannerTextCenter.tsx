import React from "react";
import { IBannerTextCenterProps } from "../types";

const BannerTextCenter = ({ attributes }: { attributes: IBannerTextCenterProps }): JSX.Element => {
    const { background, heading } = attributes;

    return (
        <div className="section section-banner">
            <div className="inner-section" style={{ backgroundImage: `url(${background.src})` }}>
                <h1 className="heading">{heading}</h1>
            </div>
        </div>
    );
};

export default BannerTextCenter;
