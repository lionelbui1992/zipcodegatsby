import React from 'react';
import { gsap } from 'gsap';
export const handlePreloadAnimation = () => {
    window.scrollTo(0, 0);

    window.history.scrollRestoration = "manual";

    let preloadElement = document.querySelector('.preload');

    document.body.classList.add('preload-active')

    const text = gsap.timeline({
        delay: 0,
    });

    text.to("#text-1", { text: "A Bold", duration: 0.25, delay: 0, ease: "none" });
    text.to("#text-2", { text: "New Vision", duration: 0.25, delay: 0.5, ease: "none" })

    const underLine = gsap.timeline({
        delay: 0,
    });
    underLine.to("#underline-1", { width: "100%", duration: 0.5, delay: 0.35, ease: "none" });
    underLine.to("#underline-2", { width: "100%", duration: 0.5, delay: 0.25, ease: "none" });

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var textZclipPath = document.getElementById("textZ");

    var setX = screenWidth + (screenWidth / 2);
    var setY = screenHeight + (screenHeight / 2);
    textZclipPath?.setAttribute("x", setX);
    textZclipPath?.setAttribute("y", setY);

    const tl = gsap.timeline({
        // repeat: -1,
        // yoyo: true,
    });

    setX = screenWidth / 8;
    setY = screenHeight / 5;
    tl.to(".textZ", { duration: 1, attr: { "x": setX, "y": setY }, transformOrigin: "50% center" });

    setX = screenWidth / 1.1;
    tl.to(".textZ", { duration: 1, attr: { "x": setX, "y": setY }, transformOrigin: "50% center" });

    setX = screenWidth / 3;
    setY = screenHeight / 2;
    tl.to(".textZ", { duration: 1, attr: { "x": setX, "y": setY }, transformOrigin: "50% center" });

    // tl.to(".textZ", { duration: 2, x: "-50vw", fontSize: "500vw" })
    tl.to(".textZ", { duration: 2, scale: 15, transformOrigin: "50% center" });

    let icon = document.querySelector('.icon-z svg')
    const tl2 = gsap.timeline({
        repeat: -1,
        yoyo: true,
        paused: true
    })

    tl2.fromTo(icon, { y: 100, x: -10 }, { y: 200, x: -10, duration: 2 })
    tl2.to(icon, { y: 420, x: -50, duration: 2 })
    tl2.to(icon, { y: 600, x: 10, duration: 2 })
    tl2.to(icon, { y: 700, x: -10, duration: 2 })
    tl2.to(icon, { y: 600, duration: 2 })
    tl2.to(icon, { y: 420, x: -50, duration: 2 })
    tl2.to(icon, { y: 420, x: -40, duration: 2 })
    tl2.to(icon, { y: 220, x: 10, duration: 2 })
    tl2.to(icon, { y: 0, x: 0, duration: 4 })

    const textZ = gsap.timeline({
        // repeat: -1,
        // yoyo: true,
        onComplete: () => {
            document.body.classList.remove('preload-active')
            preloadElement.classList.remove('loading')
            document.querySelector('.icon-z').classList.add('active')
            tl2.play()
        }
    });

    textZ.to(".textZ", { duration: 0.25, attr: { "xlink:href": "#textZa" } })
    textZ.to(".textZ", { duration: 0.25, attr: { "xlink:href": "#textZb" } })
    textZ.to(".textZ", { duration: 0.25, attr: { "xlink:href": "#textZc" } })
    textZ.to(".textZ", { duration: 0.25, attr: { "xlink:href": "#textZd" } })
    textZ.to(".textZ", { duration: 0.25, attr: { "xlink:href": "#textZe" } })
    textZ.to(".textZ", { duration: 0.25, attr: { "xlink:href": "#textZf" } })
    // textZ.to(".textZ", { duration: 0.175, attr: { "xlink:href": "#textZg" } })
    textZ.to(".textZ", { duration: 0.25, attr: { "xlink:href": "#textZh" } })
    textZ.to(".textZ", { duration: 0.25, attr: { "xlink:href": "#textZi" } })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZk" } })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZl" } })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZm" } })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZn" } })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZo" } })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZp" } })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZq" } })
    // textZ.to(".textZ", { duration: 0.175, attr: { "xlink:href": "#textZr" } })
}