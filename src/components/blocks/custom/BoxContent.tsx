import React from "react";
import "./box-content.sass";
import { Link } from "gatsby";
import { IBoxContentProps } from "../types";
import { useLang } from "../../../context/LangContext";

export default function BoxContent({ attributes }: { attributes: IBoxContentProps}): JSX.Element {
    const { title, description, button } = attributes;
    const {language} = useLang();
    return (
        <section className="projects-box-content projects-section">
            <div className="container">
                <div className="column-box">
                    <h2 className="title" dangerouslySetInnerHTML={{__html: title}} />
                    <div className="content">
                        <div className={`description ${language}`} dangerouslySetInnerHTML={{__html: description}} />
                        <Link className="btn-primary" to={button.url}  dangerouslySetInnerHTML={{__html: button.title}}></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
