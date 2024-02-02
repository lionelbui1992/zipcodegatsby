import React from "react";
import "./style.sass";

interface Props {
  index: number;
  title: string;
  des: string;
  imgUrl: string;
  backgroundUrl: string;
  isDarkBackground: boolean;
}

export const ImageWithText = ({
  index,
  title,
  des,
  imgUrl,
  backgroundUrl,
  isDarkBackground,
}: Props): JSX.Element => {
  return (
    <>
      { (title || des || imgUrl ) && 
        <div className={`phi-content-container ${isDarkBackground ? 'bg-black' : ''}`} style={{backgroundImage: "url("+backgroundUrl+")"}}>
          <div className={`container ${index % 2 === 0 ? "img-right" : "img-left"}`}>
            { imgUrl && 
              <div className="image-container img-dk">
                <div className="image" style={{backgroundImage: "url("+imgUrl+")"}}></div>
              </div>
            }
            { ( imgUrl || des ) && 
              <div className="content">
                <div className="label">{index < 10 ? '0'+index : index}</div>
                <div className="text-container">
                  { title && <div className="title">{title}</div> }
                  { imgUrl && 
                    <div className="image-container img-mb">
                      <div className="image" style={{backgroundImage: "url("+imgUrl+")"}}></div>
                    </div>
                  }
                  { des && <div className="des">{des}</div> }
                </div>
              </div>
            }
          </div>
        </div>
      }
    </>
  );
}
export default ImageWithText;