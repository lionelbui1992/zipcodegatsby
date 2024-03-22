import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPGCodeBlock:React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML
  } = props

  return (
    <pre className="wpg-block wpg-b_Code wp-block-code"><code dangerouslySetInnerHTML={{ __html: innerHTML }}></code></pre>
  )
}

export default WPGCodeBlock