import React from "react";
import ImageWithText from "./ImageWithText";
import { IImage } from "../types";

export interface NumberTextImageRepeaterProps {
  attributes: {
    data: {
      title: string,
      description: string,
      image: IImage,
      background: IImage,
      isDarkBackground?: boolean,
    }[]
  }
}

export default function NumberTextImageRepeater(props: Readonly<NumberTextImageRepeaterProps>): JSX.Element {
  const {attributes: {data}} = props;
  console.log('prop dataa ', data)
  return (
    <div className="scroll-section pinning-2 company" data-speed="0.3">
      {data.map((list, index) => (

        <div className={`phi-${index+1} test `} key={index}>
          <ImageWithText 
            index={index + 1}
            title={list.title} 
            des={list.description} 
            image={list.image} 
            backgroundUrl={list.background} 
            isDarkBackground={list.isDarkBackground || false}
          />
        </div>
      ))}
    </div>
  );
};
