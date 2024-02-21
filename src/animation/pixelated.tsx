import React from 'react';
import { gsap } from 'gsap';

export const handleAddPixelateAnimation = () => {
    if (gsap.utils.toArray('.pixelate-container:not(.active-animation)').length > 0) {
        gsap.utils.toArray('.pixelate-container:not(.active-animation)').forEach((item) => {

            if (!item.classList.contains('active-animation')) {
                let offset = item.getBoundingClientRect().y
                if (offset < innerHeight - 100) {
                    // tl1.play()
                    const animate = gsap.timeline({
                        repeat: 0,
                        onComplete: () => {
                            // item.classList.remove('active-animation')
                            item.nextElementSibling.classList.add('active')
                        }
                    });
                    let cells = item.querySelectorAll('.cell');
                    let axis = item.getAttribute("data-axis") ?? false,
                        from = item.getAttribute("data-from") ?? "random",
                        duration = item.getAttribute("data-duration") ?? .5,
                        amount = item.getAttribute("data-amount") ?? 1;

                    axis = axis === "0" ? false : axis;

                    animate.from(cells, {
                        duration: duration,
                        scale: 0,
                        y: 0,
                        repeat: 0,
                        ease: "none",
                        stagger: {
                            amount: amount,
                            axis: axis,
                            from: from,
                            grid: "auto"
                        }
                    });
                    item.classList.add('active-animation');
                }
            }
        })
    }
}

