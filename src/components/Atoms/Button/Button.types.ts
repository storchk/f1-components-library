import type { AnchorHTMLAttributes } from 'react'

export type ButtonColor = 'gold' | 'black' | 'white' | 'primary'
export type ButtonVariant = 'default' | 'positive' | 'textLink' | 'textOnly'

export type ButtonProps = {
  color?: ButtonColor
  variant?: ButtonVariant
  isLoading?: boolean
  label: string
} & AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>

export type StyledButtonProps = {
  $color: ButtonColor
  $variant: ButtonVariant
}
