import React, { useEffect } from "react";
import "./banner-top.sass";
import { IBannerTextHasAnimationProps } from "../types";

export const BannerTextHasAnimation = ({blockName, attributes} : {blockName: string, attributes: IBannerTextHasAnimationProps}): JSX.Element => {
    const { label, texts } = attributes;
    useEffect(() => {
        const ttContent: HTMLElement | null = document.querySelector(".content-tooltip");
        const ttImages: NodeListOf<Element> = document.querySelectorAll('.tt-image');

        ttImages.forEach((ttImage: Element) => {
            ttImage.addEventListener('mouseover', () => {
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
