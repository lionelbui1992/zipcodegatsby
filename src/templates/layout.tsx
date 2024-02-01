import * as React from "react"
import { useRef } from "react";
import { Preload, ClipPath } from "../components/Preload"
import { HeaderWrapper } from "../components/HeaderWrapper"
import { FooterWrapper } from "../components/FooterWrapper"
import { gsap } from 'gsap';
import { ScrollSmoother } from "scroll-smoother-dev";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollSmoother);

const Layout = ({ children }: { children: React.ReactNode }) => {
    const main = useRef();
    const smoother = useRef();
    useGSAP(
        () => {
            smoother.current = ScrollSmoother.create({
                smooth: 2, // seconds it takes to "catch up" to native scroll position
                effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
            });

        },
        { scope: main }
    );

    return (
        <div className="scrollWraper viewport" ref={main}>
            <div className="preload loading">
                <Preload />
                <div className="global-wrapper">
                    <HeaderWrapper />
                    <main>{children}</main>
                    <FooterWrapper />
                </div>
                <ClipPath />
            </div>
        </div>
    )

}



export default Layout