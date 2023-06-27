import { breakpoints } from './breakpoints'

const customMediaQuery = (breakpoint: number) => `@media (min-width: ${breakpoint}px)`

const { smScreen, mdScreen, lgScreen, xlScreen, xxlScreen } = breakpoints

export const mediaQuery: { [key: string]: string } = {
  smScreen: customMediaQuery(smScreen),
  mdScreen: customMediaQuery(mdScreen),
  lgScreen: customMediaQuery(lgScreen),
  xlScreen: customMediaQuery(xlScreen),
  xxlScreen: customMediaQuery(xxlScreen),
  hasPointerDevice: '@media (pointer: fine)',
}
