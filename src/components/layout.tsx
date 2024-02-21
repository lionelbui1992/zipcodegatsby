import * as React from "react"
import "../styles.css"
import "../assets/sass/styleguide.sass"
import { Slice, graphql, useStaticQuery } from "gatsby"
import { useRef, useEffect, useState } from "react";
import { gsap } from 'gsap';
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo';
import { ScrollSmoother } from "scroll-smoother-dev";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactForm } from "./HomePage";
import Test from "./blocks/custom/Test";
import { handleAddPixelateAnimation, handleTextAnimation } from '../animation'

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);
interface LayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const {
        wp: { seo },
    } = useStaticQuery(graphql`

        query SiteInfoQuery {
            wp {
                seo {
                    contentTypes {
                        post {
                            title
                            schemaType
                            metaRobotsNoindex
                            metaDesc
                        }
                        page {
                            metaDesc
                            metaRobotsNoindex
                            schemaType
                            title
                        }
                    }
                    webmaster {
                        googleVerify
                        yandexVerify
                        msVerify
                        baiduVerify
                    }
                    schema {
                        companyName
                        personName
                        companyOrPerson
                        wordpressSiteName
                        siteUrl
                        siteName
                        inLanguage
                        logo {
                            sourceUrl
                            mediaItemUrl
                            altText
                        }
                    }
                    social {
                        facebook {
                            url
                            defaultImage {
                                sourceUrl
                                mediaItemUrl
                            }
                        }
                        instagram {
                            url
                        }
                        linkedIn {
                            url
                        }
                        mySpace {
                            url
                        }
                        pinterest {
                            url
                            metaTag
                        }
                        twitter {
                            username
                            cardType
                        }
                        wikipedia {
                            url
                        }
                        youTube {
                            url
                        }
                    }
                }
            }
        }
    `);
    const smoother = useRef();
    const [hiddenBackToTop, setHiddenBackToTop] = useState(true);
    useEffect(
        () => {
            smoother.current = ScrollSmoother.create({
                smooth: .5, // seconds it takes to "catch up" to native scroll position
                effects: false, // look for data-speed and data-lag attributes on elements and animate accordingly
                smoothTouch: 0.001,
            });

            const handleScroll = () => {
                if (window.scrollY > 2000) {
                    setHiddenBackToTop(false);
                } else {
                    setHiddenBackToTop(true);
                }
            }



            window.addEventListener("scroll", () => handleScroll());
            window.addEventListener("scroll", () => handleAddPixelateAnimation());
            window.addEventListener("scroll", () => handleTextAnimation());
        }, [smoother]);
    const handleBackToTopClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <SEOContext.Provider value={{ global: seo }}>
            <div className="preload loading scrollWraper ScrollSmoother-wrapper viewport">
                <Slice alias="preload" />
                <Slice alias="header" />
                <ContactForm />
                {/* <ZIcon /> */}
                <main className="global-wrapper">
                    <div id="smooth-wrapper" ref={smoother}>
                        <div id="smooth-content">
                            {children}
                            <Slice alias="footer" />
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
                <Test />
            </div>
        </SEOContext.Provider>
    )
}

export default Layout
