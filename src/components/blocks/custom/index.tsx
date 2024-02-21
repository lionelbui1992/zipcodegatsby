import loadable from '@loadable/component'

const BannerImageRight = loadable(() => import('./BannerWithImageRight'))
const NumberTextImageRepeater = loadable(() => import('./NumberTextImageRepeater'))
const ImageWithText = loadable(() => import('./ImageWithText'))
const BannerTextHasAnimation = loadable(() => import('./BannerTextHasAnimation'))
const Marquee = loadable(() => import('./Marquee'))
const BoxImage = loadable(() => import('./BoxImage'))
const OurTeams = loadable(() => import('./OurTeams'))
const BannerCta = loadable(() => import('./BannerCta'))

export default {
  ImageWithText,
  BannerImageRight,
  NumberTextImageRepeater,
  BannerTextHasAnimation,
  Marquee,
  BoxImage,
  OurTeams,
  BannerCta,
}
