import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ICompanyProps } from "../types";
import { useLang } from "../../../context/LangContext";
gsap.registerPlugin(ScrollTrigger);

export default function Company({ attributes }: { attributes: ICompanyProps }): JSX.Element {
    const { background_section, title, text_top, text_middle, text_bottom, background_text, owner_image, description, button } = attributes;
    console.log("attributes",attributes)
    const {isHideCompSection,setisHideCompSection} = useLang();
    console.log("isHideCompSection",isHideCompSection)

    const animationBox = useRef(null);
    const Cwrapper = useRef(null);

    // useEffect(() => {
    //     let box = animationBox.current
    //     let container = Cwrapper.current
    //     if (!box) return
    //     let tl = gsap.fromTo(box, { yPercent: 200 }, { yPercent: -300, duration: 15 })
    //     ScrollTrigger.create({
    //         trigger: container,
    //         start: "top top",
    //         end: "bottom bottom",
    //         pin: true,
    //         animation: tl,
    //         scrub: true,
    //         markers: true
    //     })
    // }, [])

    return (
        <div className="section section-company" ref={Cwrapper}  
        style={{
            backgroundImage: `url(${background_section.src})`, 
            display: isHideCompSection === true ? 'none' : 'block'
        }}>
            <div className="container">
                <div className="title"><h2 dangerouslySetInnerHTML={{ __html: title }} /></div>
                <div className="company-box">
                    <div className="image-box">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={background_text.src} />
                            <source media="(max-width: 767px)" srcSet={background_text.src} />
                            <img src={background_text.src} alt={background_text.alt} />
                        </picture>
                    </div>
                    <div className="text text--top" dangerouslySetInnerHTML={{ __html: text_top }} />
                    <div className="text text--middle" dangerouslySetInnerHTML={{ __html: text_middle }} />
                    <div className="text text--bottom" dangerouslySetInnerHTML={{ __html: text_bottom }} />
                </div>
                <div className="company--image--text">
                    <div className="c-text">
                        <p dangerouslySetInnerHTML={{ __html: description }} />
                        <a className="btn btn-white" href={button.url}>{button.title}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
