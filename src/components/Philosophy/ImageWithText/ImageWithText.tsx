import React from "react";
import "./style.sass";

interface Props {
  index: number;
  title: string;
  des: string;
  imgUrl: string;
  backgroundUrl: string;
}

export const ImageWithText = ({
  index,
  title,
  des,
  imgUrl,
  backgroundUrl,
}: Props): JSX.Element => {
  return (
    <div className="phi-content-container" style={{backgroundImage: "url("+backgroundUrl+")"}}>
      <div className={`container ${index % 2 === 0 ? "img-right" : "img-left"}`}>
        <div className="image-container img-dk">
          <div className="image" style={{backgroundImage: "url("+imgUrl+")"}}></div>
        </div>
        <div className="content">
          <div className="label">{index < 10 ? '0'+index : index}</div>
          <div className="text-container">
            <div className="title">{title}</div>
            <div className="image-container img-mb">
              <div className="image" style={{backgroundImage: "url("+imgUrl+")"}}></div>
            </div>
            <div className="des">{des}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImageWithText;