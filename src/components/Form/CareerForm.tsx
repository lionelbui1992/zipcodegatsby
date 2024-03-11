import React from "react";
import "./contact-information.sass";
import { useFormik } from 'formik';
import { RenderForm, validationSchema } from "./helper";


export const CareerForm = ({ attributes, form }) => {
    const { title, background } = attributes;
    let _data = [],
        fields = [];

    if (typeof form !== 'undefined' && form !== null) {
        _data = JSON.parse(form);
        if (Array.isArray(_data) && _data.length > 0) {
            fields = _data[0].fields;
        }
    }

    if (!fields) return;


    let _validationSchema = validationSchema(fields);

    const formik = useFormik({
        initialValues: fields.reduce((values, field) => {
            values[field.id] = '';
            return values;
        }, {}),
        validationSchema: _validationSchema,
        onSubmit: (values, { resetForm, setSubmitting }) => {


            let url = process.env.BE_URL + 'wp-json/forminator/v1/save_career_form';
            // let url = 'https://maasi2404zip.merket.io/wp-json/forminator/v1/save_career_form';

            let formData = new FormData();
            Object.keys(values).forEach(key => {
                if (values[key] instanceof File) {
                    formData.append(key, values[key]);
                } else {
                    formData.append(key, values[key] ?? "");
                }
            });

            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success === true) {
                        document.querySelector('.career-msg-success').style.display = "block";
                        resetForm()
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



    return (
        <>
            {(title) &&
                <div className="careers-profile careers-section">
                    <div className="container">
                        {(title) &&
                            <div className="section-title">
                                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                            </div>
                        }
                        <div className="section-content" style={{ backgroundImage: `url(${background?.src})` }}>
                            <div className="available-items" >
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
                                <div className="success-message career-msg-success" style={{ display: "none" }}>
                                    <p>Thank you for your response.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default CareerForm;
