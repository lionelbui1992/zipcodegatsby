import React, { useState, useEffect } from "react";
import "./life-zip-code.sass";
import { LifeZipCodeProps } from "../types";
import $ from 'jquery';
import lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';

export const LifeZipCode = ({ attributes: { background, title, gallery } }: { attributes: LifeZipCodeProps }): JSX.Element => {
    const lifeIconRow = '/img/gallery-box-icon-row.svg';
    const lifeIconCol = '/img/gallery-box-icon-col.svg';

    useEffect(() => {
        $(document).ready(function () {
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'disableScrolling': true,
                'showImageNumberLabel': false,

            })
        });

    }, []);

    return (
        <>
            {(title || gallery) &&
                <div className="careers-life careers-section" style={{ backgroundImage: "url(" + background.src + ")" }}>
                    <div className="container">
                        <div className="section-title">
                            <h2 className="h4" dangerouslySetInnerHTML={{ __html: title }} />
                        </div>

                        {gallery &&
                            <div className={`section-content section-gallery-content`}>
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
                                            <div className="item" data-index={index} key={index}>
                                                <a href={list.src} data-lightbox="roadtrip" className="item-image">
                                                    <img className="img-default" src={list.src} alt="" />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}
export default LifeZipCode;