import WPGBlocks from '../../WPGBlocks'
import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPGQuoteBlock:React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML
  } = props

  return (
    <div className="wpg-block wpg-b_quote">
      <WPGBlocks blocks={props.innerBlocks} />
    </div>
  )
}

export default WPGQuoteBlock