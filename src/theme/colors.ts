const specials = {
  fastest: '#A700FF',
  faster: '#44D745',
  slower: '#F8D500',
  slowest: '#BE2C30',
}

const tires = {
  soft: '#E93324',
  medium: '#F3FD54',
  hard: '#ffffff',
  intermediate: '#6EBE4F',
  wet: '#518ED4',
}

const contrasts = {
  contrast1: '#f9f9f9',
  contrast2: '#f5f2ef',
  contrast3: '#979797',
  contrast4: '#89898e',
  contrast5: '#242424',
}

export const colors = {
  primary: '#e10600',
  primaryAccent: '#c30500',
  secondary: '#1f1f27',
  secondaryAccent: '#2e2e3b',
  pureBlack: '#000',
  pureWhite: '#fff',
  background: '#f7f4f1',
  ...contrasts,
  ...tires,
  ...specials,
}

export type ColorNames = keyof typeof colors | string

export type ColorsType = {
  [color in ColorNames]: string
}
