import { WPGBlock } from '../../WPGBlocks'
import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPGListBlock:React.FC<IWPGBlock> = (props) => {
  const {
    attributes,
    innerBlocks,
  } = props

  if (!Array.isArray(innerBlocks)) {
    console.warn('Columns should have innerBlocks')
    return null
  }

  const classes = attributes?.className ? `wp-block-list ${attributes.className}` : 'wp-block-list'

  return (
    <ul className={classes}>
      {innerBlocks.map((col, ci) =>
        <li key={ci}>
          {col.attributes.content}
        </li>
      )}
    </ul>
  )
}

export default WPGListBlock