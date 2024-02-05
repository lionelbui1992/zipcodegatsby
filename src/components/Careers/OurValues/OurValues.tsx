import React from "react";
import "./styles.sass";

interface Props {
    OurValuesTitle: string;
    OurValuesContents: any[];
}

export const OurValues = ({
    OurValuesTitle,
    OurValuesContents,
}: Props): JSX.Element => {
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
                                <div className="our-values-items">
                                    { OurValuesContents.map((list, index) => (
                                        (list.title || list.imgUrl || list.imgSecondUrl ) && 
                                            <div className="item" key={index}>
                                                { (list.imgUrl || list.imgSecondUrl ) && 
                                                    <div className="column-image">
                                                        <div className="image-inner">
                                                            { list.imgUrl && 
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet={`${list.imgUrl}`} className="img"
                                                                    alt={list.title}
                                                                />
                                                            }
                                                            { list.imgSecondUrl && 
                                                                <img
                                                                    loading="lazy"
                                                                    srcSet={`${list.imgSecondUrl}`} className="img"
                                                                    alt={list.title}
                                                                />
                                                            }
                                                        </div>
                                                    </div>
                                                }
                                                { list.title && 
                                                    <div className="column-title">
                                                        <h6 dangerouslySetInnerHTML={{__html: list.title}} />
                                                    </div>
                                                }
                                            </div>
                                        
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </section>
            }
        </>
    );
}
export default OurValues;