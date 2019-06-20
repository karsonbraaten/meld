export type AppBarState = 'regular' | 'contextual' | 'search'

export type NavigationAction = 'menu' | 'back' | 'close'

export interface Search {
  expanded: boolean
  placeholder: string
  term: string
}
