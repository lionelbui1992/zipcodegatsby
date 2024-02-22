import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'
import { useRef, useEffect } from "react";
import { Banner, Introduce, Company, Explore } from "../HomePage";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/sass/homepage.sass";
import { TextMarquee } from "../TextMarquee";

gsap.registerPlugin(ScrollTrigger);

const data = {
  TextMarquee: {
    marqueeBkg: "/img/MarqueeText-bkg.png",
    marqueeContent: [
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      },
      {
        content: "<span>Making Real Estate <i>Real Again</span>"
      }
    ]
  }
}

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

    const absoluteSections = document.querySelectorAll('.scroll-section .relative-section');
    const totalHeight = [...absoluteSections].reduce((acc, section) => {
      section.classList.replace('relative-section', 'absolute-section'); // Replace class
      return acc + section.offsetHeight;
    }, 0);;

    let temp = screen.width < 767 ? 100 : 0
    document.querySelector('.pinning-2').style.height = (totalHeight + temp) + 'px';

    ScrollTrigger.create({
      trigger: ".pinning-1",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      markers: false,
      scrub: 0.000001,
      onUpdate: (self) => {
        if (document.querySelector('.item-2')) {
          document.querySelector('.item-2').style.opacity = '0';
        }
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pinning-2",
        start: "top top",
        end: totalHeight,
        pin: true,
        pinSpacing: false,
        scrub: 0.000001,
        markers: false,
        onUpdate: (self) => {
          if (document.querySelector('.item-2')) {
            document.querySelector('.item-2').style.opacity = '1';
          }
        },
      },
      ease: "none",
      smoothChildTiming: true
    });


    let imgFrom = screen.width > 500 ? 800 : 400


    // tl.to(".item-1", { yPercent: 0, duration: 1 })
    tl.fromTo(".item-1", { yPercent: 0 }, { yPercent: -100, duration: 4 })
    tl.fromTo(".c-image", {
      y: imgFrom
    }, { y: -800, duration: 2 })
    tl.to(".item-2", { yPercent: -100, duration: 2 })



    return () => {
      // Kill all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
    return (
      <div className="scrollTrigger" ref={container}>
      {/* <div className="scrollTrigger"> */}
        <div className="scroll-section header-placeholder" ></div>
        {/* <div className="scroll-section pinning-1" data-speed="0.2">
          <Banner />
          <TextMarquee marqueeBkg={data?.TextMarquee?.marqueeBkg} marqueeContent={data?.TextMarquee?.marqueeContent} />
        </div>
        <div className="scroll-section pinning-2 company" data-speed="0.3">
          <div className="relative-section item-1"><Introduce /></div>
          <div className="relative-section item-2" style={{ opacity: 0 }}><Company /></div>
          <div className="relative-section item-3"><Explore /></div>
        </div> */}
        <div className="scroll-section pinning-1" data-speed="0.2">
          {firstAnimatoinBlocks.filter((block) => {
            return !!block.name}).map((block, index) =>
              <HomeBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />
            )
          }
        </div>
        <div className="scroll-section pinning-2 company" data-speed="0.3">
          {secondAnimatoinBlocks.filter((block, ind) => {
            return !!block.name && ind > 1}).map((block, index) => 
              <div className={`relative-section item-${index + 1}`}>
                <HomeBlock key={index + firstAnimatoinBlocks.length} order={`${index + 1 + firstAnimatoinBlocks.length}`} block={block} mapToBlock={mapToBlock} />
              </div>
            )
          }
        </div>
      </div>
    )
}

export const HomeBlock: React.FunctionComponent<IWPGBlockProps> = ({order, block, mapToBlock }) => {

  const {
    name,
    attributes
  } = block

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
