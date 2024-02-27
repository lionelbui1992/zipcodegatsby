import { WPGBlock } from '../../WPGBlocks'
import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPGListBlock:React.FC<IWPGBlock> = (props) => {
  const {
    innerBlocks,
  } = props

  if (!Array.isArray(innerBlocks)) {
    console.warn('Columns should have innerBlocks')
    return null
  }

  return (
    <ul>
      {innerBlocks.map((col, ci) =>
        <li key={ci}>
          {col.attributes.content}
        </li>
      )}
    </ul>
  )
}

export default WPGListBlock