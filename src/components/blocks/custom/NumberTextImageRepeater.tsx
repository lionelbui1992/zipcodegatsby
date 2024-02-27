import React from "react";
import ImageWithText from "./ImageWithText";
import { NumberTextImageRepeaterProps } from "../types";

export default function NumberTextImageRepeater({ attributes }: { attributes: NumberTextImageRepeaterProps }): JSX.Element {
  const { sections } = attributes;
  console.log(sections);
  if (!sections) return
  return (

    <>
      {sections.map((list, index) => (
        <div className={`phi-${index + 1} test  ${index !== sections.length - 1 ? "overlay-animation" : "end-overlay-animation"}`} key={index}>
          <ImageWithText
            index={index + 1}
            title={list.title}
            des={list.description}
            image={list.image}
            backgroundUrl={list.background}
            isDarkBackground={list.is_dark_section}
          />
        </div>
      ))}
    </>
  );
};
