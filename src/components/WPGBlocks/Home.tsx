import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'
import { useRef, useEffect } from "react";
import "../../assets/sass/homepage.sass";
import { handleOverlayAnimation } from '../../animation';



const HomeBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {


  // move first 2 blocks to first animation
  let firstAnimatoinBlocks = [];
  if (blocks && blocks.length > 1) {
    firstAnimatoinBlocks.push(blocks[0]);
    firstAnimatoinBlocks.push(blocks[1]);
  } else if (blocks && blocks.length === 1) {
    firstAnimatoinBlocks.push(blocks[0]);
  }

  const secondAnimatoinBlocks = blocks.filter((block, index) => {
    return index > 1
  });

  const container = useRef(null);
  useEffect(() => {

    if (!container) return;

    setTimeout(handleOverlayAnimation, 1000)

  }, []);
  return (
    <div className="scrollTrigger" ref={container}>
      <div className="scroll-section header-placeholder" ></div>

      <div className="scroll-section pinning-1" data-speed="0.2">
        {firstAnimatoinBlocks.filter((block) => {
          return !!block.name
        }).map((block, index) =>
          <HomeBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />
        )
        }
      </div>
      <div className="scroll-section pinning-2 company" data-speed="0.3">
        {secondAnimatoinBlocks.filter((block, ind) => {
          return !!block.name
        }).map((block, index) =>
          <div key={index + firstAnimatoinBlocks.length} className={`relative-section item-${index + 1}`}>
            <HomeBlock order={`${index + 1 + firstAnimatoinBlocks.length}`} block={block} mapToBlock={mapToBlock} />
          </div>
        )}
      </div>
    </div>
  )
}

export const HomeBlock: React.FunctionComponent<IWPGBlockProps> = ({ order, block, mapToBlock }) => {

  const { name, attributes } = block

  if (!name) return null

  if (mapToBlock) (HomeBlock as any).MapToBlock = mapToBlock

  let TheBlock = (HomeBlock as any).MapToBlock ? (HomeBlock as any).MapToBlock(name) : null

  if (!TheBlock) TheBlock = GetTheBlock(name)

  if (!TheBlock) return null

  if (name.includes('acf/')) {
    // custom blocks
    switch (name) {
      case 'acf/banner-text-center':
        return (
          <TheBlock order={order} blockName={name} attributes={attributes.data} />
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

export default HomeBlocks