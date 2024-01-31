import React, { useRef, useEffect } from "react";
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import "./style.sass";

gsap.registerPlugin(TextPlugin);

export const Preload = (): JSX.Element => {
  useEffect(() => {

    const preloadElement = document.querySelector('.preload');

    const tl = gsap.timeline({
      // repeat: -1,
      // yoyo: true,
      // repeatDelay: 0.5,
      // delay: 2,
      // defaults: { ease: "power3.inOut" }
    });

    tl.to(".textZ", { duration: 1, x: "-90vw", y: "-60vh" })
    tl.to(".textZ", { duration: 1, x: "-30vw", y: "-60vh" })
    tl.to(".textZ", { duration: 1, x: "-75vw", y: "-30vh" })
    tl.to(".textZ", { duration: 1, fontSize: "500vw" })
      .call(() => {
        preloadElement?.classList.remove('loading');
      });


    const textZ = gsap.timeline({
      // repeat: -1,
      // yoyo: true,
      // repeatDelay: 0.5,
      // delay: 2,
      // defaults: { ease: "power3.inOut" }
    });

    textZ.to(".textZ", { duration: 0.2, text: "&#xe900;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe901;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe902;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe904;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe905;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe906;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe907;" })
    // tl.to(".textZ", { duration: 0.2, text:  text: "&#xe908;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe909;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe90b;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe90c;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe90d;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe90e;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe90f;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe910;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe911;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe912;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe913;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe914;" })
    textZ.to(".textZ", { duration: 0.2, text: "&#xe90f;" })

  }, []);

  return (

    <div className="preload-elements">
      <div className="preload-images">
        <img id="preload-image-1" className="preload-image animated animatedFadeInUp fadeInUp-1" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/svg-shape-back.svg" />
        <img id="preload-image-2" className="preload-image animated animatedFadeInUp fadeInUp-2" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/pexels-helena-lopes-1015568-scaled.jpg" />
        <img id="preload-image-3" className="preload-image animated animatedFadeInUp fadeInUp-3" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/image-2.png" />
      </div>
      <div className="preload-text">
        <div className="wordToUnderline">
          <div id="underline-1" className="underline " />
          <p id="text-1">&nbsp;</p>
        </div>
        <div className="wordToUnderline">
          <div id="underline-2" className="underline underline" />
          <p id="text-2">&nbsp;</p>
        </div>
      </div>
    </div>
  );
};