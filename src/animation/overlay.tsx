import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger)


export const handleOverlayAnimation = () => {

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
        trigger: ".pinning-3",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001,
        id: "pinning-3"
    })

    // let tl = gsap.timeline()
    // tl.to({}, { duration: 1 })
    // tl.to('.c-wrapper', { y: -1000 })

    // ScrollTrigger.create({
    //     trigger: ".item-2.section--pinning-company",
    //     start: "top top",
    //     end: "+=180%",
    //     pin: true,
    //     pinSpacing: false,
    //     markers: false,
    //     scrub: 0.000001,
    //     id: "pinning-company",
    //     animation: tl
    // })

    ScrollTrigger.create({
        trigger: ".item-3.section--pinning-explore",
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
        markers: false,
        id: "explore",
        scrub: 0.000001,
        onUpdate: (t) => {
            let progress = t.progress
            let pixelateImageLeft = document.querySelector('.section-explore .col-left  .pixelate-container');
            let pixelateImageRight = document.querySelector('.section-explore .col-right .pixelate-container');
            if (pixelateImageLeft && pixelateImageLeft.animation) {
                if (progress < 0.5) {
                    pixelateImageLeft.animation.seek(0);
                    pixelateImageLeft.animation.pause();
                    pixelateImageLeft.nextElementSibling.classList.remove('active')
                }

                if (progress > 0.7) {
                    pixelateImageLeft.animation.play()
                }
            }
            if (pixelateImageRight && pixelateImageRight.animation) {
                if (progress < 0.5) {
                    pixelateImageRight.animation.seek(0);
                    pixelateImageRight.animation.pause();
                    pixelateImageRight.nextElementSibling.classList.remove('active')
                }

                if (progress > 0.7) {
                    pixelateImageRight.animation.play()
                }
            }
        }
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


