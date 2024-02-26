import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'
import { useEffect } from 'react';
import { handleGeneralOverlayAnimation } from '../../animation';

const AboutBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {

  useEffect(() => {
    setTimeout(handleGeneralOverlayAnimation, 1500)

  }, [])
  return (
    <div className="about-page">
      {blocks.filter(block => {
        return !!block.name
      }).map((block, index) =>
        <div key={index} className={`${block.name.includes('marquee') ? "initial-height" : ""} ${index !== blocks.length - 1 ? "overlay-animation" : "end-overlay-animation"}`}>
          <AboutBlock order={`${index}`} block={block} mapToBlock={mapToBlock} />
        </div>
      )}
    </div>
  )
}

export const AboutBlock: React.FunctionComponent<IWPGBlockProps> = ({ order, block, mapToBlock }) => {

  const {
    name,
    attributes
  } = block

  if (!name) return null

  if (mapToBlock) (AboutBlock as any).MapToBlock = mapToBlock

  let TheBlock = (AboutBlock as any).MapToBlock ? (AboutBlock as any).MapToBlock(name) : null
  if (!TheBlock) TheBlock = GetTheBlock(name)

  if (!TheBlock) return null

  if (name.includes('acf/')) {
    // custom blocks
    switch (name) {
      case 'acf/banner-text-has-animation':
        return (
          <section className="about-banner-top about-section  bg-black">
            <TheBlock order={order} blockName={name} attributes={attributes.data} />
          </section>
        )
      case 'acf/our-team':
      case 'acf/box-image':
        return (
          <section className="about-our-teams about-section">
            <TheBlock order={order} blockName={name} attributes={attributes.data} />
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

export default AboutBlocks
