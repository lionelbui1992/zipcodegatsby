import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IImage } from "./blocks/types";
import { Scrollbar } from 'react-scrollbars-custom';

interface IBannerPoupProps {
    background: string;
    content: {
        publish_project: string;
        coming_soon: string;
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
                            <div className={`projects-popup projects-popup-${index}`} id={`projects-popup-${index}`} key={index}>
                                <div className="poup-overlay" onClick={() => popupOverlay()}></div>
                                <div className={`projects-popup-container${list.publish_project == '1' ? '' : ' projects-popup-coming-soon'}`} style={{ backgroundImage: "url(" + background + ")" }}>
                                    <div className="container">  
                                        <button className="projects-popup-close" onClick={() => popupOverlay()}>
                                            <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 0.688749 -0.724999 0.688749 2 2)" stroke="#C4F000" strokeWidth="2.13437"/>
                                                <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 -0.688749 0.724999 0.688749 2 29.0352)" stroke="#C4F000" strokeWidth="2.13437"/>
                                            </svg>
                                        </button>                                                                            
                                        {list.publish_project == '1'
                                            ?
                                                <Scrollbar>
                                                    <div className="projects-popup-main">   
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
                                                                            slidesPerView: 2,
                                                                            spaceBetween: 16,
                                                                            loop: true,
                                                                        },
                                                                        767: {
                                                                            slidesPerView: 2,
                                                                            spaceBetween: 16,
                                                                            loop: true,
                                                                        },
                                                                        768: {
                                                                            slidesPerView: 'auto',
                                                                            spaceBetween: 16,
                                                                            loop: true,
                                                                        },
                                                                        1199: {
                                                                            slidesPerView: 'auto',
                                                                            spaceBetween: 16,
                                                                            loop: true,
                                                                        },
                                                                        1200: {
                                                                            slidesPerView: 'auto',
                                                                            spaceBetween: 16,
                                                                            loop: true,
                                                                        }
                                                                    }}
                                                                    navigation
                                                                >
                                                                    {list.popup_slider.map((item, itemIndex) => (
                                                                        <SwiperSlide key={itemIndex}>
                                                                            {(item.image.src) &&
                                                                                <div className="item-gallery">
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
                                                                (itemIndex === 0) && (
                                                                    <div className="column content-column-title" key={itemIndex} dangerouslySetInnerHTML={{ __html: item.text }} />
                                                                )                                                
                                                            ))}
                                                            <div className="column content-column-description">
                                                                {list.popup_slider.map((item, itemIndex) => (
                                                                    (itemIndex > 0) && (
                                                                        <div className="column-inner" key={itemIndex} dangerouslySetInnerHTML={{ __html: item.text }} />
                                                                    )  
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Scrollbar>
                                            :
                                                <div className="projects-popup-main projects-popup-main-soon">   
                                                    <h4 dangerouslySetInnerHTML={{ __html: list.coming_soon }} />
                                                </div>
                                        }
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