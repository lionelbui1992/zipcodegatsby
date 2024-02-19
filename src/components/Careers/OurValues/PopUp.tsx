import React, { useState, useRef } from "react";
import "./styles.sass";

interface Props {
    OurValuesTitle: string;
    OurValuesImagePlaceholder1: string;
    OurValuesImagePlaceholder2: string;
    openPopUpBackground: string;
    OurValuesContents: any[];
}

export const OurValues = ({
    OurValuesTitle,
    OurValuesContents,
    OurValuesImagePlaceholder1,
    OurValuesImagePlaceholder2,
    openPopUpBackground,
}: Props): JSX.Element => {
    const [openPopUp, setOpenPopUp] = useState(false)
    
    return (
        <>
           
            { (OurValuesContents ) && 
                <div className="section-content">
                    { openPopUp && (
                        <div className="our-values-popup" style={{backgroundImage: "url("+openPopUpBackground+")"}}>
                            <div className="container">
                                <div className="popup-content">
                                    { OurValuesContents.map((list, index) => (
                                        <div className="popup-item" data-popup={index} key={index}>
                                            <div className="item">
                                                <div className="item-inner">
                                                    { (list.imgUrl || list.imgSecondUrl ) && 
                                                        <div className="column-image">
                                                            <div className="image-inner">
                                                                { list.imgUrl && 
                                                                    <div className="image-first">
                                                                        <div className="image-inner">
                                                                            <img
                                                                                loading="lazy"
                                                                                srcSet={`${list.imgUrl}`} className="img"
                                                                                alt={list.title}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                }
                                                                { list.imgSecondUrl && 
                                                                    <div className="image-second">
                                                                        <div className="image-inner">
                                                                            <img
                                                                                loading="lazy"
                                                                                srcSet={`${list.imgSecondUrl}`} className="img"
                                                                                alt={list.title}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                            { list.title && 
                                                                <div className="column-title">
                                                                    <h5 dangerouslySetInnerHTML={{__html: list.title}} />
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                    { list.content && 
                                                        <div className="column-content">
                                                            <div dangerouslySetInnerHTML={{__html: list.content}} />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
        </>
    );
}
export default OurValues;