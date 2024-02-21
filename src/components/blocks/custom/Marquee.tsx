import React from "react";
import "./marquee.sass";
import { IMarquee } from "../types";

export const Marquee = ({ blockName, attributes}: {blockName: string, attributes: IMarquee}): JSX.Element => {

    const {background, lists} = attributes;

    return (
        <>
            <section className="marquee-section">
                { background &&
                (
                    <div className="section-bkg">
                        <img
                            loading="lazy"
                            srcSet={background.src}
                        />
                    </div>
                )}
                <div className="marquee">
                    <div className="marquee-items">
                        {lists.map((list, index) => {
                            return (
                                <div className="item" key={index}>
                                    <span><i dangerouslySetInnerHTML={{__html: list.name}} /></span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Marquee;
