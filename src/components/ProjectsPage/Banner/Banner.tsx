import React, { useState, useEffect } from "react";
import "./projects-banner.sass";
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
        // setTimeout(() => {
            document.querySelector('.projects-popup-item-'+ index)?.classList.add('active-popup');
            document.querySelector('.projects-popup-'+ index)?.classList.add('active-popup');
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