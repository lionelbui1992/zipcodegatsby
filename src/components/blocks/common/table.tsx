import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPTableBlock: React.FC<IWPGBlock> = (props) => {
  let {
     htmlContent
  } = props;
  if (!htmlContent) {
    htmlContent = '';
  }
  return <div className="wpg-block wpg-b_table" dangerouslySetInnerHTML={{__html: htmlContent}}></div>
};

export default WPTableBlock
