import React from "react";
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
    const galleryContent: HTMLElement | null = document.querySelector('.section-gallery-content');

    // document.onclick = (e: MouseEvent): void => {
    //     if (e.target && (e.target as HTMLElement).id !== 'life-gallery-popup' && galleryContent?.classList.contains('gallery-popup-active')) {
    //         galleryContent?.classList.remove('gallery-popup-active');
    //     }
    // };

    // const openPopup = () => {
    //     galleryContent?.classList.add('gallery-popup-active');
    // }

    return (
        <>
            { (lifeTitle || lifeGallery) && 
                <div className="careers-life careers-section" style={{backgroundImage: "url("+lifeBackground+")"}}>
                    <div className="container">
                        <div className="section-title">
                            <h2 className="h4" dangerouslySetInnerHTML={{__html: lifeTitle}} />
                        </div>
                        { lifeGallery && 
                            <div className="section-content section-gallery-content">
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
                                                <div className="item" data-index={index} key={index} onClick={() => openPopup()}>
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
                                <div className="life-gallery-popup" id="life-gallery-popup">
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
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}
export default Life;