export type FontWeights = 'light' | 'regular' | 'semibold' | 'bold'

export type FontWeightType = {
  [weight in FontWeights]: number | 'normal' | 'bold'
}

export type FontSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl'
  | 'xxxxxl'

export type FontSizeType = {
  [size in FontSize]: string
}
export type FontFamilyType = {
  branded: string
  default: string
}

export type FontType = {
  fontFamily: FontFamilyType
  size: FontSizeType
  weight: FontWeightType
}

export const font: FontType = {
  fontFamily: {
    branded: 'Formula1-Regular_web_0',
    default: 'Titillium Web',
  },
  size: {
    xxs: '12px',
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    xxl: '28px',
    xxxl: '32px',
    xxxxl: '40px',
    xxxxxl: '48px',
  },
  weight: {
    bold: 700,
    semibold: 600,
    regular: 400,
    light: 300,
  },
}
