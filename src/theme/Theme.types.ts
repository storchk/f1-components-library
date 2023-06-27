import type { BorderType } from './border'
import type { ColorsType } from './colors'
import type { FontType } from './fonts'
import type { SizeType } from './size'
import type { SpacingType } from './spacing'

export type ThemeType = {
  border: BorderType
  colors: ColorsType
  spacing: SpacingType
  size: SizeType
  font: FontType
}
