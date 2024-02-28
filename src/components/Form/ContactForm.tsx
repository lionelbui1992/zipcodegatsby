import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RenderForm, validationSchema } from './helper';



export const ContactForm = (props): JSX.Element => {
    const { data } = props;
    let _data = [],
        fields = [];

    if (typeof data !== 'undefined' && data !== null) {
        _data = JSON.parse(data);
        if (Array.isArray(_data) && _data.length > 0) {
            fields = _data[0].fields;
        }
    }

    if (!fields) return;


    let _validationSchema = validationSchema(fields);
    const [isFormVisible, setFormVisible] = useState(false)
    const ctform = useRef(null)

    const formik = useFormik({
        initialValues: fields.reduce((values, field) => {
            values[field.id] = '';
            return values;
        }, {}),
        validationSchema: _validationSchema,
        onSubmit: (values, { resetForm, setSubmitting }) => {
            let url = process.env.BE_URL + 'wp-json/forminator/v1/save_form';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success === true) {
                        document.querySelector('.col-form form').style.display = "none";
                        document.querySelector('.success-message').style.display = "block";
                        resetForm()
                        setTimeout(handleClosePopup, 3000)
                    } else {
                        alert(data.data)
                    }
                    setSubmitting(false);
                })
                .catch((error) => {
                    console.error('Error during form submission:', error);
                    setSubmitting(false);
                });
        },
    });


    const handleClosePopup = () => {
        document.body.classList.remove("active-form");
        setFormVisible(false);
        Cookies.set('contact-form', 'true', { expires: 1 / 24 }); // Expires in 1 hour
    };

    useEffect(() => {
        const showForm = () => {
            if (!Cookies.get('contact-form')) {
                document.body.classList.add("active-form");
                setFormVisible(true);
                setTimeout(() => {
                    if (ctform.current) {
                        ctform.current.classList.add('active')
                    }
                }, 100)
            }
        };

        const timer = setTimeout(showForm, 6000); // Show after 10 seconds

        return () => clearTimeout(timer);

    }, [ctform]);


    return (
        <div className={`section section-contact-popup popup ${isFormVisible ? 'show' : 'hidden'}`} style={{ display: "none" }} ref={ctform}>
            <div className="container">
                <div className="btn-close" onClick={handleClosePopup}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                        <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 0.688749 -0.724999 0.688749 1.66455 1.70703)" stroke="#0068FF" strokeWidth="{'2.13437'}" />
                        <line y1="-1.06719" x2="39.2529" y2="-1.06719" transform="matrix(0.724999 -0.688749 0.724999 0.688749 1.66455 28.7422)" stroke="#0068FF" strokeWidth="{'2.13437'}" />
                    </svg>
                </div>
                <div className="col-text">
                    <h5>Drop us a message regarding your inquiry on our contact form</h5>
                </div>
                <div className="col-form">
                    <form action="" onSubmit={formik.handleSubmit}>
                        <fieldset className="fieldset">

                            {fields.map(field => (
                                <>
                                    {RenderForm(field, formik)}
                                </>

                            ))}

                        </fieldset>
                        <div className="action">
                            <button className="btn btn-primary">{formik.isSubmitting ? 'Submitting...' : 'Submit'}</button>
                        </div>
                    </form>
                    <div className="success-message" style={{ display: "none" }}>
                        <p>Thank you for your response.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
