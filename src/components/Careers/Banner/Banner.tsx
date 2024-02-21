import React from "react";
import "./style.sass";
import { ImageAnimation } from '../../ImageAnimation'
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
    <div className="phi-banner-container careers-section" style={{ backgroundImage: "url(" + bannerBackground + ")" }}>
      <div className="container">
        <div className="content">
          <div className="text-container">
            <div className="label">{label}</div>
            <h1 className="banner-title" dangerouslySetInnerHTML={{ __html: bannerTitle }} />
            <div className="banner-des" dangerouslySetInnerHTML={{ __html: bannerDescription }} />
          </div>
          <div className="image-container">
            {/* <div className="image" style={{backgroundImage: "url("+bannerImageUrl+")"}}></div> */}
            <ImageAnimation classes="animation-image image-2" src={bannerImageUrl} amount={.3} alt="" duration=".6" from="end" axis="x" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;