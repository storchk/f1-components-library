export type FontWeights = 'thin' | 'light' | 'regular' | 'semibold' | 'bold' | 'black'

export type FontWeightType = {
  [weight in FontWeights]: number | 'normal' | 'bold'
}

export type FontSize = 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type FontSizeType = {
  [size in FontSize]: string
}

export type FontType = {
  size: FontSizeType
  weight: FontWeightType
}

export const font: FontType = {
  size: {
    xxxxs: '0.8rem',
    xxxs: '1rem',
    xxs: '1.3rem',
    xs: '1.6rem',
    sm: '1.9rem',
    md: '2.4rem',
    lg: '2.8rem',
    xl: '3.6rem',
    xxl: '5.0em',
  },
  weight: {
    black: 900,
    bold: 'bold',
    light: 300,
    regular: 'normal',
    semibold: 600,
    thin: 100,
  },
}
