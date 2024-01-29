import React, { useEffect } from "react";
import "./styles.sass";

export const BannerTop = (): JSX.Element => {
    useEffect(() => {
        const toolTip: HTMLElement | null = document.getElementById("tooltip");
        const contentToolTip: HTMLElement | null = document.getElementById("content-tooltip");
        const ttImages: HTMLCollectionOf<Element> = document.getElementsByClassName("tt-image");

        const track = (event: MouseEvent): void => {
            const mouseX: number = event.clientX + document.body.scrollLeft + 1;
            const mouseY: number = event.clientY + document.body.scrollTop - 40;
            if (toolTip) {
                toolTip.setAttribute("style", `top:${mouseY}px; left:${mouseX}px;`);
            }
        };

        window.addEventListener("mousemove", track);

        const showTt = (e: MouseEvent): void => {
            if (e.target instanceof HTMLSpanElement) {
                if (toolTip) {
                    toolTip.setAttribute("class", "show");
                    const ttImage: string | undefined = e.target.dataset.img;
                    if (ttImage) {
                        toolTip.innerHTML = `<img src="${ttImage}">`;
                    }
                    e.target.classList.add("active");
                }

                if (contentToolTip) {
                    contentToolTip.setAttribute("class", "tooltip-active");
                }
            } else {
                if (toolTip) {
                    toolTip.setAttribute("class", "");
                }
                
                if (contentToolTip) {
                    contentToolTip.setAttribute("class", "");
                }
            }
        };

        if (contentToolTip) {
            contentToolTip.addEventListener("mouseover", showTt);
        }

        let allCities: string[] = [];
        let cities: HTMLImageElement[] = [];

        for (let i = 0; i < ttImages.length; i++) {
            const ttImage: string | undefined = ttImages[i].dataset.img;
            if (ttImage) {
                allCities.push(ttImage);
            }
        }

        for (let i = 0; i < allCities.length; i++) {
            cities[i] = new Image();
            cities[i].src = allCities[i];
        }
    })
    return (
        <>
            <div className="container">
                <div className="section-content">
                    <h1>Perspective. Passion. Precision.</h1>
                    <div className="content">
                        <div id="content-tooltip">
                            We are putting back the real in <span className="tt-image" data-img="/about/about-tooltip-image-5.jpg">real estate</span>, with varied <span className="tt-image" data-img="/about/about-tooltip-image-1.jpg">perspectives</span> and the <span className="tt-image" data-img="/about/about-tooltip-image-2.jpg">uncommon</span> ability to see the <span className="tt-image" data-img="/about/about-tooltip-image-1.jpg">human</span> element in steel, glass, and concrete. We strive to develop category-challenging projects where creative programming and <span className="tt-image" data-img="/about/about-tooltip-image-4.jpg">efficient designs</span> combine to create something unique and enduring.
                        </div>
                        <div id="tooltip"></div>                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default BannerTop;