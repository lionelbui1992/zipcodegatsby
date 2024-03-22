export interface IWPGBlock {
    name: string | null
    // blockName: string | null
    attributes: {
        [key: string]: any
    }
    innerBlocks: IWPGBlock[]
    innerHTML: string
    htmlContent?: string
    dynamicContent?: string
}
  
export interface IWPGBlockProps {
    order: string | undefined | null
    block: IWPGBlock
    form?: any
    mapToBlock?(name: string): any | null
}
  
export interface IWPGBlocksProps {
    blocks: IWPGBlock[]
    form?: any
    mapToBlock?(name: string): any | null
}
  
export type WPGBlocks = (props?: IWPGBlocksProps) => React.FunctionComponent<IWPGBlocksProps>
export type WPGBlock = (props?: IWPGBlockProps) => React.FunctionComponent<IWPGBlockProps>
export type WPGBlockLoader = () => React.FunctionComponent

export default WPGBlocks
