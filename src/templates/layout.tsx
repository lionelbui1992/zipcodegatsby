import * as React from "react"
import { useRef, useEffect } from "react";
import { Preload, ClipPath } from "../components/Preload"
import { HeaderWrapper } from "../components/HeaderWrapper"
import { FooterWrapper } from "../components/FooterWrapper"
import { gsap } from 'gsap';
import { ScrollSmoother } from "scroll-smoother-dev";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

const Layout = ({ children }: { children: React.ReactNode }) => {
    const main = useRef();
    const smoother = useRef();
    useEffect(
        () => {
            smoother.current = ScrollSmoother.create({
                smooth: .5, // seconds it takes to "catch up" to native scroll position
                effects: false, // look for data-speed and data-lag attributes on elements and animate accordingly
            });

        }, [smoother]);

    return (
        <div className="scrollWraper ScrollSmoother-wrapper viewport" ref={smoother}>
            <div className="preload loading">
                <Preload />
                <div className="global-wrapper">
                    <HeaderWrapper />
                    <div id="smooth-wrapper">
                        <main>
                            <div id="smooth-content">
                                {children}
                                <FooterWrapper />
                            </div>
                        </main>

                    </div>
                </div>
                <ClipPath />
            </div>
        </div>
    )

}



export default Layout