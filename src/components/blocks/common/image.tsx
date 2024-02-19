import { IWPGBlock } from '../../WPGBlocks/types'
import * as React from 'react'

const WPGImageBlock:React.FC<IWPGBlock> = (props) => {
  const {
    attributes: {
      url,
      alt,
      title,
      width,
      height,
      id,
      sizeSlug
    }
  } = props

  return (
    <div className="wpg-block wpg-b_image">
      <figure className={`wp-block-image size-${sizeSlug}`}>
        <img
          // decoding="async" 
          width={`${width}`}
          height={`${height}`}
          src={`${url}`}
          alt="ALTERNATIVE TEXT" 
          className={`wp-image-${id}`}
          // title="TITLE ATTRIBUTE" 
          />
      </figure>
    </div>
  )
}

export default WPGImageBlock