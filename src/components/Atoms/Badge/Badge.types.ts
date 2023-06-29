import type { ThemeType } from '../../../theme'

export type BadgeVariant = 'primary' | 'secondary'

export type BadgeProps = {
  variant?: BadgeVariant
  label: string
}

export type StyledBadgeProps = {
  $variant: BadgeVariant
}

export type GetBadgeVariantsProps = {
  theme: ThemeType
} & StyledBadgeProps
