import * as React from "react";
import { useRef, useEffect } from "react";
import type { HeadFC } from "gatsby";
import { Banner, BannerPreload, Introduce, Company, Explore, ContactForm } from "../components/HomePage";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/sass/homepage.sass";
import { TextMarquee } from "../components/TextMarquee";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { IPageProps } from "../shared/model/IPageProps";

gsap.registerPlugin(ScrollTrigger);



const IndexPage: React.FC<IPageProps> = (props: IPageProps) => {
  // const { page } = props.data
  const container = useRef(null);
  useEffect(() => {

    if (!container) return;

    const absoluteSections = document.querySelectorAll('.scroll-section .relative-section');
    const totalHeight = [...absoluteSections].reduce((acc, section) => {
      section.classList.replace('relative-section', 'absolute-section'); // Replace class
      return acc + section.offsetHeight;
    }, 0);;

    document.querySelector('.pinning-2').style.height = totalHeight + 'px';

    ScrollTrigger.create({
      trigger: ".pinning-1",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      markers: false,
      scrub: false
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pinning-2",
        start: "top top",
        end: totalHeight,
        pin: true,
        pinSpacing: false,
        scrub: 0.01,
        markers: true
      },
      ease: "none",
      smoothChildTiming: true

    });
    tl.to(".item-1", { yPercent: -100, })
    tl.fromTo(".c-image", { yPercent: 100 }, { yPercent: -200, })
    tl.to(".item-2", { yPercent: -100, })



    gsap.utils.toArray(".pixelate-container").forEach((item) => {
      let tl2 = gsap.timeline({
        repeat: 0, repeatDelay: 0.5,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "+=500",
          animation: tl,
          markers: true
        }
      });

      let cells = item.querySelectorAll('.cell');
      tl2.from(cells, {
        duration: 1.5,
        scale: 0,
        y: 40,
        repeat: 0,
        ease: "none",
        stagger: {
          amount: 1,
          axis: false,
          from: 'random',
          grid: "auto"
        }
      });

    })



    return () => {
      // Kill all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <Layout>
      <div className="scrollTrigger" ref={container}>
        {/* <div className="scroll-section item1" data-speed="0.5"><BannerPreload /></div> */}
        <div className="scroll-section pinning-1" data-speed="0.2">
          <Banner />
          <TextMarquee />
        </div>
        <div className="scroll-section pinning-2 company" data-speed="0.3">
          <div className="relative-section item-1"><Introduce /></div>
          <div className="relative-section item-2"><Company /></div>
          <div className="absolute-section item-3"><Explore /></div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = (props: IPageProps) => {
  const { page } = props.data
  return <SEOHead {...page} />
}
export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
