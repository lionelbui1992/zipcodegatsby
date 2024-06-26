import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger)


export const handleOverlayAnimation = () => {


    let isMb = window.innerWidth < 768 ? true : false

    ScrollTrigger.create({
        trigger: ".pinning-1",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001,
        id: "pinning-1"
    })

    ScrollTrigger.create({
        trigger: ".pinning-2",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001,
        id: "pinning-2"
    })

    ScrollTrigger.create({
        trigger: ".item-1.section--pinning-company",
        start: "top top",
        end: isMb ? "+=300%" : "+=320%",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001,
        id: "pinning-company",
        // animation: tl
    })

}


export const handleGeneralOverlayAnimation = () => {
    gsap.utils.toArray('.overlay-animation').forEach((section) => {
        let check = section.offsetHeight > window.innerHeight ? true : false
        ScrollTrigger.create({
            trigger: section,
            start: check ? "bottom bottom" : "top top",
            end: check ? "+=80%" : "bottom 0",
            pin: true,
            pinSpacing: false,
            markers: false,
            scrub: 0.000000001,
            onUpdate: (self) => {
                if (self.progress >= 0.2 && !section.classList.contains('halfway')) {
                    section.classList.add('halfway');
                } else if (self.progress < 0.2 && section.classList.contains('halfway')) {
                    section.classList.remove('halfway');
                }

                if (self.progress < 0.9 && section.classList.contains('animation-end')) {
                    section.classList.remove('animation-end');
                } else if (self.progress >= 0.9 && !section.classList.contains('animation-end')) {
                    section.classList.add('animation-end');
                }

            }
        })
    })

    gsap.utils.toArray('.about-page .text-center-with-link').forEach((section) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "+=180%",
            pin: true,
            pinSpacing: false,
            markers: false,
            scrub: 0.000000001,
        })
    })
}




export const handleCareerOverlayAnimation = () => {

    ScrollTrigger.create({
        trigger: ".pinning-1",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001,
        id: "pinning-1"
    })

    ScrollTrigger.create({
        trigger: ".pinning-3",
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001
    })

    ScrollTrigger.create({
        trigger: ".pinning-5",
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001
    })

    ScrollTrigger.create({
        trigger: ".pinning-7",
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001
    })
}



export const handleCmsOverlayAnimation = () => {
    ScrollTrigger.create({
        trigger: ".cms-page .section-banner",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001,
        id: "pinning-1"
    })

    console.log('cms animation')
}
export const handlePhilosophyOverlayAnimation = () => {

    ScrollTrigger.create({
        trigger: ".pinning-1",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001,
        id: "pinning-1"
    })

    ScrollTrigger.create({
        trigger: ".pinning-3",
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001
    })

    ScrollTrigger.create({
        trigger: ".pinning-5",
        start: "top top",
        end: "+=180%",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001
    })

}
