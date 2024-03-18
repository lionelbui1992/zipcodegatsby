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

  // useEffect(() => {
  //   setDataSocial(Object.values(footerData.social));
  // }, [footerData]);

  return (
    <footer className="site-footer" style={{ backgroundImage: "url(" + backgroundFooter + ")" }}>
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
                <a className="social-item" target={item.link.target} href={item.link.url} >
                  <div className="icon" style={{ backgroundImage: "url(" + item.icon.node.sourceUrl + ")" }}></div>
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
                    <a className="social-item" target={item.link.target} href={item.link.url} >
                      <div className="icon" style={{ backgroundImage: "url(" + item.icon.node.sourceUrl + ")" }}></div>
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
