import React from "react";
import "./contact-information.sass";
import uploadImg from "./images/upload-minimalistic_svgrepo.com.svg";

interface Props {
    ProfileTitle: string;
    ProfileFormTitle: string;
}

export const Profile = ({
    ProfileTitle,
    ProfileFormTitle
}: Props): JSX.Element => {
    return (
        <>
            { (ProfileTitle) && 
                <div className="careers-profile careers-section">
                    <div className="container">
                        { (ProfileTitle) && 
                            <div className="section-title">
                                <h2 dangerouslySetInnerHTML={{__html: ProfileTitle}} />
                            </div>
                        }
                        <div className="section-content">
                            <div className="available-items">
                                <h3 dangerouslySetInnerHTML={{__html: ProfileFormTitle}} />
                                <form action="">
                                    <fieldset className="fieldset">
                                        <div className="field name col-6 required">
                                            <label className="label" htmlFor="fullname"><span>Full Name*</span></label>
                                            <div className="control input-text">
                                                <input name="fullname" id="fullname" title="Name" type="text" 
                                                    placeholder="Enter Your Full Name" aria-required="true" />
                                            </div>
                                        </div>
                                        <div className="field email col-6 required">
                                            <label className="label" htmlFor="email"><span>Email*</span></label>
                                            <div className="control input-text">
                                                <input name="email" id="email" title="Email" type="text"
                                                    placeholder="Enter Your Email" data-validate="{required:true}" aria-required="true" />
                                            </div>
                                        </div>
                                        <div className="field phone col-6 required">
                                            <label className="label" htmlFor="phone"><span>Phone Number*</span></label>
                                            <div className="control input-text">
                                                <input name="phone" id="phone" title="Name" type="text"
                                                    placeholder="Enter Your Phone Number" data-validate="{required:true}" aria-required="true" />
                                            </div>
                                        </div>
                                        <div className="field company col-6 required">
                                            <label className="label" htmlFor="company"><span>Current Company</span></label>
                                            <div className="control input-text">
                                                <input name="company" id="company" title="Company" type="text"
                                                    placeholder="Enter Your Current Company" data-validate="{required:true}" aria-required="true" />
                                            </div>
                                        </div>
                                        <div className="field position full required">
                                            <label className="label" htmlFor="position"><span>Interested Position*</span></label>
                                            <div className="control input-text">
                                                <select name="position" id="position" title="Position"
                                                    data-validate="{required:true}" aria-required="true" >
                                                    <option value="" disabled selected hidden>Select You Interested Position</option>
                                                    <option value="1">Position 1</option>
                                                    <option value="2">Position 2</option>
                                                    <option value="3">Position 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="field attached col-6 required">
                                            <label className="label" htmlFor="attached"><span>Attached Resume*</span></label>
                                            <div className="control input-text file-upload">
                                                <div className="upload-icon"><img src={uploadImg} alt="upload" /></div>
                                                <p>Max file size is 10 MB</p>
                                                <input type="file" />
                                            </div>
                                        </div>
                                        <div className="field salary col-6 required">
                                            <label className="label" htmlFor="salary"><span>Expected Salary*</span></label>
                                            <div className="control input-text">
                                                <input name="salary" id="salary" title="Salary" type="text"
                                                    data-validate="{required:true}" aria-required="true" />
                                            </div>
                                        </div>
                                        <div className="field checkbox  full required">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label className="label" htmlFor="vehicle1">
                                                <span>Grant permission for sharing information within the internal Zipcode’s company</span>
                                            </label>
                                        </div>

                                        <div className="field checkbox  full required">
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike" />
                                            <label className="label" htmlFor="vehicle2"><span>Receiving news or updates from Zipcode</span></label>
                                        </div>
                                        <div className="field submit col-12 text-right">
                                            <div className="control">
                                                <button type="submit" className="btn" value="Submit">Submit</button>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default Profile;