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
        markers: true,
        scrub: 0.000001
    });

    // ScrollTrigger.create({
    //     trigger: ".section--pinning-company",
    //     start: "0%",
    //     end: "1000%",
    //     pin: true,
    //     pinSpacing: false,
    //     markers: true,
    //     scrub: 0.000001
    // });




    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".pinning-2",
    //         start: "top top",
    //         end: totalHeight,
    //         pin: true,
    //         pinSpacing: false,
    //         scrub: 0.0000011,
    //         markers: false,
    //         onUpdate: (self) => {
    //             if (document.querySelector('.item-2')) {
    //                 document.querySelector('.item-2').style.opacity = '1';
    //             }
    //         },
    //     },
    //     ease: "none",
    //     smoothChildTiming: true
    // });


    // let imgFrom = screen.width > 500 ? 200 : 400


    // // tl.to(".item-1", { yPercent: 0, duration: 1 })
    // tl.fromTo(".item-1", { yPercent: 0 }, { yPercent: -100, duration: 4 })
    // tl.fromTo(".c-image", {
    //     y: imgFrom
    // }, { y: -900, duration: 2 })
    // tl.to(".item-2", { yPercent: -100, duration: 2 })

}


export const handleGeneralOverlayAnimation = () => {
    gsap.utils.toArray('.overlay-animation').forEach((section) => {
        let check = section.offsetHeight > window.innerHeight ? true : false;
        ScrollTrigger.create({
            trigger: section,
            start: check ? "bottom bottom" : "top 100",
            end: check ? "+=150%" : "bottom top",
            pin: true,
            pinSpacing: false,
            markers: false,
            scrub: 0.000000001,

        });
    })
}


