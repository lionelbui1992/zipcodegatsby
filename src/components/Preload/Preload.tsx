import React, { useRef, useEffect } from "react";
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import "./style.sass";

gsap.registerPlugin(TextPlugin);

export default function Preload(): JSX.Element {

  const zicon = useRef(null)

  useEffect(() => {

    window.scrollTo(0, 0);

    window.history.scrollRestoration = "manual";

    let preloadElement = document.querySelector('.preload');

    document.body.classList.add('preload-active')

    const text = gsap.timeline({
      delay: 0,
    });

    text.to("#text-1", { text: "A Bold", duration: 0.25, delay: 0, ease: "none" });
    text.to("#text-2", { text: "New Vision", duration: 0.25, delay: 0.5, ease: "none" })

    const underLine = gsap.timeline({
      delay: 0,
    });
    underLine.to("#underline-1", { width: "100%", duration: 0.5, delay: 0.35, ease: "none" });
    underLine.to("#underline-2", { width: "100%", duration: 0.5, delay: 0.25, ease: "none" });

    const tl = gsap.timeline({});

    tl.to(".textZ", { duration: 1, x: "-86vw", y: "-64vh" })
    tl.to(".textZ", { duration: 1, x: "-44vw", y: "-64vh" })
    tl.to(".textZ", { duration: 1, x: "-72vw", y: "-40vh" })
    tl.to(".textZ", { duration: 1, x: "-50vw", fontSize: "500vw" })

    let icon = zicon.current
    const tl2 = gsap.timeline({
      repeat: -1,
      yoyo: true,
      paused: true
    })

    tl2.fromTo(icon, { y: 100, x: -10 }, { y: 200, x: -10, duration: 2 })
    tl2.to(icon, { y: 420, x: -50, duration: 2 })
    tl2.to(icon, { y: 600, x: 10, duration: 2 })
    tl2.to(icon, { y: 700, x: -10, duration: 2 })
    tl2.to(icon, { y: 600, duration: 2 })
    tl2.to(icon, { y: 420, x: -50, duration: 2 })
    tl2.to(icon, { y: 420, x: -40, duration: 2 })
    tl2.to(icon, { y: 220, x: 10, duration: 2 })
    tl2.to(icon, { y: 0, x: 0, duration: 4 })

    const textZ = gsap.timeline({
      onComplete: () => {
        document.body.classList.remove('preload-active')
        preloadElement.classList.remove('loading')
        document.querySelector('.icon-z').classList.add('active')
        tl2.play()
      }
    });

    textZ.to(".textZ", { duration: 0.175, text: "&#xe900;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe901;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe902;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe904;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe905;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe906;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe907;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe909;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe90b;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe90c;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe90d;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe90e;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe90f;" })
    textZ.to(".textZ", { duration: 0.175, text: "&#xe910;" })
    textZ.to(".textZ", { duration: 0.15, text: "&#xe911;" })
    textZ.to(".textZ", { duration: 0.15, text: "&#xe912;" })
    textZ.to(".textZ", { duration: 0.15, text: "&#xe913;" })
    textZ.to(".textZ", { duration: 0.15, text: "&#xe914;" })
    textZ.to(".textZ", { duration: 0.15, text: "&#xe90f;" })


  }, []);

  return (
    <>
      <div className="preload-elements" >
        <div className="preload-images">
          <img id="preload-image-1" className="preload-image animated animatedFadeInUp fadeInUp-1" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/svg-shape-back.svg" />
          <img id="preload-image-2" className="preload-image animated animatedFadeInUp fadeInUp-2" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/pexels-helena-lopes-1015568-scaled.jpg" />
          <img id="preload-image-3" className="preload-image animated animatedFadeInUp fadeInUp-3" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/image-2.png" />
          <img id="preload-image-4" className="preload-image animated animatedFadeInUp fadeInUp-4" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/svg-khung-luoi.svg" />
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
      <div className="icon-z"  >
        <svg ref={zicon} xmlns="http://www.w3.org/2000/svg" width="60" height="73" viewBox="0 0 118 136" fill="none">
          <path d="M0.564941 0.181519V13.6738H82.2601L0.564941 60.8401V135.105H117.414V121.557H35.7185L117.414 74.3896V0.181519H0.564941Z" fill="#0068FF" />
        </svg>
      </div>
    </>

  );
};