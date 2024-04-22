import "../assets/sass/footer.sass";
import React, { useState, useEffect } from "react";
import { useQuery, gql } from '@apollo/client';
import { IFooterData } from "./blocks/types";
import SectionLink from "./SectionLink";

export default function Footer(): JSX.Element {

  const footerQuery = gql`
  query siteOption {
    option {
      footer {
        titleLeft
        logoFooter {
          node {
            altText
            link
            sourceUrl
            srcSet
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
            altText
            link
            sourceUrl
            srcSet
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
            altText
            link
            sourceUrl
            srcSet
          }
        }
        backgroundSection {
          node {
            altText
            link
            sourceUrl
            srcSet
          }
        }
        backgroundSectionMobile {
          node {
            altText
            link
            sourceUrl
            srcSet
          }
        }
        social {
          link {
            url
            title
            target
          }
          icon {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
  `;

  const { loading, error, data } = useQuery(footerQuery);

  // State
  const [footerData, setFooterData] = useState<IFooterData>({
    titleLeft: "",
    logoFooter: {
      node: {
        altText: "",
        link: "",
        sourceUrl: "",
        srcSet: "",
      },
    },
    descriptionLeft: "",
    email: "",
    titleRight: "",
    phone: "",
    address: {
      title: "",
      target: "",
      url: "",
    },
    backgroundDesktop: {
      node: {
        altText: "",
        link: "",
        sourceUrl: "",
        srcSet: "",
      },
    },
    buttonContact: {
      target: "",
      title: "",
      url: "",
    },
    codeOfConduct: {
      target: "",
      title: "",
      url: "",
    },
    cookiesPolicy: {
      target: "",
      title: "",
      url: "",
    },
    privacyPolicy: {
      target: "",
      title: "",
      url: "",
    },
    backgroundMobile: {
      node: {
        altText: "",
        link: "",
        sourceUrl: "",
        srcSet: "",
      },
    },
    backgroundSection: {
      node: {
        altText: "",
        link: "",
        sourceUrl: "",
        srcSet: "",
      },
    },
    backgroundSectionMobile: {
      node: {
        altText: "",
        link: "",
        sourceUrl: "",
        srcSet: "",
      },
    },
    social: []
  });
  const [imageFooter, setImageFooter] = useState("");
  const [backgroundFooter, setBackgroundFooter] = useState("");
  const [hiddenBackToTop, setHiddenBackToTop] = useState(true);
  // const [dataSocial, setDataSocial] = useState("");
  const handleOpenContactPopup = (e) => {
    e.preventDefault();
    document.body.classList.add("active-form");
    document.querySelector('.section-contact-popup')?.classList.add('show');
  }
  // useEffect
  useEffect(() => {
    if (!loading && !error && data && data.option.footer) {
      setFooterData(data.option.footer);

    }
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setHiddenBackToTop(false);
      } else {
        setHiddenBackToTop(true);
      }
    }
    window.addEventListener("scroll", () => handleScroll());
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (!loading && !error && data && data.option.footer) {
        if (windowWidth < 768) {
          setBackgroundFooter(data.option.footer.backgroundSectionMobile.node.sourceUrl);
          setImageFooter(data.option.footer.backgroundMobile.node.sourceUrl);
        } else {
          setBackgroundFooter(data.option.footer.backgroundSection.node.sourceUrl);
          setImageFooter(data.option.footer.backgroundDesktop.node.sourceUrl);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    // console.log(footerData.social);
    const dataSocial = Object.values(footerData.social);
    // setDataSocial(Object.values(footerData.social));
  }, [data]);
  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // useEffect(() => {
  //   setDataSocial(Object.values(footerData.social));
  // }, [footerData]);

  const getSocialSVG = (item: { link: { url: string } }) => {
    if (item.link.url.includes('facebook.com')) {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34.09"><defs><style>.cls-square-1{fill:#010101;}.cls-facebook-2{fill:#fff;fill-rule: initial;}</style></defs><title>social icon</title><rect class="cls-square-1" y="0.05" width="34" height="34" rx="5.99"/><rect class="cls-facebook-2" x="17.86" y="34" width="5.46" height="0.09"/><path class="cls-facebook-2" d="M24.38,11.46H27V6.93H23.21C19.54,6.93,17,9.19,17,13.35v3.58H12.78v4.85H17V34h5V21.77h4.8V16.92H22v-3.1C22,12.42,22.37,11.46,24.38,11.46Zm0,0H27V6.93H23.21C19.54,6.93,17,9.19,17,13.35v3.58H12.78v4.85H17V34h5V21.77h4.8V16.92H22v-3.1C22,12.42,22.37,11.46,24.38,11.46Zm0,0H27V6.93H23.21C19.54,6.93,17,9.19,17,13.35v3.58H12.78v4.85H17V34h5V21.77h4.8V16.92H22v-3.1C22,12.42,22.37,11.46,24.38,11.46Zm0,0H27V6.93H23.21C19.54,6.93,17,9.19,17,13.35v3.58H12.78v4.85H17V34h5V21.77h4.8V16.92H22v-3.1C22,12.42,22.37,11.46,24.38,11.46Z"/><rect class="cls-facebook-1" x="17.86" y="34" width="5.46" height="0.09"/></svg>`;
    } else if (item.link.url.includes('instagram.com')) {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><defs><style>.cls-square-1{fill:#010101;}.cls-instagram-2{fill:#fff;}</style></defs><title>instagram</title><rect class="cls-square-1" width="34" height="34" rx="5.99"/><path class="cls-instagram-2" d="M17,7c-2.7,0-3,0-4.1.06a7.69,7.69,0,0,0-2.42.46A4.9,4.9,0,0,0,8.71,8.65,4.74,4.74,0,0,0,7.57,10.4a7.56,7.56,0,0,0-.46,2.39c-.06,1.1-.06,1.43-.06,4.15s0,3,.06,4.1a7.17,7.17,0,0,0,.46,2.42,5,5,0,0,0,1.14,1.77,4.65,4.65,0,0,0,1.76,1.14,7.43,7.43,0,0,0,2.42.47c1.07.05,1.41.05,4.11.05s3,0,4.1-.06a7.37,7.37,0,0,0,2.42-.46,4.81,4.81,0,0,0,1.77-1.14,5.11,5.11,0,0,0,1.15-1.77,7.31,7.31,0,0,0,.46-2.41C27,20,27,19.62,27,16.94s0-3-.06-4.1a7.17,7.17,0,0,0-.46-2.42,5.11,5.11,0,0,0-2.91-2.91A7.14,7.14,0,0,0,21.15,7C20,7,19.7,7,17,7Zm0,1.79c2.65,0,3,0,4,.07a5.1,5.1,0,0,1,1.85.34A3.08,3.08,0,0,1,24,9.93a2.82,2.82,0,0,1,.74,1.15,5.46,5.46,0,0,1,.35,1.84c0,1.05.06,1.36.06,4s0,3-.07,4a5.33,5.33,0,0,1-.35,1.85,3.29,3.29,0,0,1-1.89,1.89A5.51,5.51,0,0,1,21,25c-1.06.05-1.36.06-4,.06s-3,0-4-.06a5.58,5.58,0,0,1-1.86-.35A3.1,3.1,0,0,1,10,23.94a2.89,2.89,0,0,1-.74-1.14,5.34,5.34,0,0,1-.35-1.86c0-1-.06-1.37-.06-4s0-3,.06-4A5.21,5.21,0,0,1,9.21,11,2.82,2.82,0,0,1,10,9.88a2.82,2.82,0,0,1,1.14-.74,5.52,5.52,0,0,1,1.85-.35c1.05,0,1.37,0,4,0Zm0,3.05A5.12,5.12,0,1,0,22.11,17h0A5.11,5.11,0,0,0,17,11.81h0Zm0,8.42a3.32,3.32,0,1,1,3.32-3.31A3.32,3.32,0,0,1,17,20.25Zm6.51-8.62a1.2,1.2,0,1,1-1.19-1.19,1.19,1.19,0,0,1,1.19,1.17Z"/></svg>`;
    } else if (item.link.url.includes('linkedin.com')) {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><defs><style>.cls-square-1{fill:#010101;}.cls-linkedin-2{fill:#fff;fill-rule:evenodd;}</style></defs><title>linkedin</title><rect class="cls-square-1" width="34" height="34" rx="5.99"/><g id="Page-1"><g id="Dribbble-Light-Preview"><g id="icons"><path id="linkedin-" class="cls-linkedin-2" d="M27,27H23V20c0-1.91-.84-3-2.35-3S18,18.12,18,20v7H14V14h4v1.45a4.85,4.85,0,0,1,4.08-2.19C24.93,13.27,27,15,27,18.56V27ZM9.47,12A2.46,2.46,0,1,1,11.9,9.47v0A2.45,2.45,0,0,1,9.47,12ZM7,27h5V14H7Z"/></g></g></g></svg>`;
    } else if (item.link.url.includes('twitter.com')) {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><defs><style>.cls-square-1{fill:#010101;}.cls-twitter-2{fill:#fff;}</style></defs><title>twitter</title><rect class="cls-square-1" x="0.03" width="34" height="34" rx="5.99"/><path class="cls-twitter-2" d="M25.91,25l-6.57-9.56-.75-1.08-4.7-6.82L13.51,7H7.73l1.4,2,6.26,9.08.74,1.07,5,7.3.38.55h5.78Zm-3.68.73L17,18.17l-.74-1.08L10.21,8.3h2.61l4.89,7.12.8,1.06,6.37,9.27Z"/><polygon class="cls-twitter-2" points="26.62 6.99 19.34 15.46 18.46 16.48 17.51 15.13 24.6 6.99 26.62 6.99"/><polygon class="cls-twitter-2" points="6.71 27.02 13.99 18.55 15.34 16.85 16.29 18.2 8.73 27.02 6.71 27.02"/></svg>`;
    } else {
      return ``;
    }
  }

  return (
    <footer className="site-footer" style={{ backgroundImage: "url(" + backgroundFooter + ")" }}>
      <div className="container">
        <div className={`to-top`} onClick={() => { handleBackToTopClick() }}>
          <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.1991 15.862L26.8782 19.1829L17.6445 9.70623L17.6446 32.6554L12.7847 32.6554L12.7847 9.70623L3.55106 19.1829L0.284179 15.862L15.2146 0.877548L30.1991 15.862Z" fill="#0068FF" />
          </svg>
          <span>Back to top</span>
        </div>
        <div className="section-top">
          <div className="left">
            {(footerData.titleLeft && footerData.titleLeft !== "") && (
              <h5 className="title">{footerData.titleLeft}</h5>
            )}
            {(footerData.descriptionLeft && footerData.descriptionLeft !== "") && (
              <div className="content top">{footerData.descriptionLeft}</div>
            )}
            {(footerData.buttonContact && footerData.buttonContact.title) && (
              <a onClick={handleOpenContactPopup} href={footerData.buttonContact.url} target={footerData.buttonContact.target}><div className="button">{footerData.buttonContact.title}</div></a>
            )}
          </div>
          <div className="social-container mb">
            {(footerData.social) && (
              footerData.social.map((item: any, index: any) => (
                <a className="social-item" key={index} target={item.link.target} href={item.link.url} >
                  <div className="icon" dangerouslySetInnerHTML={{ __html: getSocialSVG(item) }}></div>
                </a>
              ))
            )}
          </div>
          <div className="right">

            <div className="content-container content-left">
              {(footerData.email && footerData.email !== "") && (
                <a className="email content" href={`mailto:${footerData.email}`} target="_blank">{footerData.email}</a>
              )}
              {(footerData.phone && footerData.phone !== "") && (
                <a className="phone content" href={`tel:${footerData.phone}`} target="_blank">{footerData.phone}</a>
              )}
              {(footerData.titleRight && footerData.titleRight !== "") && (
                <h5 className="title right">{footerData.titleRight}</h5>
              )}
              {(footerData.address && footerData.address.title) && (
                <a className="address content top" target={footerData.address.target} href={footerData.address.url} >{footerData.address.title}</a>
              )}
            </div>
            <div className="ft-mb content-right">
              <div className="social-container dk">
                {(footerData.social) && (
                  footerData.social.map((item: any, index: any) => (
                    <a className="social-item" key={index} target={item.link.target} href={item.link.url} >
                      <div className="icon" dangerouslySetInnerHTML={{ __html: getSocialSVG(item) }}></div>
                    </a>
                  ))
                )}
              </div>
              <SectionLink
                privacyPolicy={footerData.privacyPolicy}
                cookiesPolicy={footerData.cookiesPolicy}
                codeOfConduct={footerData.codeOfConduct}
              />
            </div>
          </div>
        </div>
        <div className="section-middle">
          <svg className="icon-ft" xmlns="http://www.w3.org/2000/svg" width="117" height="135" viewBox="0 0 117 135" fill="none">
            <path d="M0 0V13.4922H81.6952L0 60.6585V134.924H116.849V121.375H35.1536L116.849 74.2081V0H0Z" fill="#0068FF" />
          </svg>
          {imageFooter && (
            <div className="img-footer" style={{ backgroundImage: "url(" + imageFooter + ")" }}></div>
          )}
        </div>

      </div>
    </footer>
  );
};