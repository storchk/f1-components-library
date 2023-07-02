import { Typography } from '../Typography'
import { StyledButton } from './Button.styled'
import type { ButtonProps } from './Button.types'
import type { MouseEvent } from 'react'

export const Button = ({
  variant = 'primary',
  color = 'primary',
  label,
  onClick,
  stopPropagation = false,
}: ButtonProps): JSX.Element => {
  const handleOnClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    stopPropagation && event.stopPropagation()

    if (onClick) {
      onClick(event)
    }
  }

  return (
    <StyledButton $variant={variant} $color={color} onClick={handleOnClick}>
      <Typography $isUppercase fontSize="xs" fontWeight="semibold">
        {label}
      </Typography>
    </StyledButton>
  )
}
