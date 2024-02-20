import React, { useState, useEffect } from "react";
import "./styles.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface Props {
    ProjectBannerHeading: string;
    ProjectBannerButton: string;
    ProjectBannerBkgPopup: string;
    ProjectBannerContent: any[];
}


export const Banner = ({
    ProjectBannerHeading,
    ProjectBannerButton,
    ProjectBannerBkgPopup,
    ProjectBannerContent
}: Props): JSX.Element => {
    const [openPopUp, setOpenPopUp] = useState(false);
    
    const openPopup = (index: number) => {
        setOpenPopUp(!openPopUp);
        document.querySelector('html')!.classList.add('active-overlay');
        setTimeout(() => {
            document.querySelector('.projects-popup-item-'+ index)?.classList.add('active-popup');
        }, 300);
    } 

    const popupOverlay = async (index: number) => {
        setOpenPopUp(false);
        document.querySelector('html')?.classList.remove('active-overlay');
        const popupItems: HTMLElement[] = Array.from(document.querySelectorAll(".projects-popup-item"));
        popupItems.forEach((item: HTMLElement) => {
            item?.classList.remove('active-popup');
        });
        // setTimeout(async () => {
        //     await document.querySelector('html')!.classList.remove('active-overlay');
        //     await document.querySelector('.projects-popup')?.classList.remove('active-popup');
        //     await document.querySelector('.projects-popup-item')?.classList.remove('active-popup');
        //     console.log('remove');
        //     console.log(document.querySelector('.projects-popup-'+ index));
        //     console.log(document.querySelector('.projects-popup-item-'+ index));
        // }, 300);
    }   

    useEffect(() => {
        const modalBtns: HTMLElement[] = Array.from(document.querySelectorAll(".projects-popup-item"));

        if (modalBtns.length > 0) {
            modalBtns.forEach((btn: HTMLElement) => {
                const modal: string | null = btn.getAttribute('data-popup');

                const imageUrl: string | null = btn.getAttribute('data-image');
                btn.querySelector('.image').innerHTML = `<img src="${imageUrl}" />`;
            });
        }
    }, [])

    return (
        <>
            { (ProjectBannerHeading || ProjectBannerContent ) && 
                <section className="projects-banner projects-section">
                    <div className="section-bkg">
                        <img loading="lazy" srcSet="/img/page-privacy-policy-bkg.png" />
                    </div>
                    <div className="container">
                        <div className="section-content">
                            <div className="content-inner">
                                { (ProjectBannerHeading) && 
                                    <h1 className="title h5 small" dangerouslySetInnerHTML={{__html: ProjectBannerHeading}} />
                                }
                                { (ProjectBannerContent) && 
                                    <div className="projects-items">
                                        { ProjectBannerContent.map((list, index) => (
                                            (list.title || list.subtitle) && 
                                                <div className={`item projects-popup-item projects-popup-item-${index}`} id={`projects-popup-item-${index}`} data-image={`${list.imgUrl}`} data-popup={`projects-popup-${index}`} key={index}>
                                                    <div className="item-inner text-center" onClick={() => openPopup(index)}>
                                                        { (list.title ) && 
                                                            <h3 dangerouslySetInnerHTML={{__html: list.title}} />
                                                        }
                                                        { (list.subtitle ) && 
                                                            <div className="subheading">{list.subtitle}</div>
                                                        }
                                                        <button className="btn btn-secondary visible-tablet visible-mobile">{ProjectBannerButton}</button>
                                                    </div>
                                                    {openPopUp && (
                                                        <div className={`projects-popup projects-popup-${index}`} id={`projects-popup-${index}`}>
                                                            <div className="poup-overlay" onClick={() => popupOverlay(index)}></div>
                                                            <div className="projects-popup-container">
                                                                <div className="section-bkg">
                                                                    <img
                                                                        srcSet={`${ProjectBannerBkgPopup}`} className="img"
                                                                        alt={list.title}
                                                                    />
                                                                </div>
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
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}
export default Banner;