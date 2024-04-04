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
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34.09" width="34" height="34"><path d="M1011.24,528.64v22.72a5.63,5.63,0,0,1-5.63,5.64h-5.05V543.52h5.23v-5.29h-5.24v-3.38c0-1.53.42-2.57,2.62-2.57h2.8v-4.94h-4.08c-4,0-6.8,2.46-6.8,7v3.9h-4.57v5.29h4.57V557H982.88a5.64,5.64,0,0,1-5.64-5.64V528.64a5.64,5.64,0,0,1,5.64-5.64h22.73A5.63,5.63,0,0,1,1011.24,528.64Z" transform="translate(-977.24 -523)"/></svg>`;
    } else if (item.link.url.includes('instagram.com')) {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="34" height="34"><rect width="34" height="34" rx="5.99"/><path class="cls-1" d="M17,5c-3.26,0-3.67,0-4.95.08a9,9,0,0,0-2.91.55A5.94,5.94,0,0,0,7,7,5.79,5.79,0,0,0,5.63,9.12,8.83,8.83,0,0,0,5.07,12C5,13.32,5,13.72,5,17s0,3.67.07,4.95a8.71,8.71,0,0,0,.56,2.91A6,6,0,0,0,7,27a5.78,5.78,0,0,0,2.13,1.38,8.82,8.82,0,0,0,2.91.56C13.33,29,13.74,29,17,29s3.67,0,4.95-.07a8.76,8.76,0,0,0,2.91-.56A5.78,5.78,0,0,0,27,27a6,6,0,0,0,1.38-2.13,8.71,8.71,0,0,0,.56-2.91C29,20.65,29,20.24,29,17s0-3.66-.07-4.94a8.83,8.83,0,0,0-.56-2.92,6.15,6.15,0,0,0-3.51-3.51A8.79,8.79,0,0,0,22,5.06C20.67,5,20.26,5,17,5Zm0,2.16c3.2,0,3.58,0,4.85.08a6.49,6.49,0,0,1,2.23.41,3.75,3.75,0,0,1,1.38.9,3.54,3.54,0,0,1,.89,1.38,6.54,6.54,0,0,1,.42,2.22c.05,1.27.07,1.65.07,4.85s0,3.59-.08,4.85a6.61,6.61,0,0,1-.42,2.23,4,4,0,0,1-2.28,2.28,6.68,6.68,0,0,1-2.23.41c-1.28.06-1.65.07-4.86.07s-3.59,0-4.86-.07a7,7,0,0,1-2.24-.42,3.76,3.76,0,0,1-1.37-.9,3.59,3.59,0,0,1-.9-1.38,6.69,6.69,0,0,1-.42-2.24c0-1.26-.07-1.65-.07-4.84s0-3.59.07-4.86A6.69,6.69,0,0,1,7.6,9.87a3.45,3.45,0,0,1,.9-1.38A3.39,3.39,0,0,1,9.87,7.6a6.55,6.55,0,0,1,2.23-.43c1.27,0,1.65-.06,4.85-.06Zm0,3.68A6.17,6.17,0,1,0,23.16,17,6.16,6.16,0,0,0,17,10.82ZM17,21a4,4,0,1,1,4-4A4,4,0,0,1,17,21Zm7.85-10.4a1.44,1.44,0,1,1-1.44-1.44A1.45,1.45,0,0,1,24.85,10.58Z" style="fill: #fff;"/></svg>`;
    } else if (item.link.url.includes('linkedin.com')) {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><rect width="34" height="34" rx="5.99"/><path d="M26.54,26.54H22.72V19.86c0-1.83-.81-2.85-2.25-2.85S18,18.07,18,19.86v6.68H14.14V14.14H18v1.39a4.61,4.61,0,0,1,3.9-2.1c2.69,0,4.69,1.65,4.69,5.06v8.05ZM9.79,12.16a2.35,2.35,0,1,1,2.33-2.35,2.34,2.34,0,0,1-2.33,2.35ZM7.46,26.54h4.77V14.14H7.46Z" style="fill: #fff;"/></svg>`;
    } else if (item.link.url.includes('twitter.com')) {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><rect width="34" height="34" rx="5.99"/><path d="M25.4,25l-6.57-9.55-.75-1.08-4.7-6.83L13,7H7.22L8.62,9l6.26,9.08.74,1.08,5,7.3L21,27h5.78Zm-3.68.74L16.5,18.15l-.74-1.08L9.7,8.27h2.61l4.89,7.12L18,16.46l6.37,9.27Z" style="fill: #fff;"/><polygon points="15.76 17.07 16.5 18.15 15.62 19.17 8.86 27.04 7.19 27.04 14.88 18.09 15.76 17.07" style="fill: #fff;"/><polygon points="26.11 6.96 18.83 15.44 17.95 16.46 17.2 15.39 18.08 14.36 23.02 8.62 24.45 6.96 26.11 6.96" style="fill: #fff;"/></svg>`;
    } else {
      return ``;
    }
  }

  return (
    <footer className="site-footer" style={{ backgroundImage: "url(" + backgroundFooter + ")" }}>

      <div className={`to-top`} onClick={() => { handleBackToTopClick() }}>
        <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.1991 15.862L26.8782 19.1829L17.6445 9.70623L17.6446 32.6554L12.7847 32.6554L12.7847 9.70623L3.55106 19.1829L0.284179 15.862L15.2146 0.877548L30.1991 15.862Z" fill="#0068FF" />
        </svg>
        <span>Back to top</span>
      </div>
      <div className="container">
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