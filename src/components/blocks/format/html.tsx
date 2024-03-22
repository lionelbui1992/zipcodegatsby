import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPGHtmlBlock: React.FC<IWPGBlock> = (props) => {
  let {
     htmlContent
  } = props;
  if (!htmlContent) {
    htmlContent = '';
  }
  return <div className="wpg-block wpg-b_html" dangerouslySetInnerHTML={{__html: htmlContent}}></div>
};

export default WPGHtmlBlock
