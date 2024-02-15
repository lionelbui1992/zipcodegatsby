import * as React from "react"
import "../styles.css"
import "../assets/sass/styleguide.sass"
import { Slice } from "gatsby"
import { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollSmoother } from "scroll-smoother-dev";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactForm } from "./HomePage";
import { ZIcon } from "./HomePage/sections/ZIcon";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);
interface LayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const smoother = useRef();
    useEffect(
        () => {
            smoother.current = ScrollSmoother.create({
                smooth: .8, // seconds it takes to "catch up" to native scroll position
                effects: false, // look for data-speed and data-lag attributes on elements and animate accordingly
            });

        }, [smoother]);
    return (
        <div className="preload loading scrollWraper ScrollSmoother-wrapper viewport">
            <Slice alias="preload" />
            <Slice alias="header" />
            {/* <Slice alias="contactform" /> */}
            <ContactForm />
            <ZIcon />
            <main className="global-wrapper">
                <div id="smooth-wrapper" ref={smoother}>
                    <div id="smooth-content">
                        {children}
                        <Slice alias="footer" />
                    </div>
                </div>
            </main>
            <Slice alias="clipPath" />
        </div>
    )
}

export default Layout
