import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import './style.sass';
export const ImageAnimation = (props): JSX.Element => {

    const { src, alt, classes, from, axis, duration, amount } = props;
    const image = useRef(null);
    const mainImage = useRef(null);
    const col = 12;
    const row = 12;

    useEffect(() => {
        const canvas = image.current;
        const mainImg = mainImage.current;
        console.log(['mainImg', mainImg])
        if (!mainImg) return;

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

    }, [src])

    return (
        <div className={"animation-image " + classes} >
            <div className="pixelate-container" data-amount={amount} data-from={from ?? "random"} data-axis={axis ?? "0"} data-duration={duration ?? "0.5"} ref={image}></div>
            <img src={src} alt={alt} width={"100%"} ref={mainImage} />
        </div>
    );
};