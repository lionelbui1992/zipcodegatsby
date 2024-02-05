import React from "react";
import "./style.sass";

interface Props {
    AvailableTitle: string;
    AvailableBackground: string;
    AvailableContent: any[];
}

export const AvailablePositions = ({
    AvailableTitle,
    AvailableContent,
    AvailableBackground,
}: Props): JSX.Element => {
    return (
        <>
            { (AvailableTitle || AvailableContent) && 
                <div className="available-positions careers-section" style={{backgroundImage: "url("+AvailableBackground+")"}}>
                    <div className="container">
                        { (AvailableTitle) && 
                            <div className="section-title text-center">
                                <h2 dangerouslySetInnerHTML={{__html: AvailableTitle}} />
                            </div>
                        }
                        { (AvailableContent) && 
                            <div className="section-content">
                                <div className="available-items">
                                    { AvailableContent.map((list, index) => (
                                        (list.content ) && 
                                        <div className="item" key={index}>
                                            <div className="content" dangerouslySetInnerHTML={{__html: list.content}} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}
export default AvailablePositions;