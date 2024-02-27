import React from "react";
import "./banner-image-right.sass";
import { IBannerImageRightProps } from "../types";
import { ImageAnimation } from "../../ImageAnimation";

export default function BannerImageRight({ attributes }: { attributes: IBannerImageRightProps }): JSX.Element {
  const {
    label,
    title,
    description,
    background,
    image
  } = attributes;

  return (
    <div className="phi-banner-container careers-section phi-page" style={{ backgroundImage: `url(${background?.src})` }}>
      <div className="container">
        <div className="content">
          <div className="text-container">
            <div className="label">{label}</div>
            <h1 className="banner-title" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="banner-des" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className="image-container">
            <ImageAnimation classes="animation-image image-2" alt="image" src={image.src} amount={.3} duration=".5" from="end" axis="x" />
          </div>
        </div>
      </div>
    </div>
  );
};
