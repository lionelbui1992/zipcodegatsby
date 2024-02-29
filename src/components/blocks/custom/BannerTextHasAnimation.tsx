import React, { useEffect } from "react";
import "./banner-top.sass";
import { IBannerTextHasAnimationProps } from "../types";

export const BannerTextHasAnimation = ({blockName, attributes} : {blockName: string, attributes: IBannerTextHasAnimationProps}): JSX.Element => {
    const { label, texts } = attributes;
    useEffect(() => {
        const ttContent: HTMLElement | null = document.querySelector(".content-tooltip");
        const ttImages: NodeListOf<HTMLElement> = document.querySelectorAll('.tt-image');

        function ttImagesTooltip() {
            ttImages.forEach((ttImage: HTMLElement) => {
                const ttImageTop: number = ttImage.offsetTop;
                ttImage?.style.setProperty('--offsetTop', `${ttImageTop}px`);
                if (window.innerWidth > 768) {
                    ttImage.addEventListener('mouseover', () => {
                        ttImage.classList.add('active');
                        ttContent?.classList.add('tooltip-active');
                    }) 
                }  else {
                    ttImage.addEventListener('click', () => {
                        ttImage.classList.toggle("active");
                        ttContent?.classList.toggle('tooltip-active');
                    }) 
                }         
                ttImage.addEventListener('mouseleave', () => {
                    ttImage.classList.remove('active');
                    ttContent?.classList.remove('tooltip-active');
                })
            });
        }
        ttImagesTooltip();
        window.addEventListener('resize', function(event) {
            ttImagesTooltip();
        }, true);
    })

    return (
        <div className="container">
            <div className="section-content">
                <h1 dangerouslySetInnerHTML={{__html: label}} />
                <div className="content">
                    <div className="content-tooltip">
                        {texts.map((text, index) => {
                            return (
                                text.text && (
                                    text.image ? 
                                        <><span className="tt-image" key={index}>{text.text}<img loading="lazy" srcSet={text.image.src} alt="" /></span> </>
                                    :
                                        <>{text.text} </>
                                )
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerTextHasAnimation;
