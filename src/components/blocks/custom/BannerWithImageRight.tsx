import React from "react";
import { IImage } from "../types";

export interface BannerImageRightProps {
  attributes: {
    data: {
        label: string,
        title: string
        description: string,
        background: IImage,
        image: IImage,
        is_dark_section: string,
    }
  }
}

export default function BannerImageRight(props: BannerImageRightProps): JSX.Element {
  const {attributes: {data: {
    label,
    title: bannerTitle,
    description: bannerDescription,
    background: bannerBackground,
    image: bannerImageUrl
  }}} = props;
  
  return (
    <div className="phi-banner-container careers-section" style={{backgroundImage: "url("+ bannerBackground.src +")"}}>
      <div className="container">
        <div className="content">
          <div className="text-container">
            <div className="label">{label}</div>
            <h1 className="banner-title" dangerouslySetInnerHTML={{__html: bannerTitle}} />
            <div className="banner-des" dangerouslySetInnerHTML={{__html: bannerDescription}} />
          </div>
          <div className="image-container">
            <div className="image" style={{backgroundImage: "url("+bannerImageUrl.src+")"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
