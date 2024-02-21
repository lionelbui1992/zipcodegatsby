import * as React from "react";
import { useRef, useEffect } from "react";
import type { HeadFC } from "gatsby";
import { Banner, Introduce, Company, Explore, ContactForm } from "../components/HomePage";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/sass/homepage.sass";
import { TextMarquee } from "../components/TextMarquee";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { IPageProps } from "../shared/model/IPageProps";
import Seo from "gatsby-plugin-wpgraphql-seo";

gsap.registerPlugin(ScrollTrigger);

const data = {
  TextMarquee: {
    marqueeBkg: "/img/MarqueeText-bkg.png",
    marqueeContent: [
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      }
    ]
  }
}

const IndexPage: React.FC<IPageProps> = ({ data: { wpPage: page } }: any) => {

  console.log(page)
  const container = useRef(null);
  useEffect(() => {

    if (!container) return;

    const absoluteSections = document.querySelectorAll('.scroll-section .relative-section');
    const totalHeight = [...absoluteSections].reduce((acc, section) => {
      section.classList.replace('relative-section', 'absolute-section'); // Replace class
      return acc + section.offsetHeight;
    }, 0);;

    let temp = screen.height < 767 ? 300 : 0
    document.querySelector('.pinning-2').style.height = (totalHeight + temp) + 'px';

    ScrollTrigger.create({
      trigger: ".pinning-1",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      markers: false,
      scrub: 0.000001,
      onUpdate: (self) => {
        if (document.querySelector('.item-2')) {
          document.querySelector('.item-2').style.opacity = '0';
        }
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pinning-2",
        start: "top top",
        end: totalHeight,
        pin: true,
        pinSpacing: false,
        scrub: 0.000001,
        markers: false,
        onUpdate: (self) => {
          if (document.querySelector('.item-2')) {
            document.querySelector('.item-2').style.opacity = '1';
          }
        },
      },
      ease: "none",
      smoothChildTiming: true
    });
    // tl.to(".item-1", { yPercent: 0, duration: 1 })
    tl.fromTo(".item-1", { yPercent: 0 }, { yPercent: -100, duration: 4 })
    tl.fromTo(".c-image", {
      y: document.querySelector('.c-image').getBoundingClientRect().y - screen.height
    }, { y: -700, duration: 2 })
    tl.to(".item-2", { yPercent: -100, duration: 2 })



    return () => {
      // Kill all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <>
      <Seo post={page} />
      <Layout>
        <div className="scrollTrigger" ref={container}>
          <div className="scroll-section header-placeholder" ></div>
          <div className="scroll-section pinning-1" data-speed="0.2">
            <Banner />
            <TextMarquee marqueeBkg={data?.TextMarquee?.marqueeBkg} marqueeContent={data?.TextMarquee?.marqueeContent} />
          </div>
          <div className="scroll-section pinning-2 company" data-speed="0.3">
            <div className="relative-section item-1"><Introduce /></div>
            <div className="relative-section item-2" style={{ opacity: 0 }}><Company /></div>
            <div className="relative-section item-3"><Explore /></div>
          </div>
        </div>
      </Layout >
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    
    wpPage(isFrontPage: {eq: true}) {
      nodeType
      title
      uri
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
      blocks
    }
  }
`