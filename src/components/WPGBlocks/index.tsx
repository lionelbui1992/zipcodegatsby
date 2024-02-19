import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'

const WPGBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {
    return (
        <div className="wpg-blocks">
            {blocks.filter(block => {
                console.log(block); return !!block.name}).map((block, index) => <WPGBlock key={index} block={block} mapToBlock={mapToBlock} />)
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
    
    console.log('>>>>>>>>>>> render for : ', block)

  if (!name) return null

  if (mapToBlock) (WPGBlock as any).MapToBlock = mapToBlock

  let TheBlock = (WPGBlock as any).MapToBlock ? (WPGBlock as any).MapToBlock(name) : null
  if (!TheBlock) TheBlock = GetTheBlock(name)

  if (!TheBlock) return null

  return (
    <TheBlock blockName={name} attributes={attributes} innerBlocks={innerBlocks} innerHTML={innerHTML} />
  )
}

export default WPGBlocks