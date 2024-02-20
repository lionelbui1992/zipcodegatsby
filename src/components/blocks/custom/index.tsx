import loadable from '@loadable/component'

const BannerImageRight = loadable(() => import('./BannerWithImageRight'))
const NumberTextImageRepeater = loadable(() => import('./NumberTextImageRepeater'))
const ImageWithText = loadable(() => import('./ImageWithText'))

export default {
  ImageWithText,
  BannerImageRight,
  NumberTextImageRepeater,
}