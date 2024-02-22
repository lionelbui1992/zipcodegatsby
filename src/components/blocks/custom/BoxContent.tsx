import React from "react";
import "./box-content.sass";
import { Link } from "gatsby";
import { IButton } from "../types";

interface IBoxContentProps {
    title: string;
    description: string;
    button: IButton;
}

export const BoxContent = ({ attributes }: { attributes: IBoxContentProps}): JSX.Element => {
    const { title, description, button } = attributes;

    return (
        <section className="projects-box-content projects-section">
            <div className="container">
                <div className="column-box">
                    <h2 className="title" dangerouslySetInnerHTML={{__html: title}} />
                    <div className="content">
                        <div className="description" dangerouslySetInnerHTML={{__html: description}} />
                        <Link className="btn btn-primary" to={button.url}>{button.title}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default BoxContent;

