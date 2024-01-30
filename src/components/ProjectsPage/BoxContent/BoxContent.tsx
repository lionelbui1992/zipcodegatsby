import React from "react";
import "./styles.sass";
import { Link } from "gatsby";

interface Props {
    className: string,
    boxTitle: string,
    boxContent: string,
    boxLinkText: string,
    boxLinkUrl: string
}

export const BoxContent = ({ className, boxTitle, boxContent, boxLinkText, boxLinkUrl }: Props): JSX.Element => {
    return (
        <>
            <section className="projects-box-content projects-section">
                <div
                    className={`box-image`}
                >
                    <div className="container">
                        <div className="column-box">
                            <div className="column-image">
                                <h2 className="title">{boxTitle}</h2>
                            </div>
                            <div className="column-content">
                                <div className="content-inner">
                                    <div className="content">
                                        <div className="description visible-desktop">{boxContent}</div>
                                        <Link className="btn btn-primary" to={`${boxLinkUrl}`}>{boxLinkText}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default BoxContent;