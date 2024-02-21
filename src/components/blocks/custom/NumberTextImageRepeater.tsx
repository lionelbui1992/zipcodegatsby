import React from "react";
import ImageWithText from "./ImageWithText";
import { NumberTextImageRepeaterProps } from "../types";

export default function NumberTextImageRepeater({ attributes }: { attributes: NumberTextImageRepeaterProps }): JSX.Element {
  const { sections } = attributes;
  if (!sections) return
  return (
    <div className="scroll-section pinning-2 company" data-speed="0.3">
      {sections.map((list, index) => (

        <div className={`phi-${index + 1} test `} key={index}>
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
