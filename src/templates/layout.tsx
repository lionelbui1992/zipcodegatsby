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
    const main = useRef();
    const smoother = useRef();
    useEffect(
        () => {
            smoother.current = ScrollSmoother.create({
                smooth: .5, // seconds it takes to "catch up" to native scroll position
                effects: false, // look for data-speed and data-lag attributes on elements and animate accordingly
                speed: .5,
                smoothTouch: 0.1
            });

        }, [smoother]);

    return (
        <main className="preload loading  scrollWraper ScrollSmoother-wrapper viewport" ref={smoother}>
            <Preload />
            <ZIcon />
            <HeaderWrapper />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <FooterWrapper />
                </div>
            </div>
            <ClipPath />
        </main>
    )

}



export default Layout