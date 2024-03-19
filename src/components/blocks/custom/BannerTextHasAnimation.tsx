import React, { useEffect } from "react";
import "./banner-top.sass";
import { IBannerTextHasAnimationProps } from "../types";
import { debug } from "console";

export const BannerTextHasAnimation = ({blockName, attributes} : {blockName: string, attributes: IBannerTextHasAnimationProps}): JSX.Element => {
    const { label, texts } = attributes;
    useEffect(() => {
        ttImagesTooltip();
        ttImagesPosition();
        window.addEventListener('resize', function(event) {
            ttImagesTooltip();
            ttImagesPosition();            
        }, true);
    })

    const ttImagesTooltip = function() {
        const ttContent = document.querySelector(".content-tooltip");
        const ttImages = document.querySelectorAll('.tt-image');
        const ttContentHeight = ttContent?.offsetHeight;
        ttImages.forEach((ttImage) => {
            const ttImageTop = ttImage.offsetTop;
            const ttImageBottom = ttContentHeight - ttImageTop;
            ttImage?.style.setProperty('--offsetTop', `${ttImageTop}px`);
            ttImage?.style.setProperty('--offsetBottom', `${ttImageBottom}px`);
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
                document.querySelectorAll('.tt-image').forEach(function(image) {
                    image.classList.remove('active');
                });
                ttImage.classList.remove('active');
                ttContent?.classList.remove('tooltip-active');
            })
        });
    }
    const ttImagesPosition = function() {
        const wrapper = document.querySelector('.content-tooltip');
        if (null !== wrapper) {
            const computedStyle = window.getComputedStyle(wrapper);
            const lineHeight = parseFloat(computedStyle.lineHeight);
            const totalLine =  wrapper.getBoundingClientRect().height / lineHeight
            wrapper.querySelectorAll('.tt-image').forEach(function(spanElement) {
                const rect = spanElement.getBoundingClientRect();   
                const lineNumber = Math.ceil((rect.top - wrapper.getBoundingClientRect().top) / lineHeight);
                if (lineNumber > Math.ceil(totalLine / 2)) {
                    spanElement.classList.add('position-top');
                } else {
                    spanElement.classList.remove('position-top');
                }
            });
        }
    }

    return (
        <div className="container">
            <div className="section-content">
                <h1 dangerouslySetInnerHTML={{__html: label}} />
                <div className="content">
                    <div className="content-tooltip" onLoad={ttImagesPosition}>
                        {texts.map((text, index) => {
                            return (
                                text.text && (
                                    text.image ? 
                                        <><span className={`tt-image`} key={index}>{text.text}<img loading="lazy" srcSet={text.image.src} alt="" /></span> </>
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
