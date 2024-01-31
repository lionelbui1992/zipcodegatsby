import React from "react";
import "./style.sass";

interface Props {
  label: string;
  bannerTitle: string;
  bannerDescription: string;
  bannerImageUrl: string;
  bannerBackground: string;
}

export const Banner = ({
  label,
  bannerTitle,
  bannerDescription,
  bannerImageUrl,
  bannerBackground,
}: Props): JSX.Element => {
  return (
    <div className="phi-banner-container" style={{backgroundImage: "url("+bannerBackground+")"}}>
      <div className="container">
        <div className="content">
          <div className="text-container">
            <div className="label">{label}</div>
            <h1 className="banner-title">{bannerTitle}</h1>
            <div className="banner-des">{bannerDescription}</div>
          </div>
          <div className="image-container">
            <div className="image" style={{backgroundImage: "url("+bannerImageUrl+")"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;