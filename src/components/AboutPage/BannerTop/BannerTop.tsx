import React, { useEffect } from "react";
import "./styles.sass";

export const BannerTop = (): JSX.Element => {
    useEffect(() => {
        const ttContent: HTMLElement | null = document.querySelector("content-tooltip");
        const ttImages: NodeListOf<Element> = document.querySelectorAll('.tt-image');

        ttImages.forEach((ttImage: Element) => {
            ttImage.addEventListener('mouseover', () => {
                console.log(ttImage);
                ttImage.classList.add('active');
                ttContent?.classList.add('tooltip-active');
                const ttImageTop: number = ttImage.offsetTop;
                ttImage?.style.setProperty('--offsetTop', `${ttImageTop}px`);
            })            
            ttImage.addEventListener('mouseleave', () => {
                ttImage.classList.remove('active');
                ttContent?.classList.remove('tooltip-active');
            })
        });
    })
    return (
        <>
            <div className="container">
                <div className="section-content">
                    <h1>Perspective. Passion. Precision.</h1>
                    <div className="content">
                        <div className="content-tooltip">
                            We are putting back the real in <span className="tt-image"> real estate
                                <img loading="lazy" srcSet="/about/about-tooltip-image-5.jpg" alt="" />
                            </span>, 
                            with varied <span className="tt-image">perspectives
                                <img loading="lazy" srcSet="/about/about-tooltip-image-1.jpg" alt="" />
                            </span> and the <span className="tt-image">uncommon
                                <img loading="lazy" srcSet="/about/about-tooltip-image-2.jpg" alt="" />
                            </span> ability to see the <span className="tt-image">human
                                <img loading="lazy" srcSet="/about/about-tooltip-image-3.jpg" alt="" />
                            </span> element in steel, glass, and concrete. We strive to develop category-challenging projects where creative programming and <span className="tt-image">efficient designs
                                <img loading="lazy" srcSet="/about/about-tooltip-image-4.jpg" alt="" />
                            </span> combine to create something unique and enduring.
                        </div>                      
                    </div>
                </div>
            </div>
        </>
    );
}
export default BannerTop;