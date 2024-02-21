import React from "react";
import "./banner-image-right.sass";
import { IBannerImageRightProps } from "../types";

export default function BannerImageRight({attributes}: {attributes: IBannerImageRightProps}): JSX.Element {
  const {
    label,
    title,
    description,
    background,
    image
  } = attributes;
  
  return (
    <div className="phi-banner">
    <div className="phi-banner-container careers-section" style={{backgroundImage: `url(${background?.src})`}}>
      <div className="container">
        <div className="content">
          <div className="text-container">
            <div className="label">{label}</div>
            <h1 className="banner-title" dangerouslySetInnerHTML={{__html: title}} />
            <div className="banner-des" dangerouslySetInnerHTML={{__html: description}} />
          </div>
          <div className="image-container">
            <div className="image" style={{backgroundImage: `url(${image.src})`}}></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
