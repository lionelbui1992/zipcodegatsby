import React from 'react';
import * as Yup from 'yup';

export const RenderForm = (field, formik) => {
    switch (field.type) {
        case 'text':
        case 'name':
        case 'phone':
        case 'email':
            return (
                <div className={`field ${field.id} ${field.cols === "6" ? 'col-6' : 'full'} ${field.required ? "required" : ""}`} >
                    <label className="label" htmlFor={field.id}><span>{field.field_label}</span></label>
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

        case 'select':
            return (
                <div className={`field ${field.id} ${field.cols === "6" ? 'col-6' : 'full'} ${field.required ? "required" : ""}`} >
                    <label className="label" htmlFor={field.id}><span>{field.field_label}</span></label>
                    <div className="control">
                        <select id={field.id}
                            name={field.id}
                            type={field.type}
                            onChange={formik.handleChange}
                            value={formik.values[field.id]}
                        >
                            {field.options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        {formik.touched[field.id] && formik.errors[field.id] && (
                            <div className="error-message">{formik.errors[field.id]}</div>
                        )}
                    </div>
                </div>
            );

        case 'upload':
            const handleFileChange = (event) => {
                const file = event.currentTarget.files[0];
                formik.setFieldValue(field.id, file);
                // Assuming you want to store just the file name, not the file object
                formik.setFieldValue(`${field.id}_name`, file ? file.name : '');
                formik.setFieldValue(`${field.id}_name`, file ? file.name : '');
            };
            return (
                <div className={`field ${field.id} ${field.cols === "6" ? 'col-6' : 'full'} ${field.required ? "required" : ""}`} >
                    <label className="label" htmlFor={field.id}><span>{field.field_label}</span></label>
                    <div className="control file-upload">
                        <div className="upload-icon">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.71729 14.3203C4.11424 14.3203 4.43604 14.6561 4.43604 15.0703C4.43604 16.5057 4.43756 17.5068 4.53489 18.2622C4.62943 18.996 4.80236 19.3845 5.06759 19.6613C5.33282 19.9381 5.7052 20.1185 6.4084 20.2172C7.13228 20.3187 8.09168 20.3203 9.46729 20.3203H15.2173C16.5929 20.3203 17.5523 20.3187 18.2762 20.2172C18.9794 20.1185 19.3517 19.9381 19.617 19.6613C19.8823 19.3845 20.0551 18.996 20.1497 18.2622C20.247 17.5068 20.2485 16.5057 20.2485 15.0703C20.2485 14.6561 20.5703 14.3203 20.9673 14.3203C21.3642 14.3203 21.686 14.6561 21.686 15.0703V15.1252C21.686 16.4928 21.686 17.5951 21.5744 18.4621C21.4584 19.3622 21.2103 20.12 20.6335 20.7219C20.0566 21.3239 19.3304 21.5828 18.4678 21.7038C17.6369 21.8203 16.5805 21.8203 15.2699 21.8203H9.4147C8.10409 21.8203 7.0477 21.8203 6.21686 21.7038C5.35425 21.5828 4.62796 21.3239 4.05112 20.722C3.47428 20.12 3.22618 19.3622 3.1102 18.4621C2.9985 17.5951 2.99852 16.4928 2.99854 15.1252C2.99854 15.1069 2.99854 15.0886 2.99854 15.0703C2.99854 14.6561 3.32033 14.3203 3.71729 14.3203Z" fill="#0068FF" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3424 2.32031C12.5442 2.32031 12.7366 2.40883 12.8728 2.56423L16.7061 6.93923C16.974 7.24493 16.9537 7.71933 16.6607 7.99883C16.3678 8.27833 15.9131 8.25709 15.6453 7.95139L13.0611 5.00211V16.0703C13.0611 16.4845 12.7393 16.8203 12.3424 16.8203C11.9454 16.8203 11.6236 16.4845 11.6236 16.0703V5.00211L9.0395 7.95139C8.77165 8.25709 8.31701 8.27833 8.02405 7.99883C7.73109 7.71933 7.71072 7.24493 7.97858 6.93923L11.8119 2.56423C11.9481 2.40883 12.1405 2.32031 12.3424 2.32031Z" fill="#0068FF" />
                            </svg>
                        </div>
                        <p>Max file size is 10 MB</p>
                        <input type="file"
                            id={field.id}
                            name={field.id}
                            onChange={handleFileChange} />
                        <span className="file-name">{formik.values[`${field.id}_name`] || 'No file chosen'}</span>
                        {formik.touched[field.id] && formik.errors[field.id] && (
                            <div className="error-message">{formik.errors[field.id]}</div>
                        )}
                    </div>
                </div>
            );

        case 'textarea':
            return (
                <div className={`field ${field.id} ${field.cols === "6" ? 'col-6' : 'full'} ${field.required ? "required" : ""}`} >
                    <label className="label" htmlFor={field.id}><span>{field.field_label}</span></label>
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
                    {field.options.map((option) => (
                        <>
                            <input type="checkbox" id={field.id + option.key} name={field.id + '[]'} defaultValue={option.value} onChange={formik.handleChange} />
                            <label className="label" htmlFor={field.id + option.key} ><span>{option.label}</span></label>
                        </>
                    ))}

                    {formik.touched[field.id] && formik.errors[field.id] && (
                        <div className="error-message">{formik.errors[field.id]}</div>
                    )}
                </div>
            );
        default:
            return null;
    }
}


export const validationSchema = (fields) => {
    return Yup.object().shape(
        fields.reduce((schema, field) => {
            let validator = Yup.string();

            if (field.type === "checkbox" || field.type === "upload") {
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
        }, {})
    );
}