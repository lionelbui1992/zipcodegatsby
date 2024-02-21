import React from "react";
import "./box-image.sass";
import { Link } from "gatsby";
import { IBoxImageProps } from "../types";

export const BoxImage = ({attributes}: {attributes: IBoxImageProps}): JSX.Element => {
    
    return (
        <>
            <div
                className={`box-image ${attributes?.className? attributes.className : 'box-image-left'}`}
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
                            {attributes.image && attributes.image.src &&
                            (
                                <div className="image-inner">
                                    <img
                                        loading="lazy"
                                        srcSet={`${attributes.image.src}`} className="img"
                                        alt={`${attributes.image.alt}`}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="column-content">
                            <div className="content-inner">
                            <h2 className="title">{attributes.title}</h2>
                                <div className="content">
                                    <div className="description visible-desktop">{attributes.description}</div>
                                    <div className="description visible-mobile">{attributes.description_mobile}</div>
                                    {attributes.button && attributes.button.title &&
                                    (
                                        <Link className="btn btn-primary" to={`${attributes.button.target}`}>{attributes.button.title}</Link>
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
