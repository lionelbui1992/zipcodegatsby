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

interface PageProps {
  data: {
    page: {
      id: string
      title: string
      slug: string
      description: string
      image: { id: string; url: string }
      html: string
    }
  }
}

gsap.registerPlugin(ScrollTrigger);



const IndexPage: React.FC<PageProps> = (props: PageProps) => {
  // const { page } = props.data
  const container = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.pinning').forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: true
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
        <div className="scroll-section item2 pinning" data-speed="0.8">
          <Banner />
          <TextMarquee />
        </div>
        <div className="scroll-section introduce" data-speed="1.2"><Introduce /></div>
        <div className="scroll-section company" data-speed="1.4"><Company /></div>
        <div className="scroll-section item5" data-speed="1.7"><Explore /></div>
        <div className="scroll-section item6" data-speed="2"><ContactForm /></div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = (props: PageProps) => {
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
