import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPGFileBlock:React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML
  } = props

  return (
    <div className="wpg-block wpg-b_file" dangerouslySetInnerHTML={{ __html: innerHTML }}/>
  )
}

export default WPGFileBlock