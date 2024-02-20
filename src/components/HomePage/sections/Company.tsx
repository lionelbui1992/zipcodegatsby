import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Company = (): JSX.Element => {

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
        <div className="section section-company" ref={Cwrapper}>
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
                        <div className="image-box" ref={animationBox}>
                            <img src="/img/image-6.png" alt="image" />
                        </div>
                    </div>
                    <div className="c-text">
                        <p>Our business model, design and build principles, and interdisciplinary team greenlight a unique approach. It helps us challenge the stereotype of what it means to be a real estate developer in 21st-century Thailand. </p>
                        <a className="btn btn-primary btn-white" href="#">We exemplify a new possibility</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
