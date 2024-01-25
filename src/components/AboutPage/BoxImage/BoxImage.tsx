import React from "react";
import "./styles.sass";
import { Buttons } from "../../Buttons";

export const BoxImage = (): JSX.Element => {
    return (
        <>
            <div className="container">
                <div className="column-box">
                    <div className="column-image">
                        <div className="image-inner">
                            <img
                                loading="lazy"
                                srcSet="https://s3-alpha-sig.figma.com/img/5053/4969/ae7045a5db9a4c15c0a105fe9425c9bb?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D-ySdWaXd3eotFLSaPdF3qCgb9N0twfN1-qMTSlql0BmTsEgwrD38QMXw0DGDDmwOyi6KP5-3CKFXYjteosg0NOfVD6T3Ii72kFqHGE7oJrLONI36nj~uNjL2bXmhYN-Bng9KOAV6vjtViXcwuP-Jqk93NmOh0VDMay9~Cnv10hzSB88LQm0mN2~6ezgy42krfxiyCBL-lIui8RfulbNCOzooNDnTN~k8WU073OXt7gAlL18DoMAPbNbnuvCW17sX~KLAleQ9F0tz4AvOniRop9wLy8OA-G0U93bEJrCFsaHyPLstkGPrlN664xli3Zs-XtJBPzyxy9lSK-c6JWpdA__"className="img"
                                alt="Image Description"
                            />
                        </div>
                    </div>
                    <div className="column-content">
                        <div className="content-inner">
                            <h2 className="title">Foundations of the Future</h2>
                            <div className="content">
                                <div className="description">
                                    <p>Our current pipeline is centered around Bangkok, with expansion plans across Thailand.</p>
                                </div>
                                <Buttons 
                                    className="btn btn-primary"
                                    text="View our Projects"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BoxImage;