import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'
import ImageWithText from '../blocks/custom/ImageWithText';

const PhilosophyBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {
    let acceptedBlocks = [];
    let rejectedBlocks = [];
    let xx = [];

    blocks.filter((block, index) => {
        return block.name === "acf/banner-with-image-right"
    }).forEach((block) => {
        acceptedBlocks.push(block);
    });

    blocks.filter((block, index) => {
        return block.name === "acf/number-text-image-repeater"
    }).forEach((b, i) => {
        rejectedBlocks.push(b);
        b.attributes.data.sections.filter((item, j) => {
            return j < 1
        }).forEach((c, z) => {
            xx.push(c)
        })
    });
    
    return (
        <div className='page-content'>
            <div className="pinning-1 overlay-animation" style={{ position: "relative", zIndex: 2 }}>
                {acceptedBlocks.filter(block => {
                    return !!block.name
                }).map((block, index) =>
                    <PhilosophyBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />
                )}
                {xx.map((list, index) => (
                    <div key={index}>
                    <ImageWithText
                        index={index + 1}
                        title={list.title}
                        des={list.description}
                        image={list.image}
                        backgroundUrl={list.background}
                        isDarkBackground={list.is_dark_section}
                        button={list.button}
                    />
                    </div>
                ))}
            </div>
            {rejectedBlocks.filter(block => {
                return !!block.name
            }).map((block, index) =>
                <PhilosophyBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />
            )}
        </div>
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
                <div className="phi-banner">
                    <TheBlock blockName={name} attributes={attributes.data} />
                </div>
            )
        case 'acf/number-text-image-repeater':
            return (
                <TheBlock blockName={name} attributes={attributes.data} />
            )
        default:
            return (
                <TheBlock blockName={name} attributes={attributes} />
            )
    }
}

export default PhilosophyBlocks
