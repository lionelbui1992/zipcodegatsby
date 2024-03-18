import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


import './style.sass'
export const ImageAnimation = (props): JSX.Element => {

    const { src, alt, classes, from, axis, duration, amount } = props
    const image = useRef(null)
    const mainImage = useRef(null);


    useEffect(() => {
        const col = screen.width < 768 ? 8 : 12;
        const row = screen.width < 768 ? 8 : 12;
        const canvas = image.current;
        const mainImg = mainImage.current;

        if (!mainImg) return;

        setTimeout(() => {
            const colWidth = 100 / col;
            const rowHeight = 100 / row;

            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.style.width = colWidth + '%';
                    cell.style.height = rowHeight + '%';
                    const front = document.createElement('div');
                    front.classList.add('front');
                    front.style.backgroundImage = `url(${src})`;
                    front.style.backgroundSize = `${mainImg.offsetWidth}px ${mainImg.offsetHeight}px`;
                    front.style.backgroundPosition = (100 / (col - 1) * j) + '% ' + (100 / (row - 1) * i) + '%';

                    cell.appendChild(front);
                    canvas.appendChild(cell);

                }
            }
        }, 500)

        setTimeout(() => {
            const animation = gsap.timeline({
                repeat: 0,
                onComplete: () => {
                    // item.classList.remove('active-animation')
                    canvas.nextElementSibling.classList.add('active')
                }
            });
            let cells = canvas.querySelectorAll('.cell');
            let axis = canvas.getAttribute("data-axis") ?? false,
                from = canvas.getAttribute("data-from") ?? "random",
                duration = canvas.getAttribute("data-duration") ?? .5,
                amount = canvas.getAttribute("data-amount") ?? 1;

            axis = axis === "0" ? false : axis;

            animation.from(cells, {
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
            animation.pause()
            canvas.classList.add('active-animation')
            canvas.animation = animation
        }, 1000)

    }, [src])

    return (
        <div className={"animation-image " + classes} >
            <div className="pixelate-container" data-amount={amount} data-from={from ?? "random"} data-axis={axis ?? "0"} data-duration={duration ?? "0.5"} ref={image}></div>
            <img src={src} alt={alt} width={"100%"} ref={mainImage} />
        </div>
    )
}