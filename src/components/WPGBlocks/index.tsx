import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'

const WPGBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {
  return (
    <div className='page-content'>
      {blocks && blocks.filter(block => {
        return !!block.name
      }).map((block, index) => <WPGBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />)
      }
    </div>
  )
}

export const WPGBlock: React.FunctionComponent<IWPGBlockProps> = ({ block, mapToBlock }) => {

  const {
    name,
    attributes,
    innerBlocks,
    innerHTML } = block

  if (!name) return null

  if (mapToBlock) (WPGBlock as any).MapToBlock = mapToBlock

  let TheBlock = (WPGBlock as any).MapToBlock ? (WPGBlock as any).MapToBlock(name) : null
  if (!TheBlock) TheBlock = GetTheBlock(name)

  if (!TheBlock) return null

  if (name.includes('acf/')) {
    const { data } = attributes
    return <TheBlock blockName={name} attributes={data} />
  }

  return (
    <TheBlock blockName={name} attributes={attributes} innerBlocks={innerBlocks} innerHTML={innerHTML} />
  )
}

export default WPGBlocks
