import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface Props {
    ProjectBannerBkgPopup: string;
    ProjectBannerContent: any[];
}


export const BannerPoup = ({
    ProjectBannerBkgPopup,
    ProjectBannerContent
}: Props): JSX.Element => {
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
            { (ProjectBannerContent) &&
                <div className="projects-popup-main">
                    { ProjectBannerContent.map((list, index) =>                    
                        <div className={`projects-popup projects-popup-${index}`} id={`projects-popup-${index}`}>
                            <div className="poup-overlay" onClick={() => popupOverlay()}></div>
                            <div className="projects-popup-container" style={{backgroundImage: "url("+ProjectBannerBkgPopup+")"}}>
                                <div className="container">
                                    <button className="projects-popup-close" onClick={() => popupOverlay(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                                            <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 0.688749 -0.724999 0.688749 1.54163 1.86035)" stroke="#C4F000" strokeWidth="2.13437"/>
                                            <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 -0.688749 0.724999 0.688749 1.54163 28.8958)" stroke="#C4F000" strokeWidth="2.13437"/>
                                        </svg>
                                    </button>
                                    <div className="popup-heading">
                                        { (list.title || list.subtitle) && 
                                            <div className="heading">
                                                <h4 dangerouslySetInnerHTML={{__html: list.title}} />
                                                <div className="subheading">{list.subtitle}</div>
                                            </div>
                                        }
                                        <div className="popup-galleries">
                                            <Swiper                                
                                                modules={[Navigation]}
                                                spaceBetween={20}
                                                slidesPerView="auto"
                                                breakpoints={{
                                                    0: {
                                                        slidesPerView: 1,
                                                        spaceBetween: 100,
                                                    },
                                                    1199:{
                                                        slidesPerView: 1,
                                                        spaceBetween: 100,
                                                    },
                                                    1200: {
                                                        slidesPerView: "auto",
                                                        spaceBetween: 18,
                                                    }
                                                }}
                                                navigation
                                            >
                                                { list.galleries.map((item: any) => (
                                                    <SwiperSlide>
                                                        { (item.item_image) && 
                                                            <div className="item-gallery" key={item.id}>
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet={`${item.item_image}`} className="img"
                                                                    alt={list.title}
                                                                />
                                                            </div>
                                                        }
                                                        { (item.item_content) && 
                                                            <div className="popup-content visible-mobile" dangerouslySetInnerHTML={{__html: item.item_content}} />
                                                        }
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className="popup-content visible-desktop">
                                        { list.galleries.map((item: any) => (
                                            (item.item_content) && 
                                                <div className="column" key={item.id} dangerouslySetInnerHTML={{__html: item.item_content}} />
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