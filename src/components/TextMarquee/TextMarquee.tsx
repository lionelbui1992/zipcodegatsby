import React from "react";
import "./styles.sass";

interface Props {
    marqueeBkg: string;
    marqueeContent: any[];
}

export const TextMarquee = ({
    marqueeBkg,
    marqueeContent
}: Props): JSX.Element => {
    return (
        <>
            { (marqueeContent) &&
                <section className="marquee-section" style={{backgroundImage: "url("+marqueeBkg+")"}}>
                    <div className="marquee">
                        <div className="marquee-items">
                            { marqueeContent.map((list, index) =>  
                                <div className="item" key={index}>
                                    <div className="content" dangerouslySetInnerHTML={{__html: list.content}} />
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            }
        </>
    );
};