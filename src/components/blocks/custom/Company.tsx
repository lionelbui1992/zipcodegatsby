import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ICompanyProps } from "../types";
gsap.registerPlugin(ScrollTrigger);

export default function Company({ attributes }: { attributes: ICompanyProps}): JSX.Element {
    const { background_section, title, text_top, text_middle, text_bottom, background_text, owner_image, description, button } = attributes;

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
        <div className="section section-company" ref={Cwrapper} style={{ backgroundImage: `url(${background_section.src})` }}>
            <div className="container">
                <div className="title"><h2 dangerouslySetInnerHTML={{__html: title}} /></div>
                <div className="company-box">
                    <div className="image-box">
                        <img src={background_text.src} alt={background_text.alt} />
                    </div>
                    <div className="text text--top" dangerouslySetInnerHTML={{__html: text_top}} />
                    <div className="text text--middle" dangerouslySetInnerHTML={{__html: text_middle}} />
                    <div className="text text--bottom" dangerouslySetInnerHTML={{__html: text_bottom}} />
                </div>
                <div className="company--image--text">
                    <div className="c-image">
                        <div className="image-box" ref={animationBox}>
                            <img src={owner_image.src} alt={owner_image.alt} />
                        </div>
                    </div>
                    <div className="c-text">
                        <p dangerouslySetInnerHTML={{__html: description}} />
                        <a className="btn btn-primary btn-white" href={button.url}>{button.title}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
