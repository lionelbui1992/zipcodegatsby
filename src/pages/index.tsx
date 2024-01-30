import * as React from "react"
import { useRef } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Banner, BannerPreload, Introduce, Company, Explore, ContactForm } from "../components/HomePage"

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
// import {ScrollSmoother} from '../assets/js/ScrollSmoother';
import { ScrollSmoother } from "scroll-smoother-dev";

import "../assets/sass/homepage.sass";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const IndexPage: React.FC<PageProps> = () => {
  const main = useRef();
  const smoother = useRef();
  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
      ScrollTrigger.create({
        trigger: '.item6',
        pin: true,
        start: 'center center',
        end: '+=300',
        markers: true,
      });
    },
    { scope: main }
  );

  return (
    <div className="scrollWraper" ref={main}>
      {/* <div className="scroll-item item1" data-speed="0.5"><BannerPreload /></div> */}
      <div className="scroll-item item2" data-speed="0.8"><Banner /></div>
      <div className="scroll-item item3" data-speed="1.1"><Introduce /></div>
      <div className="scroll-item item4" data-speed="1.4"><Company /></div>
      <div className="scroll-item item5" data-speed="1.7"><Explore /></div>
      <div className="scroll-item item6" data-speed="2"><ContactForm /></div>

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
