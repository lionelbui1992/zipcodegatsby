import * as React from "react"
import { useRef, useEffect } from "react";
import { HeadFC, Link, PageProps } from "gatsby";
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
            <div className="pinning" data-speed="0.8">
              <div className="main-banner-top" style={{ backgroundImage: `url(/img/bg-banner-grid.png)` }}>
                <div className="container">
                  <h1>404.</h1>
                </div>
              </div>
            </div>
            <div className="main-content" data-speed="0.8" style={{ backgroundImage: `url(/img/bkg-404-content.png)` }}>
              <div className="container">
                <h5>Page not Found.</h5>
                <p>Don't worry though, everything is still alright. We just can't find what you're looking for.</p>
                <Link className="btn" to="/">Back to Home</Link>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Page not Found.</title>
