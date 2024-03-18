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
        scrub: 0.000001
    })

    let tl = gsap.timeline()
    tl.to({}, { duration: 1 })
    tl.to('.c-wrapper', { y: -1000 })

    ScrollTrigger.create({
        trigger: ".item-2.section--pinning-company",
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 0.000001,
        id: "pinning-company",
        animation: tl
    })

    ScrollTrigger.create({
        trigger: ".item-3.section--pinning-explore",
        start: "top top",
        end: "+=170%",
        pin: true,
        pinSpacing: false,
        markers: false,
        id: "explore",
        scrub: 0.000001,
        onUpdate: (t) => {
            let progress = t.progress
            let pixelateImage = document.querySelector('.section-explore .animation-image.stop .pixelate-container');
            if (pixelateImage && pixelateImage.animation) {
                if (progress < 0.5) {
                    pixelateImage.animation.seek(0);
                    pixelateImage.animation.pause();
                    pixelateImage.nextElementSibling.classList.remove('active')
                }

                if (progress > 0.7) {
                    pixelateImage.animation.play()
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

        })
    })
}


