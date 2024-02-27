import loadable from '@loadable/component'

export default {
  Audio: loadable(() => import('./audio')),
  Cover: loadable(() => import('./cover')),
  File: loadable(() => import('./file')),
  Gallery: loadable(() => import('./gallery')),
  Heading: loadable(() => import('./heading')),
  Image: loadable(() => import('./image')),
  List: loadable(() => import('./list')),
  Paragraph: loadable(() => import('./paragraph')),
  Quote: loadable(() => import('./quote')),
  Video: loadable(() => import('./video')),
}