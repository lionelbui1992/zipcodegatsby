import React, { useEffect } from "react";
import { OurTeams } from "../components/AboutPage/OurTeams";
import { BoxImage } from "../components/AboutPage/BoxImage";
import { BannerCta } from "../components/AboutPage/BannerCta";
import { MarqueeText } from "../components/AboutPage/MarqueeText";
import { BannerTop } from "../components/AboutPage/BannerTop";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { IPageProps } from "../shared/model/IPageProps";

const About: React.FC<IPageProps> = (props: IPageProps) => {
  // const { page } = props.data
  useEffect(() => {
      const sections: HTMLElement[] = document.getElementsByTagName("section");
      let i: number;

      window.onscroll = function () {            
          for (i = 0; i < sections.length; i = i + 1) {                
              if (window.scrollY > sections[i].offsetTop && window.scrollY < sections[i].offsetTop + sections[i].offsetHeight) {                    
                  sections[i].classList.add("active");                    
              } else {
                  sections[i].classList.remove("active");
              }                
          }            
      }
  })
  return (
    <Layout>
      <div className="about-page">
          <section className="about-banner-top about-section bg-black">
              <BannerTop />
          </section>
          <MarqueeText />
          <section className="about-our-teams about-section">
              <BoxImage 
                  className="box-image-left" 
                  boxImage="/about/about-box-image-1.jpg" 
                  boxIcon="column" 
                  boxTitle="Foundations of the Future" 
                  boxContent="Our current pipeline is centered around Bangkok, with expansion plans across Thailand." 
                  boxContentMobile="Places and spaces have never been as vital as they are today. Because in an increasingly virtual world, something real is of even greater value, not just as an asset but for our growth and development. Because how and why we make things is as important as what we make. " 
                  boxLinkText="View our Projects" 
                  boxLinkUrl="#" 
              />
              <div className="our-teams">
                  <OurTeams />
              </div>
          </section>
          <section className="about-banner-cta about-section">
              <BannerCta />
          </section>
          <section className="about-box-image about-section">
              <BoxImage 
                  className="box-image-right box-transformative-together" 
                  boxImage="/about/about-box-image-2.jpg" 
                  boxIcon="" 
                  boxTitle="Transformative Together" 
                  boxContent="We partner with those who share our passion for creating exceptional. Our partnerships span leading financial investors, architectural firms, landowners, tenants, operators, and landscapers. We move further together with close collaboration and a sense of shared mission." 
                  boxContentMobile="We partner with those who share our passion for creating exceptional. Our partnerships span leading financial investors, architectural firms, landowners, tenants, operators, and landscapers. We move further together with close collaboration and a sense of shared mission." 
                  boxLinkText="Our Partners" 
                  boxLinkUrl="#" 
              />
          </section>
      </div>
    </Layout>
  )
}

export default About

export const Head = (props: IPageProps) => {
    const { page } = props.data
    return <SEOHead {...page} />
  }
  // export const query = graphql`
  //   query PageContent($id: String!) {
  //     page(id: { eq: $id }) {
  //       id
  //       title
  //       slug
  //       description
  //       image {
  //         id
  //         url
  //       }
  //       html
  //     }
  //   }
  // `
  
