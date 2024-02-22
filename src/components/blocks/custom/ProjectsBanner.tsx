import React, { useState, useEffect } from "react";
import "./projects-banner.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IImage } from "../types";
interface IProjectsBannerProps {
    background_image: IImage;
    label: string;
    content: {
        small_text: string;
        line: {
            image?: IImage;
            text: string;
        }[];
    }[];

}


export const ProjectsBanner = ({ attributes }: { attributes: IProjectsBannerProps}): JSX.Element => {
    const { background_image, label, content } = attributes;
    console.log('attributes', attributes);

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
                if (null !== imageUrl && null !== btn.querySelector('.image')) {
                    btn.querySelector('.image').innerHTML = `<img src="${imageUrl}" />`;
                }
            });
        }
    }, [])

    return (
        <>
            { (label || content.length > 0 ) && 
                <section className="projects-banner projects-section">
                    <div className="section-bkg">
                        <img loading="lazy" srcSet={background_image.src} alt="background" />
                    </div>
                    <div className="container">
                        <div className="section-content">
                            <div className="content-inner">
                                { (label) && 
                                    <h1 className="title h5 small" dangerouslySetInnerHTML={{__html: label}} />
                                }
                                { (content.length > 0) && 
                                    <div className="projects-items">
                                        { content.map((list, index) => (
                                            (list.line || list.small_text) && 
                                                <div className={`item projects-popup-item projects-popup-item-${index}`} id={`projects-popup-item-${index}`} data-image={`${list.imgUrl}`} data-popup={`projects-popup-${index}`} key={index}>
                                                    <div className="item-inner text-center" onClick={() => openPopup(index)}>
                                                        <h3>
                                                            { (list.line.length > 0 ) && 
                                                                list.line.map((line, index) => (
                                                                    (line.image || line.text) && 
                                                                        <React.Fragment key={index}>
                                                                            {line.text}
                                                                            <span className="image">
                                                                                { (line.image?.src) && 
                                                                                    <img loading="lazy" srcSet={line.image.src} alt={line.text} />
                                                                                }
                                                                            </span>
                                                                        </React.Fragment>
                                                                ))
                                                            }
                                                        </h3>
                                                        { (list.small_text ) && 
                                                            <div className="subheading">{list.small_text}</div>
                                                        }
                                                        <button className="btn btn-secondary visible-tablet visible-mobile">Read more</button>
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

export default ProjectsBanner;
