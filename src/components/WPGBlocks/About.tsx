import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'

const AboutBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {
  const firstAnimatoinBlocks = blocks.filter((block, index) => {
    return block.name === "acf/banner-text-has-animation" || block.name === "acf/marquee"
  });

  let i = 0,
    j = 0;
  let acceptedBlocks = [];
  let rejectedBlocks = [];

  blocks.filter((block, index) => {
    return block.name !== "acf/banner-text-has-animation" && block.name !== "acf/marquee"
  }).forEach(block => {

    if ((block.name === "acf/box-image" || block.name === "acf/our-team") && (i < 1 || j < 1)) {

      if (block.name === "acf/box-image") {
        acceptedBlocks.push(block);
        i++;
      }

      if (block.name === "acf/our-team") {
        acceptedBlocks.push(block);
        j++;
      }
    } else {
      rejectedBlocks.push(block);
    }
  });
  return (
    <div className="about-page page-content">

      <div className="pinning-1 overlay-animation" style={{ position: "relative", zIndex: 2 }}>
        {firstAnimatoinBlocks.filter(block => {
          return !!block.name
        }).map((block, index) =>
          <AboutBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />
        )}
      </div>

      <div className="pinning-2 overlay-animation" style={{ position: "relative", zIndex: 3 }}>
        {acceptedBlocks.filter(block => {
          return !!block.name
        }).map((block, index) =>
          <AboutBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />
        )}
      </div>

      {rejectedBlocks.filter(block => {
        return !!block.name
      }).map((block, index) =>
        <div key={index} className={`${index !== rejectedBlocks.length - 1 ? "overlay-animation" : "end-overlay-animation"}`} style={{ position: "relative", zIndex: 3 }}>
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
