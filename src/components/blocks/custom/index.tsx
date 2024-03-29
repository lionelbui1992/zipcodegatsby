import loadable from '@loadable/component'

export default {
  ImageWithText: loadable(() => import('./ImageWithText')),
  BannerImageRight: loadable(() => import('./BannerWithImageRight')),
  NumberTextImageRepeater: loadable(() => import('./NumberTextImageRepeater')),
  BannerTextHasAnimation: loadable(() => import('./BannerTextHasAnimation')),
  Marquee: loadable(() => import('./Marquee')),
  BoxImage: loadable(() => import('./BoxImage')),
  OurTeams: loadable(() => import('./OurTeams')),
  BannerCta: loadable(() => import('./BannerCta')),
  LifeZipCode: loadable(() => import('./LifeZipCode')),
  BannerThreeColumns: loadable(() => import('./BannerThreeColumns')),
  GalleryTwoColumns: loadable(() => import('./GalleryTwoColumns')),
  ListingThreeColumns: loadable(() => import('./ListingThreeColumns')),
  ContactInformation: loadable(() => import('../../Form/CareerForm')),
  ProjectsBanner: loadable(() => import('./ProjectsBanner')),
  BoxContent: loadable(() => import('./BoxContent')),
  BannerTextCenter: loadable(() => import('./BannerTextCenter')),
  Introduce: loadable(() => import('./Introduce')),
  Company: loadable(() => import('./Company')),
  Explore: loadable(() => import('./Explore')),
}
