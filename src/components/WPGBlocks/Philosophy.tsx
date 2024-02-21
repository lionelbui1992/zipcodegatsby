import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'

const PhilosophyBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {
    return (
        <>
            {blocks.filter(block => {
                return !!block.name}).map((block, index) => <PhilosophyBlock key={index} block={block} mapToBlock={mapToBlock} />)
            }
        </>
    )
}

export const PhilosophyBlock: React.FunctionComponent<IWPGBlockProps> = ({ block, mapToBlock }) => {

  const {
    name,
    attributes
  } = block

  if (!name) return null

  if (mapToBlock) (PhilosophyBlock as any).MapToBlock = mapToBlock

  let TheBlock = (PhilosophyBlock as any).MapToBlock ? (PhilosophyBlock as any).MapToBlock(name) : null
  if (!TheBlock) TheBlock = GetTheBlock(name)

  if (!TheBlock) return null
  switch (name) {
    case 'acf/banner-with-image-right':
        return (
            <div className="scroll-section pinning-1" data-speed="0.2">
                <TheBlock blockName={name} attributes={attributes.data} />
            </div>
        )
    case 'acf/number-text-image-repeater':
        const {data} = attributes
        return (
            <div className="scroll-section pinning-2 company" data-speed="0.3">
                <TheBlock blockName={name} attributes={attributes.data} />
            </div>
        )
    default:
        return (
          <TheBlock blockName={name} attributes={attributes} />
        )
  }
}

export default PhilosophyBlocks
