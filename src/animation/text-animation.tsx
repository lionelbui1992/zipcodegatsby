import React from "react"
import gsap from "gsap"
export const handleTextAnimation = () => {
    if (gsap.utils.toArray('.text-animation').length > 0) {
        gsap.utils.toArray('.text-animation').forEach((item) => {
            if (!item.classList.contains('active-animation')) {
                let offset = item.getBoundingClientRect().y
                let dir = item.getAttribute('data-dir') ?? 'ltr'


                if (offset < innerHeight - 100) {
                    // tl1.play()
                    const animate = gsap.timeline({ repeat: -1 });
                    let cells = item.querySelectorAll('p');

                    if (cells.length > 0) {
                        cells.forEach((cell, index) => {
                            gsap.fromTo(cell, {
                                x: dir === 'ltr' ? -50 : 50,
                                opacity: 0,
                            },
                                {
                                    x: 0,
                                    duration: .6,
                                    opacity: 1,
                                    ease: "none",
                                    delay: 0.08 * index
                                });
                        });
                    }

                    item.classList.add('active-animation');
                }
            }
        })
    }
}