import React from "react";
import "./banner-cta.sass";
import { Link } from "gatsby";
import { BannerCtaProps } from "../types";



export const BannerCta = ({attributes}: {attributes: BannerCtaProps}): JSX.Element => {
    const { background, text, button } = attributes;

    return (
        <>
            <div className="section-bkg">
                <img
                    loading="lazy"
                    srcSet={background.src}
                />
            </div>
            <div className="container">
                <div className="section-content text-center">
                    <div className="content-inner">
                        <h2 className="title">{text}</h2>
                        <Link className="btn btn-primary btn-white" to={button.url}>{button.title}</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BannerCta;
