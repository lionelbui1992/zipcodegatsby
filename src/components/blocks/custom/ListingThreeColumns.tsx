import React from "react";
import "./listing-three-columns.sass";
import { IListingThreeColumnsProps } from "../types";

export const ListingThreeColumns = ({ attributes }: { attributes: IListingThreeColumnsProps}): JSX.Element => {
    const { title, list } = attributes;
    const AvailableBackground = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/02/careers-life-bkg.jpg';
    return (
        <>
            { (title || list) && 
                <div className="available-positions careers-section" style={{backgroundImage: "url("+AvailableBackground+")"}}>
                    <div className="container">
                        { (title) && 
                            <div className="section-title text-center">
                                <h2 dangerouslySetInnerHTML={{__html: title}} />
                            </div>
                        }
                        { (list) && 
                            <div className="section-content">
                                <div className="available-items">
                                    { list.map((list, index) => (
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
export default ListingThreeColumns;
