import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'
import { useEffect, useRef } from 'react';
import { handleCareerOverlayAnimation } from '../../animation';

const CareersBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, form, mapToBlock }) => {

  const container = useRef(null);

  const lastAnimatoinBlocks = blocks.filter((block, index) => {
    return block.name === "acf/contact-information"
  });

  const firstAnimatoinBlocks = blocks.filter(block => !lastAnimatoinBlocks.includes(block));
  useEffect(() => {
    // Set the blocks state
    if (container.current) {
      setTimeout(() => {
        handleCareerOverlayAnimation();
      }, 1000);
    }
    // if (!container) return;

  }, [blocks]);


  return (
    <div className='page-content page-careers' ref={container}>
      {firstAnimatoinBlocks.filter(block => {
        return !!block.name
      }).map((block, index) =>
        <div className={"pinning-" + (index + 1)} key={index} >
          <CareersBlock order={`${index}`} form={form} block={block} mapToBlock={mapToBlock} />
        </div>
      )
      }

      {lastAnimatoinBlocks.filter(block => {
        return !!block.name
      }).map((block, index) =>
        <div key={index} className={(index === lastAnimatoinBlocks.length - 1) ? "end-overlay-animation" : "pinning-" + (index + 1 + firstAnimatoinBlocks.length)}>
          <CareersBlock key={index} order={`${index}`} form={form} block={block} mapToBlock={mapToBlock} />
        </div>
      )
      }
    </div>
  )
}

export const CareersBlock: React.FunctionComponent<IWPGBlockProps> = ({ block, form, mapToBlock }) => {

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
      case 'acf/career-perk':
        return (
          <TheBlock blockName={name} attributes={attributes.data} />
        )
      case 'acf/box-image':
        return (
          <TheBlock blockName={name} attributes={attributes.data} />
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
