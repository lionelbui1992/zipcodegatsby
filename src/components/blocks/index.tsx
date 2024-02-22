import loadable from '@loadable/component'

import CommonBlocks from './common'
import FormatBlocks from './format'
import LayoutBlocks from './layout'
import CustomBlocks from './custom'

const DefaultHtmlBlock = loadable(() => import('./format/html'))

export function GetTheBlock(name: string) {
  switch (name) {
    case 'core/audio': return CommonBlocks.Audio
    case 'core/cover': return CommonBlocks.Cover
    case 'core/file': return CommonBlocks.File
    case 'core/gallery': return CommonBlocks.Gallery
    case 'core/heading': return CommonBlocks.Heading
    case 'core/image': return CommonBlocks.Image
    case 'core/list': return CommonBlocks.List
    case 'core/paragraph': return CommonBlocks.Paragraph
    case 'core/quote': return CommonBlocks.Quote
    case 'core/video': return CommonBlocks.Video

    case 'core/code': return FormatBlocks.Code
    case 'core/html': return FormatBlocks.Html
    case 'core/preformatted': return FormatBlocks.Preformatted
    case 'core/pullquote': return FormatBlocks.Pullquote

    case 'core/columns': return LayoutBlocks.Columns
    // custom zipcode blocks
    case 'acf/banner-with-image-right': return CustomBlocks.BannerImageRight
    case 'acf/number-text-image-repeater': return CustomBlocks.NumberTextImageRepeater
    case 'acf/banner-text-has-animation': return CustomBlocks.BannerTextHasAnimation
    case 'acf/marquee': return CustomBlocks.Marquee
    case 'acf/box-image': return CustomBlocks.BoxImage
    case 'acf/our-team': return CustomBlocks.OurTeams
    case 'acf/text-center-with-link': return CustomBlocks.BannerCta
    case 'acf/life-zip-code': return CustomBlocks.LifeZipCode
    case 'acf/banner-three-columns': return CustomBlocks.BannerThreeColumns
    case 'acf/gallery-two-columns': return CustomBlocks.GalleryTwoColumns
    case 'acf/listing-three-columns': return CustomBlocks.ListingThreeColumns
    case 'acf/contact-information': return CustomBlocks.ContactInformation
    case 'acf/projects-banner': return CustomBlocks.ProjectsBanner
    case 'acf/box-content': return CustomBlocks.BoxContent
    case 'acf/banner-text-center': return CustomBlocks.BannerTextCenter
    case 'acf/introduce': return CustomBlocks.Introduce
    case 'acf/company': return CustomBlocks.Company
    case 'acf/explore': return CustomBlocks.Explore

    default: return DefaultHtmlBlock
  }
}

export default {
  ...CommonBlocks,
  ...FormatBlocks
}
