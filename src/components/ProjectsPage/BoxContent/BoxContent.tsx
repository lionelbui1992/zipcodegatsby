import React from "react";
import "./styles.sass";
import { Link } from "gatsby";

interface Props {
    BoxContentTitle: string;
    BoxContentContent: string;
    BoxContentButtonLink: string;
    BoxContentButtonText: string;
}

export const BoxContent = ({
    BoxContentTitle,
    BoxContentContent,
    BoxContentButtonLink,
    BoxContentButtonText
}: Props): JSX.Element => {
    return (
        <>
            <section className="projects-box-content projects-section">
                <div className="container">
                    <div className="column-box">
                        <h2 className="title" dangerouslySetInnerHTML={{__html: BoxContentTitle}} />
                        <div className="content">
                            <div className="description" dangerouslySetInnerHTML={{__html: BoxContentContent}} />
                            <Link className="btn btn-primary" to={BoxContentButtonLink}>{BoxContentButtonText}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default BoxContent;