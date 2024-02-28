import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'

const CareersBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, form, mapToBlock }) => {
 
  return (
    <>
      {blocks.filter(block => {
        return !!block.name
      }).map((block, index) =>
        <div key={index} className={`${block.name.includes('marquee') ? "initial-height" : ""} ${index !== blocks.length - 1 ? "overlay-animation" : "end-overlay-animation"}`}>
          <CareersBlock key={index} order={`${index}`} form={form} block={block} mapToBlock={mapToBlock} />
        </div>
      )
      }
    </>
  )
}

export const CareersBlock: React.FunctionComponent<IWPGBlockProps> = ({ block, form,  mapToBlock }) => {

  const {
    name,
    attributes
  } = block

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
          <section className="career-perks careers-section ">
            <TheBlock blockName={name} attributes={attributes.data} />
          </section>
        )
      case 'acf/text-center-with-link':
        return (
          <section className="about-banner-cta about-section">
            <TheBlock blockName={name} attributes={attributes.data} />
          </section>
        )
      case 'acf/contact-information':
        return (
          <TheBlock blockName={name} form={form} attributes={attributes.data} />
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
