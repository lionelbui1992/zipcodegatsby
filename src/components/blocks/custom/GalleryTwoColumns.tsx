import React, { useState, useEffect } from "react";
import "./gallery-two-columns.sass";
import { IGalleryTwoColumnsProps } from "../types";

export const GalleryTwoColumns = ({ attributes }: { attributes: IGalleryTwoColumnsProps }): JSX.Element => {
    const { title, background, gallery } = attributes;

    const OurValuesImagePlaceholder1 = '/img/our-values-image-placeholder-1.png';
    const OurValuesImagePlaceholder2 = '/img/our-values-image-placeholder-2.png';
    const openPopUpBackground = '/img/careers-life-bkg.jpg';

    const numRows = gallery.length
    const numCol = numRows / 2

    const [openPopUp, setOpenPopUp] = useState(false);

    useEffect(() => {
        // if (openPopUp) {
        //     document.addEventListener('click', handleClickOutside, true);
        //     return () => {
        //         document.removeEventListener('click', handleClickOutside, true);
        //     };
        // } else {
        //     document.body.style.overflow = 'auto';
        // }
    }, [openPopUp]);

    const openPopup = async (index: string) => {
        await setOpenPopUp(!openPopUp);
        const popupItem: HTMLElement[] = Array.from(document.querySelectorAll(".popup-item"));        
        popupItem.forEach((item: HTMLElement) => {
            item?.classList.remove('open');
        });
        document.querySelector('html')?.classList.add('active-overlay');
        const itemWrapper: Element | null = document.querySelector('.our-values-box');
        const itemPopUp: HTMLElement | null = document.querySelector('.popup-item[data-popup="' + index + '"]');
        const itemPosition: HTMLElement | null = document.querySelector('.our-values-item[data-item="' + index + '"]');
        const itemPositionTop: number = itemPosition?.offsetTop || 0;
        itemWrapper?.style.setProperty('--offsetTop', `${itemPositionTop}px`);

        itemPopUp?.classList.add('open');
        const ourValuesPopup: HTMLElement | null = document.querySelector('.our-values-popup');
        ourValuesPopup?.classList.add('active');
        const ourValuesItems: HTMLElement | null = document.querySelector('.our-values-items');
        ourValuesItems?.classList.add('our-values-popup-active');
    }


    return (
        <>
            {(title) &&
                <section className="our-values-box careers-section">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="h4" dangerouslySetInnerHTML={{ __html: title }} />
                        </div>
                        {(gallery) &&
                            <div className="section-content">
                                <div className={`our-values-items`}>
                                    <div className="items-col">
                                        {gallery.map((list, index) => (
                                            ((index + 1) <= numCol) &&
                                            (list.item_title || list.image_1.src || list.image_2.src) &&
                                            <div className="our-values-item item" data-item={index} onClick={() => openPopup(index)} key={index}>
                                                <div className="item-inner">
                                                    {(list.image_1.src || list.image_2.src) &&
                                                        <div className="column-image">
                                                            {list.image_1.src &&
                                                                <div className="image-first">
                                                                    <div className="image-inner">
                                                                        <img className="img-placeholder"
                                                                            loading="lazy"
                                                                            srcSet={OurValuesImagePlaceholder1} alt=""
                                                                        />
                                                                        <img
                                                                            loading="lazy"
                                                                            srcSet={`${list.image_1.src}`} className="img img-default"
                                                                            alt={list.item_title}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            }
                                                            {list.image_2.src &&
                                                                <div className="image-second">
                                                                    <div className="image-inner">
                                                                        <img className="img-placeholder"
                                                                            loading="lazy"
                                                                            srcSet={OurValuesImagePlaceholder2} alt=""
                                                                        />
                                                                        <img
                                                                            loading="lazy"
                                                                            srcSet={`${list.image_2.src}`} className="img img-default"
                                                                            alt={list.item_title}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                    {list.item_title &&
                                                        <div className="column-title">
                                                            <h5 dangerouslySetInnerHTML={{ __html: list.item_title }} />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="items-col">
                                        {gallery.map((list, index) => (
                                            (index + 1) > numCol &&
                                            (list.item_title || list.image_1.src || list.image_2.src) &&
                                            <div className="our-values-item item" data-item={index} onClick={() => openPopup(index)} key={index}>
                                                <div className="item-inner">
                                                    {(list.image_1.src || list.image_2.src) &&
                                                        <div className="column-image">
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
                                                    }
                                                    {list.item_title &&
                                                        <div className="column-title">
                                                            <h5 dangerouslySetInnerHTML={{ __html: list.item_title }} />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </section>
            }
        </>
    );
}
export default GalleryTwoColumns;