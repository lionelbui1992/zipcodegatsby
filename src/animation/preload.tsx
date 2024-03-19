import React from 'react';
import { gsap } from 'gsap';
import { handleAddPixelateAnimation, handleGeneralOverlayAnimation, handleTextAnimation } from './index'

export const handlePreloadAnimation = () => {


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

    if (screenWidth < 768) {
        tl.set(".clippath-Z", { scale: 0.35, transformOrigin: 'center center' });
        setX = -100;
        setY = 0;
        tl.to(".textZ", { duration: 1, attr: { "x": setX, "y": setY } });

        setX = 80;
        tl.to(".textZ", { duration: 1, attr: { "x": setX, "y": setY } });

        setX = -70;
        setY = 200;
        tl.to(".textZ", { duration: 1, attr: { "x": setX, "y": setY } });

        tl.to(".clippath-Z", { duration: 2, scale: 50, transformOrigin: 'center center' });
    } else {
        tl.set(".clippath-Z", { scale: 0.85, transformOrigin: 'center center' });
        setX = screenWidth / 8;
        setY = screenHeight / 15;
        tl.to(".textZ", { duration: 1, attr: { "x": setX, "y": setY } });

        setX = screenWidth / 1.5;
        tl.to(".textZ", { duration: 1, attr: { "x": setX, "y": setY } });

        setX = screenWidth / 3;
        setY = screenHeight / 2;
        tl.to(".textZ", { duration: 1, attr: { "x": setX, "y": setY } });

        tl.to(".clippath-Z", { duration: 2, scale: 50, transformOrigin: 'center center' });
    }




    const textZ = gsap.timeline({
        // repeat: -1,
        // yoyo: true,
        onComplete: () => {
            document.body.classList.remove('preload-active')
            preloadElement?.classList.remove('loading')
            handleAddPixelateAnimation()
            handleTextAnimation()
            handleGeneralOverlayAnimation()
            setCookie("showPreload", "true", 30)
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
    textZ.to(".textZ", {
        duration: 0.2,
        attr: { "xlink:href": "#textZk" },

    })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZl" } })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZm" } })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZn" } })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZo" } })
    textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZp" } })
    // textZ.to(".textZ", { duration: 0.2, attr: { "xlink:href": "#textZq" } })
    // textZ.to(".textZ", { duration: 0.175, attr: { "xlink:href": "#textZr" } })
}



export const setCookie = (name, value) => {
    if (typeof document !== "undefined") {
        document.cookie = `${name}=${value};path=/`;
    }
};

export const getCookie = (name) => {
    if (typeof document === "undefined") {
        return null; // or a sensible fallback for your context
    }
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export const checkPreloadCookie = () => {
    if (typeof document === "undefined") {
        return false; // or a sensible fallback for your context
    }

    const showPreload = getCookie("showPreload");
    if (!showPreload) {
        // setCookie("showPreload", "true", 30);
        return false
    } else {
        return true
    }
}