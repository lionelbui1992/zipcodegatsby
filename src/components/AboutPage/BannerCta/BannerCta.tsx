import React from "react";
import "./styles.sass";
import { Link } from "gatsby";

export const BannerCta = (): JSX.Element => {
    return (
        <>
            <div className="section-bkg">
                <img
                    loading="lazy"
                    srcSet="/about/about-banner-bkg.png"
                />
            </div>
            <div className="container">
                <div className="section-content text-center">
                    <div className="content-inner">
                        <h2 className="title">More than a workplace. A calling.</h2>
                        <Link className="btn btn-primary btn-white" to="#">Open Positions</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BannerCta;