import type { LabelHTMLAttributes } from 'react'

import type { ColorNames } from '../../../theme/colors'
import type { FontSize, FontWeights } from '../../../theme/fonts'

export type TypographyProps = {
  color?: ColorNames
  fontWeight?: FontWeights
  fontSize?: FontSize
  tag?: keyof JSX.IntrinsicElements
  isUppercase?: boolean
} & LabelHTMLAttributes<HTMLElement>
