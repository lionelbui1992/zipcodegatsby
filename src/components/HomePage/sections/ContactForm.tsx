import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { GET_FORMINATOR_FORM } from '../data'
import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';



export const ContactForm = (props): JSX.Element => {
    const { data } = props;


    let _data = JSON.parse(data);
    let fields = _data ? _data[0].fields : []

    const validationSchema = Yup.object(fields.reduce((schema, field) => {
        let validator = Yup.string();

        if (field.type === "checkbox") {
            validator = Yup.mixed();
        }
        if (field.required) {
            validator = validator.required(`${field.field_label} is required`);
        }
        if (field.type === 'email') {
            validator = validator.email('Invalid email address');
        }
        schema[field.id] = validator;
        return schema;
    }, {}));

    const [isFormVisible, setFormVisible] = useState(false)
    const ctform = useRef(null)

    const formik = useFormik({
        initialValues: fields.reduce((values, field) => {
            values[field.id] = '';
            return values;
        }, {}),
        validationSchema,
        onSubmit: (values, { resetForm }) => {
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

                })

        },
    });

    const handleClosePopup = () => {
        setFormVisible(false);
        Cookies.set('contact-form', 'true', { expires: 1 / 24 }); // Expires in 1 hour
    };

    const test = useQuery(GET_FORMINATOR_FORM);
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


    const renderField = (field) => {
        switch (field.type) {
            case 'text':
            case 'name':
            case 'phone':
            case 'email':
                return (
                    <div className={`field ${field.id} ${field.cols === "6" ? 'col-6' : 'full'} ${field.required ? "required" : ""}`} >
                        <label className="label" htmlFor={"#" + field.id}><span>{field.field_label}</span></label>
                        <div className="control">
                            <input
                                id={field.id}
                                name={field.id}
                                type={field.type}
                                onChange={formik.handleChange}
                                value={formik.values[field.id]}
                            />
                            {formik.touched[field.id] && formik.errors[field.id] && (
                                <div className="error-message">{formik.errors[field.id]}</div>
                            )}
                        </div>
                    </div>
                );
            case 'textarea':
                return (
                    <div className={`field ${field.id} ${field.cols === "6" ? 'col-6' : 'full'} ${field.required ? "required" : ""}`} >
                        <label className="label" htmlFor={"#" + field.id}><span>{field.field_label}</span></label>
                        <div className="control">
                            <textarea
                                id={field.id}
                                name={field.id}
                                onChange={formik.handleChange}
                                value={formik.values[field.id]}
                            />
                            {formik.touched[field.id] && formik.errors[field.id] && (
                                <div className="error-message">{formik.errors[field.id]}</div>
                            )}
                        </div>
                    </div>
                );

            case 'checkbox':
                return (
                    <div className={`field checkbox ${field.id} ${field.cols === "6" ? 'col-6' : 'full'} ${field.required ? "required" : ""}`} >
                        <input type="checkbox" id={field.id} name={field.id} defaultValue="1" onChange={formik.handleChange} />
                        <label className="label" htmlFor={"#" + field.id}><span>{field.field_label}</span></label>
                        {formik.touched[field.id] && formik.errors[field.id] && (
                            <div className="error-message">{formik.errors[field.id]}</div>
                        )}
                    </div>
                );
            default:
                return null;
        }
    };


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
                                    {renderField(field)}
                                </>

                            ))}

                        </fieldset>
                        <div className="action">
                            <button className="btn btn-primary">Submit</button>
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
