import type { ThemeType } from '../../../theme'
import type { CardProps } from '../../Atoms/Card'
import type { BadgeProps } from '../../Atoms/Badge'

export type ArticleCardProps = Omit<CardProps, 'children' | '$noPadding' | 'variant'> & {
  badges: BadgeProps[]
  src?: string
  type?: 'image' | 'video'
  textContent?: string
}

export type StyledArticleCardProps = ArticleCardProps & ThemeType
