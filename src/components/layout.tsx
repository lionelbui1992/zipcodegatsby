import * as React from "react"
import "../styles.css"
import "../assets/sass/styleguide.sass"
import { Slice } from "gatsby"
import { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollSmoother } from "scroll-smoother-dev";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);
interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const main = useRef();
    const smoother = useRef();
    useEffect(
        () => {
            smoother.current = ScrollSmoother.create({
                smooth: .8, // seconds it takes to "catch up" to native scroll position
                effects: false, // look for data-speed and data-lag attributes on elements and animate accordingly
            });
 
        }, [smoother]);
    return (
        <div className="scrollWraper ScrollSmoother-wrapper viewport" ref={smoother}>
            <div className="preload loading">
                <Slice alias="preload" />
                <div className="global-wrapper">
                    <Slice alias="header" />
                    <div id="smooth-wrapper">
                        <main>
                            <div id="smooth-content">
                                {children}
                                <Slice alias="footer" />
                            </div>
                        </main>

                    </div>
                </div>
                <Slice alias="clipPath" />
            </div>
        </div>
    )
}

export default Layout
