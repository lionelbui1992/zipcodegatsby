import React from "react";
import "./styles.sass";

export const TextMarquee = (): JSX.Element => {
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
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                    <div className="item"><span>Making Real Estate <i>Real Again</i></span></div>
                </div>
            </div>
        </section>
    </>
  );
};