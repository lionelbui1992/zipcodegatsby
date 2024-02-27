import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPGParagraphBlock: React.FC<IWPGBlock> = (props) => {
  const {
    attributes: { className, content }, // Update the type of attributes and destructure the content property
  } = props;

  const classes = className? `wpg-block wpg-b_paragraph ${className}` : 'wpg-block wpg-b_paragraph';

  return (
    <p className={classes} dangerouslySetInnerHTML={{ __html: content }} /> // Use the content property directly
  );
};

export default WPGParagraphBlock