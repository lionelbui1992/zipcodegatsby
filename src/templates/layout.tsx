import * as React from "react"
import { useRef, useEffect } from "react";
import { Preload, ClipPath } from "../components/Preload"
import { HeaderWrapper } from "../components/HeaderWrapper"
import { FooterWrapper } from "../components/FooterWrapper"
import { gsap } from 'gsap';
import { ScrollSmoother } from "scroll-smoother-dev";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ZIcon } from "../components/HomePage/sections/ZIcon";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

const Layout = ({ children }: { children: React.ReactNode }) => {
    const smoother = useRef();
    useEffect(
        () => {
            let scroller = ScrollSmoother.create({
                smooth: .1,
                effects: false,
                speed: .1,
                smoothTouch: 0.1,
                wrapper: smoother.current
            });
            // scroller.scrollTo(0);
        }, [smoother]);

    return (
        <div className="preload loading  scrollWraper ScrollSmoother-wrapper viewport" >
            <Preload />
            <ZIcon />
            <HeaderWrapper />
            <main>
                <div id="smooth-wrapper" ref={smoother}>
                    <div id="smooth-content">
                        {children}
                        <FooterWrapper />
                    </div>
                </div>
            </main>
            <ClipPath />
        </div>
    )

}



export default Layout