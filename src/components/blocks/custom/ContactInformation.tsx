import React from "react";
import "./contact-information.sass";
import { IContactInformationProps } from "../types";

export const ContactInformation = ({ attributes }: { attributes: IContactInformationProps }): JSX.Element => {
    const { title, form_shortcode } = attributes;

    console.log(form_shortcode);

    return (
        <>
            { (title) && 
                <div className="careers-profile careers-section">
                    <div className="container">
                        { (title) && 
                            <div className="section-title">
                                <h2 dangerouslySetInnerHTML={{__html: title}} />
                            </div>
                        }
                        <div className="section-content">
                            <div className="available-items" dangerouslySetInnerHTML={{__html: form_shortcode}} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default ContactInformation;
