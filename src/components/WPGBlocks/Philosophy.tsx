import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'
import { handleGeneralOverlayAnimation } from '../../animation'
import { useEffect } from 'react';

const PhilosophyBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {
    useEffect(() => {
        setTimeout(handleGeneralOverlayAnimation, 1000)

    }, [])
    return (
        <>
            {blocks.filter(block => {
                return !!block.name
            }).map((block, index) =>
                <PhilosophyBlock key={index} order={`${index}`} block={block} mapToBlock={mapToBlock} />
            )}
        </>
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
                <div className="phi-banner overlay-animation">
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
