export type Size = {
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
  xxxxl: string
}

export type SpacingType = {
  [size in keyof Size]: string
}

const baseSize = 8

export const spacing: SpacingType = {
  xxs: `${baseSize * 0.5}px`,
  xs: `${baseSize * 1}px`,
  sm: `${baseSize * 2}px`,
  md: `${baseSize * 3}px`,
  lg: `${baseSize * 4}px`,
  xl: `${baseSize * 5}px`,
  xxl: `${baseSize * 6}px`,
  xxxl: `${baseSize * 7}px`,
  xxxxl: `${baseSize * 8}px`,
}
