import React from "react";
import ImageWithText from "./ImageWithText";

export interface NumberTextImageRepeaterProps {
  attributes: {
    data: {
        sections: string,
        sections_0_background: string,
        sections_0_description: string,
        sections_0_image: string,
        sections_0_title: string,
        sections_1_background: string,
        sections_1_description: string,
        sections_1_image: string,
        sections_1_title: string,
        sections_2_background: string,
        sections_2_description: string,
        sections_2_image: string,
        sections_2_title: string,
        sections_3_background: string,
        sections_3_description: string,
        sections_3_image: string,
        sections_3_title: string,
        sections_4_background: string,
        sections_4_description: string,
        sections_4_image: string,
        sections_4_title: string,
    }
  }
}

export default function NumberTextImageRepeater(props: NumberTextImageRepeaterProps): JSX.Element {
  const {attributes: {data}} = props;

  // convert data to contents
  const contents = [];
  for (let i = 0; i < 5; i++) {
    const title = data[`sections_${i}_title` as keyof typeof data];
    const des = data[`sections_${i}_description` as keyof typeof data];
    const imgUrl = data[`sections_${i}_image` as keyof typeof data];
    const backgroundUrl = data[`sections_${i}_background` as keyof typeof data];
    const isDarkBackground = i % 2 === 0;
    if (title || des || imgUrl) {
      contents.push({title, des, imgUrl, backgroundUrl, isDarkBackground});
    }
  }

  console.log(contents);

  return (
    <div className="scroll-section pinning-2 company" data-speed="0.3">
      {contents.map((list, index) => (
        <div className={`phi-${index+1} test `} >
          <ImageWithText 
            index={index + 1}
            title={list.title} 
            des={list.des} 
            imgUrl={list.imgUrl} 
            backgroundUrl={list.backgroundUrl} 
            isDarkBackground={list.isDarkBackground}
          />
        </div>
      ))}
    </div>
  );
};
