import React from "react";
import "./style.sass";

export const TextMarquee = (): JSX.Element => {
  return (
    <div className="divider text-marquee">
      <div className="div-2">
        <img className="background" alt="Background" src="/img/background-1920x1080-blue-texture-1.png" />
        <div className="frame-2">
          <p className="making-real-estate">
            <span className="text-wrapper">Making Real Estate </span>
            <span className="span">R</span>
            <span className="text-wrapper-2">eal</span>
            <span className="text-wrapper-3">&nbsp;</span>
            <span className="text-wrapper-2">Again</span>
            <span className="text-wrapper-3">&nbsp;</span>
          </p>
          <img className="path" alt="Path" src="/img/path-139-1.svg" />
          <p className="making-real-estate">
            <span className="text-wrapper">Making Real Estate </span>
            <span className="span">R</span>
            <span className="text-wrapper-2">eal</span>
            <span className="text-wrapper-3">&nbsp;</span>
            <span className="text-wrapper-2">Again</span>
            <span className="text-wrapper-3">&nbsp;</span>
          </p>
          <img className="path" alt="Path" src="/img/path-140.svg" />
          <p className="making-real-estate">
            <span className="text-wrapper">Making Real Estate </span>
            <span className="span">R</span>
            <span className="text-wrapper-2">eal</span>
            <span className="text-wrapper-3">&nbsp;</span>
            <span className="text-wrapper-2">Again</span>
            <span className="text-wrapper-3">&nbsp;</span>
          </p>
          <img className="path" alt="Path" src="/img/path-141.svg" />
          <p className="making-real-estate">
            <span className="text-wrapper">Making Real Estate </span>
            <span className="span">R</span>
            <span className="text-wrapper-2">eal</span>
            <span className="text-wrapper-3">&nbsp;</span>
            <span className="text-wrapper-2">Again</span>
            <span className="text-wrapper-3">&nbsp;</span>
          </p>
          <img className="img" alt="Path" src="/img/path-142.svg" />
        </div>
      </div>
    </div>
  );
};