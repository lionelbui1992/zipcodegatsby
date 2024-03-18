import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'
import { useRef, useEffect, useState } from "react";
import "../../assets/sass/homepage.sass";
import { handleOverlayAnimation } from '../../animation';



const HomeBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {


  const firstAnimatoinBlocks = blocks.filter((block, index) => {
    return block.name === "acf/banner-text-center" || block.name === "acf/marquee"
  });

  const secondAnimatoinBlocks = blocks.filter((block, index) => {
    return block.name !== "acf/banner-text-center" && block.name !== "acf/marquee"
  });

  const container = useRef(null);

  // State
  const [blocksState, setBlocksState] = useState(blocks);

  useEffect(() => {
    // Set the blocks state
    setBlocksState(blocks);
    if (container.current && blocks && blocks.length > 0) {
      setTimeout(() => {
        handleOverlayAnimation();
      }, 1000);
    }
    // if (!container) return;

  }, [blocks]);
  return (
    <div className="scrollTrigger page-content" ref={container}>
      <div className="scroll-section pinning-1" data-speed="0.2">
        {firstAnimatoinBlocks.filter((block) => {
          return !!block.name
        }).map((block, index) =>
          <HomeBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />
        )
        }
      </div>
      {secondAnimatoinBlocks.filter((block, ind) => {
        return !!block.name
      }).map((block, index) => {
        let classes = "",
          cImage = "";
        switch (block.name) {
          case "acf/introduce":
            classes = "section--pinning-introduce"
            break
          case "acf/company":
            classes = "section--pinning-company"
            console.log(block)
            cImage = block?.attributes?.data?.owner_image
            break
          case "acf/explore":
            classes = "section--pinning-explore"
            break
        }
        return (
          <>
            <div key={index + firstAnimatoinBlocks.length} className={`item-${index + 1} ${classes}`}>
              {cImage &&
                <div className="c-image c-wrapper">
                  <div className="image-box">
                    <img src={cImage.src} alt={cImage.alt} />
                  </div>
                </div>
              }
              <HomeBlock order={`${index + 1 + firstAnimatoinBlocks.length}`} block={block} mapToBlock={mapToBlock} />
            </div>
          </>
        )
      }

      )}
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
