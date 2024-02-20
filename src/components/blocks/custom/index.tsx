import loadable from '@loadable/component'

const BannerImageRight = loadable(() => import('./banner-with-image-right'))
const NumberTextImageRepeater = loadable(() => import('./NumberTextImageRepeater'))
const ImageWithText = loadable(() => import('./ImageWithText'))

export default {
  ImageWithText,
  BannerImageRight,
  NumberTextImageRepeater,
}