import React from "react";
import "./box-image.sass";
import { Link } from "gatsby";
import { IBoxImageProps } from "../types";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const BoxImage = ({ order, attributes }: { order?: string, attributes: IBoxImageProps }): JSX.Element => {
    const image_position = attributes.image_position ? attributes.image_position : 'left'
    const image_positon_class = order ? `wp-block-position-${order}` : 'wp-block-position-normal'

    return (
        <>
            <div
                className={`box-image box-image-${image_position} ${image_positon_class}`}
            >
                <div className="container">
                    <div className="column-box">
                        <div className="column-image">
                            {(() => {
                                if (attributes.background_position == 'column') {
                                    return (
                                        <div className="icon">
                                            <img
                                                loading="lazy"
                                                srcSet="/img/box-image-icon-column.svg"
                                                alt=""
                                            />
                                        </div>
                                    )
                                } else if (attributes.background_position == 'row') {
                                    return (
                                        <div className="icon icon-row icon-bottom">
                                            <img
                                                loading="lazy"
                                                srcSet="/img/box-image-icon-row.svg"
                                                alt=""
                                            />
                                        </div>
                                    )
                                }
                            })()}
                            {attributes.images &&
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation
                                >
                                    {attributes.images.map(image =>
                                        <SwiperSlide>
                                            <div className="image-inner">
                                                <img src={image.src} alt={`${image.alt}`} amount={.3} duration=".6" from="end" axis="x" />
                                            </div>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            }
                        </div>
                        <div className="column-content">
                            <div className="content-inner">
                                <h2 className="title">{attributes.title}</h2>
                                <div className="content">
                                    <div className="description visible-desktop">{attributes.description}</div>
                                    <div className="description visible-mobile">{attributes.description_mobile}</div>
                                    {attributes.button && attributes.button.title &&
                                        (
                                            <Link className="btn btn-primary" to={`${attributes.button.url}`}>{attributes.button.title}</Link>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BoxImage;
