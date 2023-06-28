import type { LabelHTMLAttributes } from 'react'

import type { FontSize, FontWeights } from '../../../styles/fonts'
import type { ColorNames } from '../../../theme/colors'

export type TypographyProps = {
  color?: ColorNames
  fontFamily?: 'branded' | 'default'
  fontWeight?: FontWeights
  fontSize?: FontSize
  tag?: keyof JSX.IntrinsicElements
  $isUppercase?: boolean
} & LabelHTMLAttributes<HTMLElement>
