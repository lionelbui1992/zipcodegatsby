import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger);


export const handleOverlayAnimation = () => {

    ScrollTrigger.create({
        trigger: ".pinning-1",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001
    });


    ScrollTrigger.create({
        trigger: ".c-wrapper",
        start: "top top",
        end: "bottom bottom",
        pin: false,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001
    });

}


export const handleGeneralOverlayAnimation = () => {
    gsap.utils.toArray('.overlay-animation').forEach((section) => {
        let check = section.offsetHeight > window.innerHeight ? true : false;
        ScrollTrigger.create({
            trigger: section,
            start: check ? "bottom bottom" : "top top",
            end: check ? "+=80%" : "bottom top",
            pin: true,
            pinSpacing: false,
            markers: false,
            scrub: 0.000000001,

        });
    })
}


