import * as React from "react"
import { useRef, useEffect } from "react";
import { HeadFC, PageProps } from "gatsby";
import { NotFound } from "../components/NotFound";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "../components/layout"

gsap.registerPlugin(ScrollTrigger);

const NotFoundPage: React.FC<PageProps> = () => {
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
        markers: false
      });
    })

    return () => {
      // Kill all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <>
      <Layout>
        <div className="page-404 not-found text-center">
          <section className="section-404">
              <NotFound />
          </section>
        </div>
      </Layout>
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Page not Found.</title>
