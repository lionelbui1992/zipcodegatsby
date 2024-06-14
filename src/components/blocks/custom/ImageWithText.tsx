import React from "react";
import { Link } from "gatsby";
import "./image-with-text.sass";
import { IImageWithTextProps } from "../types";

export const ImageWithText = ({
  index,
  title,
  des,
  image,
  backgroundUrl,
  isDarkBackground,
  button
}: IImageWithTextProps): JSX.Element => {
  return (
    <>
      {(title || des || image) &&
        <div className={`phi-content-container ${isDarkBackground == '1' ? 'bg-black' : ''}`} style={{ backgroundImage: backgroundUrl.src ? `url(${backgroundUrl.src})` : 'none', backgroundColor: backgroundUrl ? 'transparent' : '#fff' }}>
          <div className={`container ${index % 2 === 0 ? "img-right" : "img-left"}`}>
            {image &&
              <div className="image-container img-dk">
                <div className="image" style={{ backgroundImage: "url(" + image.src + ")" }}></div>
              </div>
            }
            {(image || des) &&
              <div className="content">
                <div className="content-inner">
                  <div className="label">{index < 10 ? '0' + index : index}</div>
                  <div className="text-container">
                    {title && <div className="title">{title}</div>}
                    {image &&
                      <div className="image-container img-mb">
                        <div className="image" style={{ backgroundImage: "url(" + image.src + ")" }}></div>
                      </div>
                    }
                    <div>
                      {des && <div className="des">{des}</div>}
                      {button && button.title && (
                        <Link className={`btn btn-primary ${isDarkBackground == '1' ? 'btn-white' : ''}`} to={`${button.url}`}>{button.title}</Link>
                      )}
                    </div>
                  </div>
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
