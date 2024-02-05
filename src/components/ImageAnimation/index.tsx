import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import './style.sass';
export const ImageAnimation = (props): JSX.Element => {

    const { src, alt, width, height, axis, from, duration } = props;
    const image = useRef(null);
    const mainImage = useRef(null);
    const col = 12;
    const row = 12;

    useEffect(() => {
        const canvas = image.current;
        const mainImg = mainImage.current;

        if (!mainImg) return;

        const colWidth = mainImg.offsetWidth / col;
        const rowHeight = mainImg.offsetHeight / row;

        // Loop through the cells
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                // Create new cell
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style.width = colWidth + 'px';
                cell.style.height = rowHeight + 'px';

                // Create front side of the cell
                const front = document.createElement('div');
                front.classList.add('front');
                front.style.backgroundImage = `url(${src})`;
                front.style.backgroundSize = `${mainImg.offsetWidth}px ${mainImg.offsetHeight}px`;
                front.style.backgroundPosition = -(j * colWidth) + 'px ' + -(i * rowHeight) + 'px';
                // Append front side to the cell
                cell.appendChild(front);
                // Append cell to the canvas
                canvas.appendChild(cell);
            }
        }

        // const tl = gsap.timeline({
        //     repeat: 0, repeatDelay: 0.5
        // });

        // const cells = canvas.querySelectorAll('.cell');
        // tl.from(cells, {
        //     duration: duration ?? .5,
        //     scale: 0,
        //     y: 40,
        //     repeat: 0,
        //     ease: "none",
        //     stagger: {
        //         amount: 1,
        //         axis: axis ?? false,
        //         from: from ?? 'random',
        //         grid: "auto"
        //     }
        // });
        // ScrollTrigger.create({
        //     trigger: canvas,
        //     start: "top center",
        //     animation: tl,
        //     markers: true
        // })
    }, [src])

    return (
        <div className="animation-image">
            <div className="pixelate-container" ref={image}></div>
            <img src={src} alt={alt} width={"100%"} ref={mainImage} />
        </div>
    );
};