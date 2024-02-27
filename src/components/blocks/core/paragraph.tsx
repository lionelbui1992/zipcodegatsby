import React from "react";

export interface CoreParagraphProps {
  attributes: {
    className?: string
    content: string
  }
}

export default function CoreParagraph(props: CoreParagraphProps): JSX.Element {
  const { attributes: { className, content } } = props;

  const classes = className ? `wp-block-paragraph ${className}` : 'wp-block-paragraph';
  
  return (
    <p className={classes} dangerouslySetInnerHTML={{ __html: content }} />
  );
};
