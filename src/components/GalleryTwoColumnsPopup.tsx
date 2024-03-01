import React, { useState, useEffect } from "react";
import { IGalleryTwoColumnsProps } from "./blocks/types";

export const GalleryTwoColumnsPopup = ({gallery}:{gallery: any[]}): JSX.Element => {
    // const { gallery } = attributes;
    const openPopUpBackground = '/img/careers-life-bkg.jpg';

    const [openPopUp, setOpenPopUp] = useState(false);

    const popupOverlay = async () => {
        setOpenPopUp(false);
        document.querySelector('html')?.classList.remove('active-overlay');
        const popupItems: HTMLElement[] = Array.from(document.querySelectorAll(".popup-item"));
        popupItems.forEach((item: HTMLElement) => {
            item?.classList.remove('open');
        });
        const popupItemsContent: HTMLElement[] = Array.from(document.querySelectorAll(".our-values-popup"));
        popupItemsContent.forEach((item: HTMLElement) => {
            item?.classList.remove('active-popup');
        });
        const ourValuesPopup: HTMLElement | null = document.querySelector('.our-values-popup');
        ourValuesPopup?.classList.remove('active');
        const ourValuesItems: HTMLElement | null = document.querySelector('.our-values-items');
        ourValuesItems?.classList.remove('our-values-popup-active');
    }  


    return (
        <>
            {(gallery) &&
                <div className="our-values-popup">
                    <div className="poup-overlay" onClick={() => popupOverlay()}></div>
                    <div className="popup-content" style={{ backgroundImage: "url(" + openPopUpBackground + ")" }}>
                        <div className="container">
                            {gallery.map((list, index) => (
                                <div className="popup-item" data-popup={index} key={index}>
                                    <div className="item">
                                        <div className="item-inner">
                                            {(list.image_1.src || list.image_2.src) &&
                                                <div className="column-image">
                                                    <div className="image-inner">
                                                        {list.image_1.src &&
                                                            <div className="image-first">
                                                                <div className="image-inner">
                                                                    <img
                                                                        loading="lazy"
                                                                        srcSet={`${list.image_1.src}`} className="img"
                                                                        alt={list.item_title}
                                                                    />
                                                                </div>
                                                            </div>
                                                        }
                                                        {list.image_2.src &&
                                                            <div className="image-second">
                                                                <div className="image-inner">
                                                                    <img
                                                                        loading="lazy"
                                                                        srcSet={`${list.image_2.src}`} className="img"
                                                                        alt={list.item_title}
                                                                    />
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                    {list.item_title &&
                                                        <div className="column-title">
                                                            <h5 dangerouslySetInnerHTML={{ __html: list.item_title }} />
                                                        </div>
                                                    }
                                                </div>
                                            }
                                            {list.content &&
                                                <div className="column-content">
                                                    <div dangerouslySetInnerHTML={{ __html: list.content }} />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default GalleryTwoColumnsPopup;