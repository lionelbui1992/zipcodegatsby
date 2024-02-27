import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPGParagraphBlock: React.FC<IWPGBlock> = (props) => {
  const {
    attributes: { content }, // Update the type of attributes and destructure the content property
  } = props;

  return (
    <p className="wpg-block wpg-b_paragraph" dangerouslySetInnerHTML={{ __html: content }} /> // Use the content property directly
  );
};

export default WPGParagraphBlock