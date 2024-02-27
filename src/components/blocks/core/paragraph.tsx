import React from "react";

export interface CoreParagraphProps {
  attributes: {
    content: string
  }
}

export default function CoreParagraph(props: CoreParagraphProps): JSX.Element {
  const { attributes: { content } } = props;
  
  return (
    <p dangerouslySetInnerHTML={{ __html: content }} />
  );
};
