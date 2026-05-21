import * as React from "react"
import "../styles.css"
import "../assets/sass/styleguide.sass"
import { Slice } from "gatsby"
import { useEffect, useState } from "react";
import { gsap } from 'gsap';
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { checkPreloadCookie, handleAddPixelateAnimation } from '../animation'
import { ContactForm } from "./Form/ContactForm";
import { gql, useQuery } from "@apollo/client";
import Test from "./blocks/custom/Test";
import { BannerPoup } from './BannerPoup';
import GalleryTwoColumnsPopup from "./GalleryTwoColumnsPopup";
import Lenis from 'lenis'
import { LangProvider, useLang } from "../context/LangContext";
import { useCookies } from "react-cookie";
import { useLocation } from "@reach/router";

gsap.registerPlugin(useGSAP, ScrollTrigger);
interface LayoutProps {
    children?: React.ReactNode,
    slug?:string
}

const Layout: React.FC<LayoutProps> = ({ children, slug }) => {
    const location = useLocation(); // Get the current location
    const [key, setKey] = useState(0);
    const {isHideCompSection,setisHideCompSection} = useLang();
    // useEffect(() => {
    //   if (location.pathname === "/") {
    //      setisHideCompSection(false)
    //      window.scrollTo(0, 0);
    //      setKey((prevKey) => prevKey + 1);
    //   }else{
    //      setisHideCompSection(true)
    //   }
    // }, [location.pathname]);
    let preloadCheck = checkPreloadCookie()
    const [cookies] = useCookies(['lang']);
    const {language} = useLang();
    const [lang,setLanguage] = useState(""); 
    useEffect(() => {
        if (language) {
          const lang = cookies.lang || 'en';
          setLanguage(lang)
        }
      }, [language,cookies.lang]);
    const getInfo = gql`
    query TestingQuery {
        testing {
            testingFields {
                turnOnTesting
            }
        }
        getContactForm
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
    `;
    const { loading, error, data } = useQuery(getInfo);

    const [testing, setTesting] = useState(false);
    const [projectId, setProjectId] = useState('');
    const [seo, setSeo] = useState(undefined);
    const [getContactForm, setGetContactForm] = useState(null);
    const [getContactFormTh, setGetContactFormTh] = useState(null);
    const [hiddenBackToTop, setHiddenBackToTop] = useState(true);

    const initLenis = () => {
        let lenis = new Lenis({
          lerp: 0.255,
          duration: 0.22,
        });

        let animationFrameId: number;

        const raf = (time: number) => {
          lenis?.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        };

        animationFrameId = requestAnimationFrame(raf);

        window.lenis = lenis;

        return () => {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
          lenis?.destroy();
          delete window.lenis;
          lenis = null;
        };
      };

      useEffect(() => {
        const cleanupLenis = initLenis();

        return () => cleanupLenis();
      }, []);

      useEffect(() => {
        const handleTestEvent = (event: CustomEvent) => {
          if (event.detail === true) {
            if (!window.lenis) {
              const cleanupLenis = initLenis();
            } else {
              window?.lenis?.start();
            }
          } else if (event.detail === false) {
            window?.lenis?.destroy();
            delete window.lenis;
          }
        };

        document.addEventListener("rootScroll", handleTestEvent as EventListener);

        return () => {
          document.removeEventListener("rootScroll", handleTestEvent as EventListener);
        };
    }, []);



    // Add event listener to handle cookie change
    useEffect(() => {
        let checkCookiePopupState: any;
        let checkingCounter = 1;
        const getCookie = (name: string) => {
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith(name + '='))
                ?.split('=')[1];

            return cookieValue ? decodeURIComponent(cookieValue) : null;
        }

        // Usage
        checkCookiePopupState = setInterval(function () {
            // clear time out after 12s
            if (++checkingCounter > 120) {
                clearInterval(checkCookiePopupState);
            }
            const consentCookieValue = getCookie('cookieyes-consent');
            if (null !== consentCookieValue) {
                const cookieData = consentCookieValue.split(',');
                cookieData.forEach(cookieItem => {
                    const [key, value] = cookieItem.split(':');
                    if (key === 'action') {
                        document.querySelectorAll('.cky-preference-center').forEach(function (container) {
                            container.setAttribute('data-lenis-prevent', '');
                        });
                        // clear timeout after has any action
                        if (value === 'yes') {
                            clearInterval(checkCookiePopupState);
                        }
                    }
                });
            }
        }, 100);
    }, []);

    useEffect(() => {

        if (data) {
            setTesting(data.testing?.testingFields?.turnOnTesting || false);
            setProjectId("");
            setGetContactForm(data.getContactForm || null);
            setGetContactFormTh(null);
            setSeo(data.seo);
            const handleScroll = () => {
                if (window.scrollY > 2000) {
                    setHiddenBackToTop(false);
                } else {
                    setHiddenBackToTop(true);
                }
            }
            window.addEventListener("scroll", () => handleScroll());
            window.addEventListener("scroll", () => handleAddPixelateAnimation());
            // window.addEventListener("scroll", () => handleTextAnimation());
            // setTimeout(() => {
            // handleGeneralOverlayAnimation()
            // handleTextAnimation()
            // }, 2000)
            let intervalCounter = 0;
            const intervalId = setInterval(() => {
                intervalCounter++;
                handleAddPixelateAnimation();
                if (intervalCounter >= 6) {
                    clearInterval(intervalId);
                }
            }, 1000);
        }
    }, [data]);

    const handleBackToTopClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    let projectBanner = children?.props?.blocks;

    let popUp = (projectBanner && projectBanner.length > 0) && projectBanner.filter((block: any) => block.name === 'acf/projects-banner').map((block: any, index: number) => {
        return (
            <BannerPoup
                key={index}
                background="/img/projects-popup-bkg-1-1.jpg"
                content={block.attributes.data.content} />
        )
    })

    let galleryPopup = (projectBanner && projectBanner.length > 0) && projectBanner.filter((block: any) => block.name === 'acf/gallery-two-columns').map((block: any, index: number) => {
        return (
            <GalleryTwoColumnsPopup
                key={index}
                gallery={block.attributes.data.gallery} />
        )
    })


    if (loading || error) return <></>
    return (
        <LangProvider>
            <SEOContext.Provider value={{ global: seo }}>
                <div className={`${preloadCheck ? "" : "preload loading"}  scrollWraper ScrollSmoother-wrapper viewport page-${slug ? slug : 'index'} `}>
                    {!preloadCheck && <Slice alias="preload" />}
                    <Slice alias="header" />
                    {popUp && popUp}
                    {galleryPopup && galleryPopup}
                    {getContactForm && <ContactForm data={lang === 'en' ? getContactForm : getContactFormTh } />}
                    {/* <CookieBanner /> */}
                    <main className="global-wrapper" >
                        {children}
                        <div className={`to-top ${hiddenBackToTop ? 'hidden' : ''}`} onClick={() => { handleBackToTopClick() }}>
                            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.1991 15.862L26.8782 19.1829L17.6445 9.70623L17.6446 32.6554L12.7847 32.6554L12.7847 9.70623L3.55106 19.1829L0.284179 15.862L15.2146 0.877548L30.1991 15.862Z" fill="#0068FF" />
                            </svg>
                            <span>Back to top</span>
                        </div>
                    </main>
                    <Slice alias="clipPath" />
                    <div className="placeholder-section"></div>
                    <Slice alias="footer" />
                    {(testing && projectId) && (
                        <Test projectId={projectId} />
                    )}
                </div>
            </SEOContext.Provider >
        </LangProvider>
    )
}

export default Layout
