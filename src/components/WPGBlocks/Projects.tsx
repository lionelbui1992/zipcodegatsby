import * as React from 'react'
import { GetTheBlock } from '../blocks'
import { IWPGBlocksProps, IWPGBlockProps } from './types'

const ProjectsBlocks: React.FunctionComponent<IWPGBlocksProps> = ({ blocks, mapToBlock }) => {
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

export const ProjectsBlock: React.FunctionComponent<IWPGBlockProps> = ({ block, mapToBlock }) => {

    const {
        name,
        attributes
    } = block

    if (!name) return null

    if (mapToBlock) (ProjectsBlock as any).MapToBlock = mapToBlock

    let TheBlock = (ProjectsBlock as any).MapToBlock ? (ProjectsBlock as any).MapToBlock(name) : null
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

export default ProjectsBlocks
