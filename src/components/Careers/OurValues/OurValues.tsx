import React, { useState } from "react";
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
    const numRows = OurValuesContents.length
    const numCol = numRows/2

    const [openPopUp, setOpenPopUp] = useState(false);

    const openPopup = async (index: string) => {
        await setOpenPopUp(!openPopUp);

        let itemPopUp = document.querySelector('.popup-item[data-popup="'+ index +'"]')

        itemPopUp?.classList.add('open')

    }
    
    return (
        <>
            { (OurValuesTitle ) && 
                <section className="our-values-box careers-section">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="h4" dangerouslySetInnerHTML={{__html: OurValuesTitle}} />
                        </div>
                        { (OurValuesContents ) && 
                            <div className="section-content">
                                <div className={`our-values-items ${openPopUp? ' our-values-popup-active' : ''}`}>
                                    <div className="items-col">
                                        { OurValuesContents.map((list, index) => (
                                            ((index + 1) <= numCol) &&                                             
                                                (list.title || list.imgUrl || list.imgSecondUrl ) && 
                                                    <div className="item"  onClick={() => openPopup(index)} key={index}>
                                                        <div className="item-inner">
                                                            { (list.imgUrl || list.imgSecondUrl ) && 
                                                                <div className="column-image">
                                                                    { list.imgUrl && 
                                                                        <div className="image-first">
                                                                            <div className="image-inner">
                                                                                <img className="img-placeholder" 
                                                                                    loading="lazy" 
                                                                                    srcSet={OurValuesImagePlaceholder1} alt=""
                                                                                />
                                                                                <img
                                                                                    loading="lazy"
                                                                                    srcSet={`${list.imgUrl}`} className="img img-default"
                                                                                    alt={list.title}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                    { list.imgSecondUrl && 
                                                                        <div className="image-second">
                                                                            <div className="image-inner">
                                                                                <img className="img-placeholder" 
                                                                                    loading="lazy" 
                                                                                    srcSet={OurValuesImagePlaceholder2} alt=""
                                                                                />
                                                                                <img
                                                                                    loading="lazy"
                                                                                    srcSet={`${list.imgSecondUrl}`} className="img img-default"
                                                                                    alt={list.title}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            }
                                                            { list.title && 
                                                                <div className="column-title">
                                                                    <h5 dangerouslySetInnerHTML={{__html: list.title}} />
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                        ))}
                                    </div>
                                    <div className="items-col">
                                        { OurValuesContents.map((list, index) => (
                                            (index + 1) > numCol &&                                             
                                                (list.title || list.imgUrl || list.imgSecondUrl ) && 
                                                    <div className="item"  onClick={() => openPopup(index)} key={index}>
                                                        <div className="item-inner">
                                                            { (list.imgUrl || list.imgSecondUrl ) && 
                                                                <div className="column-image">
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
                                                            }
                                                            { list.title && 
                                                                <div className="column-title">
                                                                    <h5 dangerouslySetInnerHTML={{__html: list.title}} />
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                        ))}
                                    </div>
                                </div>
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
                    </div>
                </section>
            }
        </>
    );
}
export default OurValues;