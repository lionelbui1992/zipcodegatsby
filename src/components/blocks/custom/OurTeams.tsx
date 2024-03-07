import React, { useEffect } from "react";
import "./our-teams.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IOurTeamsProps } from "../types";

export const OurTeams = ({ attributes }: { attributes: IOurTeamsProps }): JSX.Element => {
    const { title, description, peoples } = attributes;
    useEffect(() => {
        const itemsInner: NodeListOf<HTMLElement> = document.querySelectorAll('.our-teams-item-inner');
        itemsInner.forEach((item: HTMLElement) => {        
            item?.addEventListener('click', () => {
                item?.classList.toggle("active");
            })      
            item?.addEventListener('mouseleave', () => {
                item?.classList.remove('active');
            })
        });
    })

    return (
        <>
            { (title || peoples ) && 
                <div className="container">
                    <div className="our-teams-wrapper">
                        { (title || description) && 
                            <div className="section-heading">
                                { (title) && 
                                    <h2 className="h5" dangerouslySetInnerHTML={{__html: title}} />
                                }
                                { (description) && 
                                    <div className="content" dangerouslySetInnerHTML={{__html: description}} />
                                }
                            </div>
                        }
                        { (peoples) && 
                            <div className="section-content">
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={20}
                                    slidesPerView={3}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 13,
                                        },
                                        767:{
                                            slidesPerView: 1,
                                            spaceBetween: 13,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 16,
                                        },
                                        1023: {
                                            slidesPerView: 2,
                                            spaceBetween: 16,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 16,
                                        },
                                        1600: {
                                            slidesPerView: 3,
                                            spaceBetween: 16,
                                        },
                                        1601: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                    }}
                                    navigation
                                    >
                                    { peoples.map((list, index) => (
                                        (list.name || list.avatar || list.short_description || list.position ) && 
                                            <SwiperSlide key={index}>
                                                <div className="item-inner our-teams-item-inner">
                                                    { (list.avatar) && 
                                                        <div className="item-image">
                                                            <div className="image-inner">
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet={`${list.avatar.src}`} className="img"
                                                                    alt={list.name}
                                                                />
                                                            </div>
                                                            { (list.short_description) && 
                                                                <div className="item-info">
                                                                    <div dangerouslySetInnerHTML={{__html: list.short_description}} />
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                    { (list.name || list.position ) && 
                                                        <div className="item-content">
                                                            { (list.name) && 
                                                                <h6 className="item-name" dangerouslySetInnerHTML={{__html: list.name}} />
                                                            }
                                                            { (list.position) && 
                                                                <div className="item-position" dangerouslySetInnerHTML={{__html: list.position}} />
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}
export default OurTeams;