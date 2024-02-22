import React, { useState, useEffect } from "react";
import "./life-zip-code.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LifeZipCodeProps } from "../types";

export const LifeZipCode = ({attributes: { background, title, gallery}}: {attributes: LifeZipCodeProps}): JSX.Element => {
    const [openPopUp, setOpenPopUp] = useState(false);
    const lifeIconRow = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/02/gallery-box-icon-row.svg';
    const lifeIconCol = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/02/gallery-box-icon-col.svg';
    const lifeImagePlaceholder1 = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/02/life-zipcode-placeholder-1.png';
    const lifeImagePlaceholder2 = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/02/life-zipcode-placeholder-2.png';

    useEffect(() => {
        if (openPopUp) {
            document.addEventListener('click', handleClickOutside, true);
            return () => {
                document.removeEventListener('click', handleClickOutside, true);
            };
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openPopUp]);


    const openPopup = () => {
        setOpenPopUp(!openPopUp);
    }

    const hidePopup = () => {
        // setOpenPopUp(!openPopUp);
    }

    const handleClickOutside = (event: any) => {
        const images = document.querySelectorAll('.life-gallery-popup img');
        const btnNext = document.querySelectorAll('.life-gallery-popup .swiper-button-next');
        const btnPrev = document.querySelectorAll('.life-gallery-popup .swiper-button-prev');
        const itemImage = document.querySelectorAll('.life-gallery-popup .item-image');

        if (
            !(
                Array.from(images).some(element => element === event.target) ||
                Array.from(btnNext).some(element => element === event.target) ||
                Array.from(btnPrev).some(element => element === event.target) ||
                Array.from(itemImage).some(element => element === event.target)
            )
        ) {
            setOpenPopUp(false);
        }
    }

    return (
        <>
            {(title || gallery) &&
                <div className="careers-life careers-section" style={{ backgroundImage: "url(" + background.src + ")" }}>
                    <div className="container">
                        <div className="section-overlay" onClick={() => hidePopup()}></div>
                        <div className="section-title">
                            <h2 className="h4" dangerouslySetInnerHTML={{ __html: title }} />
                        </div>

                        {gallery &&
                            <div className={`section-content section-gallery-content ${openPopUp ? ' gallery-popup-active' : ''}`}>
                                <div className="life-gallery-wrapper">
                                    {lifeIconRow &&
                                        <div className="gallery-icon gallery-icon-row">
                                            <img loading="lazy" srcSet={lifeIconRow} />
                                        </div>
                                    }
                                    {lifeIconCol &&
                                        <div className="gallery-icon gallery-icon-col">
                                            <img loading="lazy" srcSet={lifeIconCol} />
                                        </div>
                                    }
                                    <div className="life-gallery">
                                        {gallery.map((list, index) => (
                                            (list.src) &&
                                            <div onClick={() => openPopup()} className="item" data-index={index} key={index}>
                                                <div className="item-image">
                                                    {((index + 1) % 6 == 2 || (index + 1) % 6 == 4) ? (
                                                        <img className="img-placeholder" loading="lazy" srcSet={lifeImagePlaceholder2} alt="" />
                                                    ) : (
                                                        <img className="img-placeholder" loading="lazy" srcSet={lifeImagePlaceholder1} alt="" />
                                                    )}
                                                    <img className="img-default" loading="lazy" srcSet={list.src} alt="" />
                                                    <a href="{list.imgUrl}" data-lightbox="roadtrip"></a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {openPopUp && (<div className="life-gallery-popup" id="life-gallery-popup">
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
                                        {gallery.map((list, index) => (
                                            (list.src) &&
                                            <SwiperSlide key={index} data-index={index}>
                                                <div className="item">
                                                    <div className="item-image">
                                                        <img loading="lazy" srcSet={list.src} alt="" />
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
export default LifeZipCode;