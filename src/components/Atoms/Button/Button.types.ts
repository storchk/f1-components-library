import type { AnchorHTMLAttributes } from 'react'

import type { ThemeType } from '../../../theme'

export type ButtonColor = 'primary' | 'secondary'
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text'

export type ButtonProps = {
  color?: ButtonColor
  variant?: ButtonVariant
  isLoading?: boolean
  label: string
  stopPropagation?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>

export type StyledButtonProps = {
  $color: ButtonColor
  $variant: ButtonVariant
} & Omit<ButtonProps, 'label' | 'color' | 'variant'>

export type GetButtonVariantsProps = {
  theme: ThemeType
} & StyledButtonProps
