import React from "react";
import "./styles.sass";

export const MarqueeText = (): JSX.Element => {
    return (
        <>
            <section className="marquee-section">
                <div className="section-bkg">
                    <img
                        loading="lazy"
                        srcSet="/img/MarqueeText-bkg.png"
                    />
                </div>
                <div className="marquee">
                    <div className="marquee-items">
                        <div className="item"><span><i>Unconforming</i></span></div>
                        <div className="item"><span>Uncommon</span></div>
                        <div className="item"><span><i>Uncompromising</i></span></div>
                        <div className="item"><span>Unconforming</span></div>
                        <div className="item"><span><i>Uncompromising</i></span></div>
                        <div className="item"><span>Unconforming</span></div>
                        <div className="item"><span><i>Uncompromising</i></span></div>
                        <div className="item"><span>Unconforming</span></div>
                        <div className="item"><span><i>Uncommon</i></span></div>
                        <div className="item"><span>Uncompromising</span></div>
                        <div className="item"><span><i>Unconforming</i></span></div>
                        <div className="item"><span>Uncommon</span></div>
                        <div className="item"><span><i>Uncompromising</i></span></div>
                        <div className="item"><span>Unconforming</span></div>
                        <div className="item"><span><i>Uncompromising</i></span></div>
                        <div className="item"><span>Unconforming</span></div>
                        <div className="item"><span><i>Uncompromising</i></span></div>
                        <div className="item"><span>Unconforming</span></div>
                        <div className="item"><span><i>Uncommon</i></span></div>
                        <div className="item"><span>Uncompromising</span></div>
                        <div className="item"><span><i>Unconforming</i></span></div>
                        <div className="item"><span>Uncommon</span></div>
                        <div className="item"><span><i>Uncompromising</i></span></div>
                        <div className="item"><span>Unconforming</span></div>
                        <div className="item"><span><i>Uncompromising</i></span></div>
                        <div className="item"><span>Unconforming</span></div>
                        <div className="item"><span><i>Uncompromising</i></span></div>
                        <div className="item"><span>Unconforming</span></div>
                        <div className="item"><span><i>Uncommon</i></span></div>
                        <div className="item"><span>Uncompromising</span></div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default MarqueeText;