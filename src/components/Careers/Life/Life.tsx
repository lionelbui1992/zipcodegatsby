import React, { useState } from "react";
import "./style.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface Props {
    lifeTitle: string;
    lifeBackground: string;
    lifeImagePlaceholder1: string;
    lifeImagePlaceholder2: string;
    lifeIconRow: string;
    lifeIconCol: string;
    lifeGallery: any[];
}

export const Life = ({
    lifeTitle,
    lifeBackground,
    lifeIconRow,
    lifeIconCol,
    lifeImagePlaceholder1,
    lifeImagePlaceholder2,
    lifeGallery,
}: Props): JSX.Element => {
    const [openPopUp, setOpenPopUp] = useState(false);

    const openPopup = () => {
        setOpenPopUp(!openPopUp);
    }

    return (
        <>
            { (lifeTitle || lifeGallery) && 
                <div className="careers-life careers-section" style={{backgroundImage: "url("+lifeBackground+")"}}>
                    <div className="container">
                        <div className="section-title">
                            <h2 className="h4" dangerouslySetInnerHTML={{__html: lifeTitle}} />
                        </div>
                        
                        { lifeGallery && 
                            <div className={`section-content section-gallery-content ${openPopUp? ' gallery-popup-active' : ''}`}>
                                <div className="life-gallery-wrapper">
                                    { lifeIconRow && 
                                        <div className="gallery-icon gallery-icon-row">
                                            <img loading="lazy" srcSet={lifeIconRow} />
                                        </div>
                                    }
                                    { lifeIconCol && 
                                        <div className="gallery-icon gallery-icon-col">
                                            <img loading="lazy" srcSet={lifeIconCol} />
                                        </div>
                                    }
                                    <div className="life-gallery">
                                        { lifeGallery.map((list, index) => (
                                            (list.imgUrl) && 
                                                <div onClick={() => openPopup()} className="item" data-index={index} key={index}>
                                                    <div className="item-image">
                                                        {((index + 1) % 6 == 2 || (index + 1) % 6 == 4) ? (
                                                            <img className="img-placeholder" loading="lazy" srcSet={lifeImagePlaceholder2} alt="" />
                                                        ) : (
                                                            <img className="img-placeholder" loading="lazy" srcSet={lifeImagePlaceholder1} alt="" />
                                                        )}
                                                        <img className="img-default" loading="lazy" srcSet={list.imgUrl} alt="" />
                                                    </div>
                                                </div>
                                        ))}
                                    </div>
                                </div>
                                
                                { openPopUp && (<div className="life-gallery-popup" id="life-gallery-popup">
                                    <Swiper
                                        modules={[Navigation]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{
                                            el: "#containerForBullets",
                                            type: "bullets",
                                            bulletClass: "swiper-custom-bullet",
                                            bulletActiveClass: "swiper-custom-bullet-active",
                                            clickable: true,
                                        }}
                                    >
                                        { lifeGallery.map((list, index) => (
                                            (list.imgUrl) && 
                                            <SwiperSlide key={index} data-index={index}>
                                                <div className="item">
                                                    <div className="item-image">
                                                        <img loading="lazy" srcSet={list.imgUrl} alt="" />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>)}
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}
export default Life;