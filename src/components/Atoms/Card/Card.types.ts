import type { ThemeType } from '../../../theme'

export type CardVariant = 'primary' | 'secondary'

export type CardProps = {
  variant?: CardVariant
  children: string | JSX.Element | JSX.Element[]
  $noPadding?: boolean
}

export type StyledCardProps = {
  $variant: CardVariant
} & Omit<CardProps, 'variant'>

export type GetCardVariantsProps = {
  theme: ThemeType
} & Pick<StyledCardProps, '$variant'>
