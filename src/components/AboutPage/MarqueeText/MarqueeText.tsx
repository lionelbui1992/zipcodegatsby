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
                        <div className="item">Unconforming</div>
                        <div className="item">Uncommon</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncommon</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncommon</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncommon</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncommon</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncompromising</div>
                        <div className="item">Unconforming</div>
                        <div className="item">Uncompromising</div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default MarqueeText;