import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IImage } from "./blocks/types";

interface IBannerPoupProps {
    background: string;
    content: {
        small_text: string;
        line: {
            text: string;
            image: IImage;
        }[];
        popup_description: string;
        popup_slider: {
            image: IImage;
            text: string;
        }[];
    }[];
}

export const BannerPoup = (attributes: IBannerPoupProps): JSX.Element => {
    const { background, content } = attributes;

    const [openPopUp, setOpenPopUp] = useState(false);

    const popupOverlay = async () => {
        setOpenPopUp(false);
        document.querySelector('html')?.classList.remove('active-overlay');
        const popupItems: HTMLElement[] = Array.from(document.querySelectorAll(".projects-popup-item"));
        popupItems.forEach((item: HTMLElement) => {
            item?.classList.remove('active-popup');
        });
        const popupItemsContent: HTMLElement[] = Array.from(document.querySelectorAll(".projects-popup"));
        popupItemsContent.forEach((item: HTMLElement) => {
            item?.classList.remove('active-popup');
        });
    }

    return (
        <>
            {(content) &&
                <div className="projects-popup-main">
                    {
                        content.map((list, index) =>
                            <div className={`projects-popup projects-popup-${index}`} id={`projects-popup-${index}`}>
                                <div className="poup-overlay" onClick={() => popupOverlay()}></div>
                                <div className="projects-popup-container" style={{ backgroundImage: "url(" + background + ")" }}>
                                    <div className="container">
                                        <button className="projects-popup-close" onClick={() => popupOverlay()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 0.688749 -0.724999 0.688749 1.54163 1.86035)" stroke="#C4F000" strokeWidth="2.13437" />
                                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 -0.688749 0.724999 0.688749 1.54163 28.8958)" stroke="#C4F000" strokeWidth="2.13437" />
                                            </svg>
                                        </button>
                                        <div className="popup-heading">
                                            {(list.small_text || list.popup_description) &&
                                                <div className="heading">
                                                    {(list.small_text) &&
                                                        <h4 dangerouslySetInnerHTML={{
                                                            __html: list.line.reduce((p, c) => {
                                                                return p + c.text + " ";
                                                            }, '')
                                                        }} />
                                                    }
                                                    {(list.popup_description) &&
                                                        <div className="subheading" dangerouslySetInnerHTML={{ __html: list.popup_description }} />
                                                    }
                                                </div>
                                            }
                                            <div className="popup-galleries">
                                                <Swiper
                                                    modules={[Navigation]}
                                                    spaceBetween={20}
                                                    breakpoints={{
                                                        0: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 18,
                                                        },
                                                        767: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 18,
                                                        },
                                                        768: {
                                                            slidesPerView: 'auto',
                                                            spaceBetween: 18,
                                                        },
                                                        1199: {
                                                            slidesPerView: 'auto',
                                                            spaceBetween: 18,
                                                        },
                                                        1200: {
                                                            slidesPerView: 'auto',
                                                            spaceBetween: 18,
                                                        }
                                                    }}
                                                    navigation
                                                >
                                                    {list.popup_slider.map((item, itemIndex) => (
                                                        <SwiperSlide>
                                                            {(item.image.src) &&
                                                                <div className="item-gallery" key={itemIndex}>
                                                                    <img
                                                                        loading="lazy"
                                                                        srcSet={`${item.image.src}`} className="img"
                                                                        alt={list.small_text}
                                                                    />
                                                                </div>
                                                            }
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </div>
                                        </div>
                                        <div className="popup-content">
                                            {list.popup_slider.map((item, itemIndex) => (
                                                (item.text) &&
                                                <div className="column" key={itemIndex} dangerouslySetInnerHTML={{ __html: item.text }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            }
        </>
    );
}

export default BannerPoup;