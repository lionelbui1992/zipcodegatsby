import React, { useState, useEffect } from "react";
import "./gallery-two-columns.sass";
import { IGalleryTwoColumnsProps } from "../types";

const ColumnTitle = ({ title }: { title: string }): JSX.Element => {
    return (
        <div className="column-title">
            <h5>
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
                <svg width="36.94" height="25" viewBox="0 0 133 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M88.4964 80.6353L45.2178 80.8993C25.6674 80.8993 9.81836 65.0502 9.81836 45.4999C9.81836 25.9495 25.6674 10.1004 45.2178 10.1004L88.4964 9.83643C108.047 9.83643 123.896 25.6855 123.896 45.2358C123.896 64.7862 108.047 80.6353 88.4964 80.6353Z" stroke="#1840F0" stroke-width="12" stroke-miterlimit="10"/>
                    <path d="M88.4964 80.6353L45.2178 80.8993C25.6674 80.8993 9.81836 65.0502 9.81836 45.4999C9.81836 25.9495 25.6674 10.1004 45.2178 10.1004L88.4964 9.83643C108.047 9.83643 123.896 25.6855 123.896 45.2358C123.896 64.7862 108.047 80.6353 88.4964 80.6353Z" fill="white"/>
                    <path d="M43.7383 45.6025H91.2119" stroke="#1840F0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M78.4805 59.5457L92.0629 45.5747L78.4805 59.5457Z" fill="white"/>
                    <path d="M78.4805 59.5457L92.0629 45.5747" stroke="#1840F0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M78.2871 31.7979L92.2581 45.3802L78.2871 31.7979Z" fill="white"/>
                    <path d="M78.2871 31.7979L92.2581 45.3802" stroke="#1840F0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </h5>
        </div>
    )
}

export const GalleryTwoColumns = ({ attributes }: { attributes: IGalleryTwoColumnsProps }): JSX.Element => {
    const { title, background, gallery } = attributes;

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
                                                        <div className={`column-image${(list.image_1.src && list.image_2.src) ? ' column-image-two' : ' column-image-full'}`}>
                                                            {list.image_1.src &&
                                                                <div className="image-item image-first">
                                                                    <div className="image-inner">
                                                                        <img
                                                                            loading="lazy"
                                                                            srcSet={`${list.image_1.src}`} className="img img-default"
                                                                            alt={list.item_title}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            }
                                                            {list.image_2.src &&
                                                                <div className="image-item image-second">
                                                                    <div className="image-inner">
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
                                                    {list.item_title && <ColumnTitle title={list.item_title} />}
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
                                                    {list.item_title && <ColumnTitle title={list.item_title} />}
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