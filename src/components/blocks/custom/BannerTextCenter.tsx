import React from "react";
import { IBannerTextCenterProps } from "../types";
import { useLang } from "../../../context/LangContext";

const BannerTextCenter = ({ attributes }: { attributes: IBannerTextCenterProps }): JSX.Element => {
    const { background, heading,sub_heading } = attributes;
    const {language} = useLang();
    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--screen-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()

    return (
        <div className="section section-banner">
            <div className="inner-section" style={{ backgroundImage: `url(${background.src})` }}>
                <h1 className="heading">
                    {heading}
                    <br />
                    <span className="sub-heading">{sub_heading || language === 'th' ? 'เราสร้างอย่างแตกต่าง':''}</span>
                </h1>
            </div>
        </div>
    );
};

export default BannerTextCenter;
