import loadable from '@loadable/component'

export default {
  Columns: loadable(() => import('./columns')),
}