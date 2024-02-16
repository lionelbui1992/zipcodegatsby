import React, { useState, useEffect, useRef } from "react";
import "./FooterWrapper/footer.sass";
import { Link } from "gatsby"
import SectionLink from "./FooterWrapper/SectionLink";
import gsap from "gsap";

export default function Footer(): JSX.Element {
  const titleLeft = 'Want to hear more?';
  const textLeft = 'Speak to us to learn more or if you are looking for something out of the ordinary.';
  const buttonLeft = 'Contact us';
  const titleRight = 'Zipcode Limited';
  const address = '119 Rama 4 Road, Phra Khanong, Klong Toey, Bangkok 10110';
  const email = 'contact@zipcode-site.com';
  const phone = '+662-016-2427';
  const map = 'https://www.google.com/maps/place/119+Thanon+Rama+IV,+Khwaeng+Phra+Khanong,+Khet+Khlong+Toei,+Krung+Thep+Maha+Nakhon+10110,+Th%C3%A1i+Lan/@13.7116784,100.580415,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29f527eee8b05:0xc4e71bb75405165c!8m2!3d13.7116784!4d100.5829899!16s%2Fg%2F11pzy8ym12?hl=vi-VN&entry=ttu';
  const imageDesktop = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/footer-img-desktop1.svg';
  const imageMobile = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/footer-img-mobile.svg';
  const logoFooter = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/logo-footer.svg';
  const bgFooterDk = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/bg-footer-dk.png';
  const bgFooterMb = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/bg-footer-mb.png';


  const [backgroundFooter, setBackgroundFooter] = useState(bgFooterDk);
  const [imageFooter, setImageFooter] = useState(imageDesktop);
  const [hiddenBackToTop, setHiddenBackToTop] = useState(true);

  const animationZ = useRef(null);
  useEffect(() => {
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
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" style={{ backgroundImage: "url(" + backgroundFooter + ")" }}>
      <div className="container">
        <div className="section-top">
          <div className="left">
            <h5 className="title">{titleLeft}</h5>
            <div className="content top">{textLeft}</div>
            <div className="button">{buttonLeft}</div>
          </div>
          <div className="right">
            <div className="content-container">
              <h5 className="title">{titleRight}</h5>
              <a className="address content top" href={map} target="_blank">{address}</a>
              <a className="email content" href={`mailto:${email}`} target="_blank">{email}</a>
              <a className="phone content" href={`tel:${phone}`} target="_blank">{phone}</a>
            </div>
            <div className="ft-mb"><SectionLink /></div>
          </div>
        </div>
        <div className="section-middle">
          <div className="img-footer" style={{ backgroundImage: "url(" + imageFooter + ")" }}></div>
        </div>
        <div className="ft-dk"><SectionLink /></div>
      </div>
      <div className={`to-top ${hiddenBackToTop ? 'hidden' : ''}`}>
        <svg onClick={() => { handleBackToTopClick() }} width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.1991 15.862L26.8782 19.1829L17.6445 9.70623L17.6446 32.6554L12.7847 32.6554L12.7847 9.70623L3.55106 19.1829L0.284179 15.862L15.2146 0.877548L30.1991 15.862Z" fill="#0068FF" />
        </svg>
        <span>Back to top</span>
      </div>
    </footer>
  );
};