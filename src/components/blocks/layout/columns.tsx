import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'
import { WPGBlock } from '../../WPGBlocks'

const WPGColumnsBlock:React.FC<IWPGBlock> = (props) => {
  const {
    attributes,
    innerBlocks,
  } = props

  if (!Array.isArray(innerBlocks)) {
    console.warn('Columns should have innerBlocks')
    return null
  }

  const cols = innerBlocks.length
  const classes = attributes?.className ? `wp-block-columns has-${cols}-columns ${attributes.className}` : `wp-block-columns has-${cols}-columns`

  const columns = innerBlocks.map((col, ci) =>
      <div className={col.attributes?.className ? `wp-block-column ${ci+1}-column ${col.attributes.className}` : `wp-block-column ${ci+1}-column`} key={ci}>
        {col.innerBlocks.map((block, bi) => <WPGBlock key={bi} order={`${bi}`} block={block}/>)}
      </div>
  )

  return (
    <div className={classes}>
      {columns}
    </div>
  )
}

export default WPGColumnsBlock