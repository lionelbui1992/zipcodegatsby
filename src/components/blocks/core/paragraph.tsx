import React from "react";

export interface CoreParagraphProps {
  attributes: {
    content: string
  }
}

export default function CoreParagraph(props: CoreParagraphProps): JSX.Element {
  const { attributes: { content } } = props;
  
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};
