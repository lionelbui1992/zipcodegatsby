import React, { useState, useEffect, useRef } from "react";
import "./FooterWrapper/footer.sass";
import { graphql, useStaticQuery } from "gatsby"
import {SectionLink} from "./FooterWrapper";
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";

export default function Footer(): JSX.Element {

  const data = useStaticQuery(
    graphql`
      query siteOption {
        allWp {
          edges {
            node {
              option {
                footer {
                  titleLeft
                  logoFooter {
                    node {
                      alt
                      link
                      sourceUrl
                      srcSet
                      url
                    }
                  }
                  descriptionLeft
                  email
                  titleRight
                  phone
                  address {
                    title
                    target
                    url
                  }
                  backgroundDesktop {
                    node {
                      alt
                      link
                      sourceUrl
                      srcSet
                      url
                    }
                  }
                  buttonContact {
                    target
                    title
                    url
                  }
                  codeOfConduct {
                    target
                    title
                    url
                  }
                  cookiesPolicy {
                    target
                    title
                    url
                  }
                  privacyPolicy {
                    target
                    title
                    url
                  }
                  backgroundMobile {
                    node {
                      alt
                      link
                      sourceUrl
                      srcSet
                      url
                    }
                  }
                  backgroundSection {
                    node {
                      alt
                      link
                      sourceUrl
                      srcSet
                      url
                    }
                  }
                  backgroundSectionMobile {
                    node {
                      alt
                      link
                      sourceUrl
                      srcSet
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const dataFooter = data.allWp.edges[0].node.option.footer;
  // const GET_DATA_FOOTER = gql`
  //   query siteOption {
  //     option {
  //       footer {
  //         titleLeft
  //         logoFooter {
  //           node {
  //             sourceUrl
  //           }
  //         }
  //       }
  //     }
  //   }
        
  // `;

  // const { data } = useQuery(GET_DATA_FOOTER);
    
  // console.log(data);
  // console.log(data.allWp.edges[0].node.option.footer);

  const titleLeft = dataFooter.titleLeft;
  const textLeft = dataFooter.descriptionLeft;
  const buttonLeft = dataFooter.buttonContact.title;
  const titleRight = dataFooter.titleRight;
  const address = dataFooter.address.title;
  const email = dataFooter.email;
  const phone = dataFooter.phone;
  const map = dataFooter.address.url;
  const imageDesktop = dataFooter.backgroundDesktop.node.url;
  const imageMobile = dataFooter.backgroundMobile.node.url;
  const logoFooter = dataFooter.logoFooter.node.url;
  const bgFooterDk = dataFooter.backgroundSection.node.url;
  const bgFooterMb = dataFooter.backgroundSectionMobile.node.url;
  const privacyPolicy = dataFooter.privacyPolicy;
  const cookiesPolicy = dataFooter.cookiesPolicy;
  const codeOfConduct = dataFooter.codeOfConduct;

  const [backgroundFooter, setBackgroundFooter] = useState(bgFooterDk);
  const [imageFooter, setImageFooter] = useState(imageDesktop);
  const [hiddenBackToTop, setHiddenBackToTop] = useState(true);

  const animationZ = useRef(null);
  useEffect(() => {
    // console.log(data);

    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setBackgroundFooter(bgFooterMb);
        setImageFooter(imageMobile);
      } else {
        setBackgroundFooter(bgFooterDk);
        setImageFooter(imageDesktop);
      }
    };

    // let textZ = animationZ.current;
    // if (textZ) {

    //   let tl = gsap.timeline({

    //     repeat: -1,
    //     yoyo: true,
    //     ease: "none"
    //   })

    //   tl.to(textZ, { x: 200, y: -50, duration: 4 })
    //     .to(textZ, { x: 400, y: -30, duration: 4 })
    //     .to(textZ, { x: 600, y: -50, duration: 4 })
    //     .to(textZ, { x: 700, y: -100, duration: 4 })
    //     .to(textZ, { x: 800, y: 100, duration: 4 })
    //     .to(textZ, { x: 600, y: 50, duration: 4 })
    //     .to(textZ, { x: 400, y: 70, duration: 4 })
    //     .to(textZ, { x: 200, y: 50, duration: 4 })
    //     .to(textZ, { x: 100, y: 30, duration: 4 })
    //     .to(textZ, { x: 0, y: 10, duration: 4 })
    //     .to(textZ, { x: -200, y: 0, duration: 4 })
    //     .to(textZ, { x: 200, y: -50, duration: 4 })
    //     .to(textZ, { x: 400, y: -30, duration: 4 })
    //     .to(textZ, { x: 600, y: -50, duration: 4 })
    //     .to(textZ, { x: 700, y: -100, duration: 4 })
    //     .to(textZ, { x: 800, y: 100, duration: 4 })


    // }


    window.addEventListener("resize", handleResize);
    handleResize();


    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setHiddenBackToTop(false);
      } else {
        setHiddenBackToTop(true);
      }
    }
    // window.addEventListener("scroll", () => handleScroll());
  }, []);

  // const handleBackToTopClick = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <footer className="site-footer" style={{ backgroundImage: "url(" + backgroundFooter + ")" }}>
      <div className="container">
        <div className="section-top">
          <div className="left">
            <h5 className="title">{titleLeft}</h5>
            <div className="content top">{textLeft}</div>
            <a><div className="button">{buttonLeft}</div></a>
          </div>
          <div className="right">
            <div className="content-container">
              <h5 className="title">{titleRight}</h5>
              <a className="address content top" href={map} target="_blank">{address}</a>
              <a className="email content" href={`mailto:${email}`} target="_blank">{email}</a>
              <a className="phone content" href={`tel:${phone}`} target="_blank">{phone}</a>
            </div>
            <div className="ft-mb">
              <SectionLink 
                privacyPolicy={dataFooter.privacyPolicy} 
                cookiesPolicy={dataFooter.cookiesPolicy} 
                codeOfConduct={dataFooter.codeOfConduct} 
              />
            </div>
          </div>
        </div>
        <div className="section-middle">
          <div className="img-footer" style={{ backgroundImage: "url(" + imageFooter + ")" }}></div>
        </div>
        <div className="ft-dk">
          <SectionLink 
            privacyPolicy={dataFooter.privacyPolicy} 
            cookiesPolicy={dataFooter.cookiesPolicy} 
            codeOfConduct={dataFooter.codeOfConduct} 
          />
          </div>
      </div>
      {/* <div className={`to-top ${hiddenBackToTop ? 'hidden' : ''}`}>
        <svg onClick={() => { handleBackToTopClick() }} width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.1991 15.862L26.8782 19.1829L17.6445 9.70623L17.6446 32.6554L12.7847 32.6554L12.7847 9.70623L3.55106 19.1829L0.284179 15.862L15.2146 0.877548L30.1991 15.862Z" fill="#0068FF" />
        </svg>
        <span>Back to top</span>
      </div> */}
    </footer>
  );
};