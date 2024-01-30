import * as React from "react";
import { useRef, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Banner, BannerPreload, Introduce, Company, Explore, ContactForm } from "../components/HomePage";
import { gsap, TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/sass/homepage.sass";

gsap.registerPlugin(ScrollTrigger);

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      {/* <div className="scroll-item item1" data-speed="0.5"><BannerPreload /></div> */}
      {/* <div className="scroll-item item2" data-speed="0.8"><Banner /></div> */}
      <div className="scroll-item item3" data-speed="1.1"><Introduce /></div>
      <div className="scroll-item item4" data-speed="1.4"><Company /></div>
      <div className="scroll-item item5" data-speed="1.7"><Explore /></div>
      <div className="scroll-item item6" data-speed="2"><ContactForm /></div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
