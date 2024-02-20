import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { GET_FORMINATOR_FORM } from '../data'
import { useQuery } from '@apollo/client';


export const ContactForm = (): JSX.Element => {
    const [isFormVisible, setFormVisible] = useState(false)
    const ctform = useRef(null)

    // const fetchData = async () => {
    const test = useQuery(GET_FORMINATOR_FORM);

    // };
    // fetchData()

    useEffect(() => {
        const showForm = () => {
            if (!Cookies.get('contact-form')) {
                setFormVisible(true);
            }
        };



        const timer = setTimeout(showForm, 6000); // Show after 10 seconds
        setTimeout(() => {
            if (ctform.current) {
                ctform.current.classList.add('active')
            }
        }, 6100)

        return () => clearTimeout(timer);

    }, [ctform]);

    const handleClose = () => {
        setFormVisible(false);
        Cookies.set('contact-form', 'true', { expires: 1 / 24 }); // Expires in 1 hour
    };
    return (
        <div className={`section section-contact-popup popup ${isFormVisible ? 'show' : 'hidden'}`} style={{ display: "none" }} ref={ctform}>
            <div className="container">
                <div className="btn-close" onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                        <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 0.688749 -0.724999 0.688749 1.66455 1.70703)" stroke="#0068FF" strokeWidth="{'2.13437'}" />
                        <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 -0.688749 0.724999 0.688749 1.66455 28.7422)" stroke="#0068FF" strokeWidth="{'2.13437'}" />
                    </svg>
                </div>
                <div className="col-text">
                    <h5>Drop us a message regarding your inquiry on our contact form</h5>
                </div>
                <div className="col-form">
                    <form action="">
                        <fieldset className="fieldset">
                            <div className="field name col-6 required">
                                <label className="label" htmlFor="{'name}"><span>Full Name</span></label>
                                <div className="control">
                                    <input name="name" id="name" title="Name" value="" className="input-text" type="text"
                                        data-validate="{required:true}" aria-required="true" />
                                </div>
                            </div>
                            <div className="field email col-6 required">
                                <label className="label" htmlFor="{'name'}"><span>Email</span></label>
                                <div className="control">
                                    <input name="name" id="name" title="Name" value="" className="input-text" type="text"
                                        data-validate="{required:true}" aria-required="true" />
                                </div>
                            </div>
                            <div className="field phone col-6 required">
                                <label className="label" htmlFor="{'name'}"><span>Phone Number</span></label>
                                <div className="control">
                                    <input name="name" id="name" title="Name" value="" className="input-text" type="text"
                                        data-validate="{required:true}" aria-required="true" />
                                </div>
                            </div>
                            <div className="field subject col-6 required">
                                <label className="label" htmlFor="{'name'}"><span>Subject</span></label>
                                <div className="control">
                                    <input name="name" id="name" title="Name" value="" className="input-text" type="text"
                                        data-validate="{required:true}" aria-required="true" />
                                </div>
                            </div>
                            <div className="field name full required">
                                <label className="label" htmlFor="{'name'}"><span>Messages</span></label>
                                <div className="control">
                                    <textarea name="name" id="name" title="Name" value="" className="input-text" type="text"
                                        data-validate="{required:true}" aria-required="true" />
                                </div>
                            </div>
                            
                            <div className="field checkbox  full required">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className="label" htmlFor="{'#vehicle1'}">
                                    <span>Introduce a checkbox to grant permission for sharing information within the internal Zipcode’s company</span>
                                </label>
                            </div>

                            <div className="field checkbox  full required">
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike" />
                                <label className="label" htmlFor="{'#vehicle2'}"><span>Introduce a checkbox for receiving news or updates from Zipcode</span></label>
                            </div>
                        </fieldset>
                        <div className="action">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
