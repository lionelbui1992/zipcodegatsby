import * as React from "react"
import "../styles.css"
import "../assets/sass/styleguide.sass"
import { Slice } from "gatsby"
import { useRef, useEffect, useState } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

gsap.registerPlugin(useGSAP, ScrollTrigger);
interface LayoutProps {
    children?: React.ReactNode
}

const LayoutStatic: React.FC<LayoutProps> = ({ children }) => {
    const [hiddenBackToTop, setHiddenBackToTop] = useState(true);

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    useEffect(
        () => {

            const handleScroll = () => {
                if (window.scrollY > 2000) {
                    setHiddenBackToTop(false);
                } else {
                    setHiddenBackToTop(true);
                }
            }
            window.addEventListener("scroll", () => handleScroll());
        }, []);
    const handleBackToTopClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <ReactLenis root>
            <div className="preload loading scrollWraper ScrollSmoother-wrapper viewport">
                <Slice alias="preload" />
                <Slice alias="header" />
                <main className="global-wrapper">
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {children}
                        </div>
                    </div>
                    <div className={`to-top ${hiddenBackToTop ? 'hidden' : ''}`}>
                        <svg onClick={() => { handleBackToTopClick() }} width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.1991 15.862L26.8782 19.1829L17.6445 9.70623L17.6446 32.6554L12.7847 32.6554L12.7847 9.70623L3.55106 19.1829L0.284179 15.862L15.2146 0.877548L30.1991 15.862Z" fill="#0068FF" />
                        </svg>
                        <span>Back to top</span>
                    </div>
                </main>
                <Slice alias="clipPath" />
                <Slice alias="footer" />
            </div>
        </ReactLenis>
    )
}

export default LayoutStatic
