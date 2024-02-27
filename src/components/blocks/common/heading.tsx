import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPGHeadingBlock:React.FC<IWPGBlock> = (props) => {
  const {
    attributes: {
      content,
      level,
    }
  } = props

  const innerHTML = `<h${level}>${content}</h${level}>`
  const className = `wpg-block wpg-b_heading wpg-b_heading-${level}`

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: innerHTML }}/>
  )
}

export default WPGHeadingBlock
