import React from "react";
import "./styles.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
    PerksTitle: string;
    PerksDesc: string;
    PerksContent: any[];
}

export const CareerPerks = ({
    PerksTitle,
    PerksDesc,
    PerksContent
}: Props): JSX.Element => {
    return (
        <>
            { (PerksTitle || PerksDesc || PerksContent) && 
                <section className="career-perks careers-section">
                    <div className="container">
                        <div className="career-perks-wrapper">
                            { (PerksTitle || PerksDesc) && 
                                <div className="section-heading">
                                    { (PerksTitle) && 
                                        <h2 className="h4" dangerouslySetInnerHTML={{__html: PerksTitle}} />
                                    }
                                    { (PerksDesc) && 
                                        <div className="description" dangerouslySetInnerHTML={{__html: PerksDesc}} />
                                    }
                                </div>
                            }
                            { (PerksContent) && 
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
                                        { PerksContent.map((list, index) => (
                                            (list.title || list.imgUrl || list.content ) && 
                                                <SwiperSlide key={index}>
                                                    <div className="item-inner">
                                                        <div className="item-image">
                                                            <div className="image-inner">
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet={`${list.imgUrl}`} className="img"
                                                                    alt={list.title}
                                                                />
                                                            </div>
                                                            <div className="item-info">
                                                                <div dangerouslySetInnerHTML={{__html: list.content}} />
                                                            </div>
                                                        </div>
                                                        <div className="item-content">
                                                            <h6 className="small" dangerouslySetInnerHTML={{__html: list.title}} />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            }
                        </div>
                    </div>
                </section>
            }
        </>
    );
}
export default CareerPerks;