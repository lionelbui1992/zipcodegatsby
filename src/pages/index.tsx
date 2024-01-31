import * as React from "react";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import type { HeadFC, PageProps } from "gatsby";
import { Banner, BannerPreload, Introduce, Company, Explore, ContactForm } from "../components/HomePage";
import { gsap, TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/sass/homepage.sass";
import { TextMarquee } from "../components/TextMarquee";

gsap.registerPlugin(ScrollTrigger);



const IndexPage: React.FC<PageProps> = () => {
  // const container = useRef();
  // useGSAP(() => {

  // }, { scope: container })

  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);





    ScrollTrigger.create({
      trigger: ".item2",
      start: "top top",
      end: "+=200%",
      pin: true,
      pinSpacing: false
    });



    return () => {
      // Kill all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <div className="scrollTrigger" ref={container}>
      {/* <div className="scroll-section item1" data-speed="0.5"><BannerPreload /></div> */}
      <div className="scroll-section item2" data-speed="0.8">
        <Banner />
        <TextMarquee />
      </div>
      <div className="scroll-section item3" data-speed="1.1"><Introduce /></div>
      <div className="scroll-section item4" data-speed="1.4"><Company /></div>
      <div className="scroll-section item5" data-speed="1.7"><Explore /></div>
      <div className="scroll-section item6" data-speed="2"><ContactForm /></div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
