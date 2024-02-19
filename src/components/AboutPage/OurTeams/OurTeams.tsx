import React from "react";
import "./styles.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
    OurTeamsHeading: string;
    OurTeamsContent: any[];
}

export const OurTeams = ({
    OurTeamsHeading,
    OurTeamsContent
}: Props): JSX.Element => {
    return (
        <>
            { (OurTeamsHeading || OurTeamsContent ) && 
                <div className="container">
                    <div className="our-teams-wrapper">
                        { (OurTeamsHeading) && 
                            <div className="section-heading">
                                <h2 className="h5" dangerouslySetInnerHTML={{__html: OurTeamsHeading}} />
                            </div>
                        }
                        { (OurTeamsContent) && 
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
                                    { OurTeamsContent.map((list, index) => (
                                        (list.title || list.imgUrl || list.content || list.position ) && 
                                            <SwiperSlide key={index}>
                                                <div className="item-inner">
                                                    { (list.imgUrl) && 
                                                        <div className="item-image">
                                                            <div className="image-inner">
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet={`${list.imgUrl}`} className="img"
                                                                    alt={list.title}
                                                                />
                                                            </div>
                                                            { (list.content) && 
                                                                <div className="item-info">
                                                                    <div dangerouslySetInnerHTML={{__html: list.content}} />
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                    { (list.title || list.position ) && 
                                                        <div className="item-content">
                                                            <h6 className="item-name" dangerouslySetInnerHTML={{__html: list.title}} />
                                                            <div className="item-position" dangerouslySetInnerHTML={{__html: list.position}} />
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