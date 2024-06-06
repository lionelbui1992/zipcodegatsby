import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'
import { useRef, useEffect, useState } from "react";
import "../../assets/sass/homepage.sass";
import { handleOverlayAnimation } from '../../animation';



const HomeBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {

  let i = 0, j = 0;

  // Create a copy of the original blocks array
  let blocksCopy = [...blocks];

  // Filter and remove elements for firstAnimatoinBlocks
  const firstAnimatoinBlocks = blocksCopy.filter((block) => {
    if ((block.name === "acf/banner-text-center" || (block.name === "acf/marquee" && i++ < 1))) {
      return true;
    }
    return false;
  });

  blocksCopy = blocksCopy.filter(block => !firstAnimatoinBlocks.includes(block));

  // Filter and remove elements for secondAnimatoinBlocks
  const secondAnimatoinBlocks = blocksCopy.filter((block) => {
    return block.name === "acf/banner-text-has-animation" || (block.name === "acf/marquee" && j++ < 1);
  });

  blocksCopy = blocksCopy.filter(block => !secondAnimatoinBlocks.includes(block));

  // Filter and remove elements for secondAnimatoinBlocks
  const thirdAnimatoinBlocks = blocksCopy.filter((block) => {
    return block.name === "acf/company";
  });

  blocksCopy = blocksCopy.filter(block => !thirdAnimatoinBlocks.includes(block));

  // Filter and remove elements for secondAnimatoinBlocks
  const boxImageBlocks = blocksCopy.filter((block) => {
    return block.name === "acf/box-image";
  });

  blocksCopy = blocksCopy.filter(block => !boxImageBlocks.includes(block));

  // Remaining blocks after removing first and second animation blocks
  const remainingBlocks = blocksCopy;



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
      <div className="scroll-section pinning-2" data-speed="0.2">
        {secondAnimatoinBlocks.filter((block) => {
          return !!block.name
        }).map((block, index) =>
          <HomeBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />
        )
        }
      </div>
      <div className="scroll-section pinning-3" data-speed="0.2">
        {boxImageBlocks.filter((block) => {
          return !!block.name
        }).map((block, index) =>
          <HomeBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />
        )
        }
      </div>
      {thirdAnimatoinBlocks.filter((block, ind) => {
        return !!block.name
      }).map((block, index) => {
        let classes = "section--pinning-company",
          cImage = block?.attributes?.data?.owner_image;
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
      })}
      <div className='about-our-teams about-section homepage-section'>
        {remainingBlocks.filter((block) => {
          return !!block.name
        }).map((block, index) =>
          <HomeBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />
        )
        }
      </div>

      <div className="placeholder-section"></div>
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
