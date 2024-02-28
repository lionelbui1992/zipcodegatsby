import React from "react";
import "./contact-information.sass";
import { useFormik } from 'formik';
import { RenderForm, validationSchema } from "./helper";


export const CareerForm = ({ attributes, form }) => {
    const { title } = attributes;
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
        onSubmit: (values, { resetForm }) => {
            let url = process.env.BE_URL + 'wp-json/forminator/v1/save_career_form';
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
                        document.querySelector('.success-message').style.display = "block";
                        resetForm()
                    } else {
                        alert(data.data)
                    }

                })
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
                        <div className="section-content">
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
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                                <div className="success-message" style={{ display: "none" }}>
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
