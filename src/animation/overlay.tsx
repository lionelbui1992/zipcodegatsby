import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export const handleOverlayAnimation = () => {
    const absoluteSections = document.querySelectorAll('.scroll-section .relative-section');
    const totalHeight = [...absoluteSections].reduce((acc, section) => {
        section.classList.replace('relative-section', 'absolute-section'); // Replace class
        return acc + section.offsetHeight;
    }, 0);


    document.querySelector('.pinning-2').style.height = (totalHeight) + 'px';

    ScrollTrigger.create({
        trigger: ".pinning-1",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001,
        onUpdate: (self) => {
            if (document.querySelector('.item-2')) {
                document.querySelector('.item-2').style.opacity = '0';
            }
        }
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".pinning-2",
            start: "top top",
            end: screen.width < 767 ? "bottom top" : totalHeight,
            pin: true,
            pinSpacing: false,
            scrub: 0.000001,
            markers: false,
            onUpdate: (self) => {
                if (document.querySelector('.item-2')) {
                    document.querySelector('.item-2').style.opacity = '1';
                }
            },
        },
        ease: "none",
        smoothChildTiming: true
    });


    let imgFrom = screen.width > 500 ? 800 : 400


    // tl.to(".item-1", { yPercent: 0, duration: 1 })
    tl.fromTo(".item-1", { yPercent: 0 }, { yPercent: -100, duration: 4 })
    tl.fromTo(".c-image", {
        y: imgFrom
    }, { y: -800, duration: 2 })
    tl.to(".item-2", { yPercent: -100, duration: 2 })
}


export const handleGeneralOverlayAnimation = () => {
    gsap.utils.toArray('.overlay-animation').forEach((section) => {
        console.log(section)
        console.log(section.offsetHeight)
        console.log("----------------")
        let check = section.offsetHeight > window.innerHeight ? true : false;
        ScrollTrigger.create({
            trigger: section,
            start: check ? "bottom bottom" : "top 100",
            end: check ? "+=100%" : "bottom top",
            pin: true,
            pinSpacing: false,
            markers: false,
            scrub: 0.000001,

        });
    })
}


