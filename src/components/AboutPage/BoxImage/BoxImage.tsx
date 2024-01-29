import React from "react";
import "./styles.sass";
import { Link } from "gatsby";

interface Props {
    className: string,
    boxIcon: string | null,
    boxImage: string,
    boxTitle: string,
    boxContent: string,
    boxLinkText: string,
    boxLinkUrl: string
}

export const BoxImage = ({ className, boxIcon, boxImage, boxTitle, boxContent, boxLinkText, boxLinkUrl }: Props): JSX.Element => {
    return (
        <>
            <div
                className={`box-image ${className}`}
            >
                <div className="container">
                    <div className="column-box">
                        <div className="column-image">
                            {boxIcon == 'column' ? (
                                <div className="icon">
                                    <img
                                        loading="lazy"
                                        srcSet="/img/box-image-icon-column.svg"
                                        alt=""
                                    />
                                </div>
                            ) : (
                                <div className="icon">
                                    <img
                                        loading="lazy"
                                        srcSet="/img/box-image-icon-row.svg"
                                        alt=""
                                    />
                                </div>
                            )}
                            <div className="image-inner">
                                <img
                                    loading="lazy"
                                    srcSet={`${boxImage}`} className="img"
                                    alt={`${boxTitle}`}
                                />
                            </div>
                        </div>
                        <div className="column-content">
                            <div className="content-inner">
                                <h2 className="title">{boxTitle}</h2>
                                <div className="content">
                                    <div className="description">{boxContent}</div>
                                    <Link className="btn btn-primary" to={`${boxLinkUrl}`}>{boxLinkText}</Link>
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