import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'

const CareersBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {
    return (
        <>
            {blocks.filter(block => {
                return !!block.name}).map((block, index) => 
                  <CareersBlock key={index} block={block} mapToBlock={mapToBlock} />)
            }
        </>
    )
}

export const CareersBlock: React.FunctionComponent<IWPGBlockProps> = ({ block, mapToBlock }) => {

  const {
    name,
    attributes
  } = block

  console.log('>>>>>>>>>>>> Initial for block: ', name);

  if (!name) return null

  if (mapToBlock) (CareersBlock as any).MapToBlock = mapToBlock

  let TheBlock = (CareersBlock as any).MapToBlock ? (CareersBlock as any).MapToBlock(name) : null
  if (!TheBlock) TheBlock = GetTheBlock(name)

  if (!TheBlock) return null

  if (name.includes('acf/')) {
    // custom blocks
    switch (name) {
        case 'acf/our-team':
        case 'acf/box-image':
            return (
              <section className="about-our-teams about-section">
                <TheBlock blockName={name} attributes={attributes.data} />
              </section>
            )
        case 'acf/text-center-with-link':
            return (
              <section className="about-banner-cta about-section">
                <TheBlock blockName={name} attributes={attributes.data} />
              </section>
            )
        default:
            return (
              <TheBlock blockName={name} attributes={attributes.data} />
            )
      }
  }
  
  return (
    <TheBlock blockName={name} attributes={attributes} />
  )
}

export default CareersBlocks
