import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPGPullquoteBlock:React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML
  } = props

  return (
    <div className="wpg-block wpg-b_pullquote" dangerouslySetInnerHTML={{ __html: innerHTML }}/>
  )
}

export default WPGPullquoteBlock