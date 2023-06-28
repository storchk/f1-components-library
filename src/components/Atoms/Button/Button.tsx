import { Typography } from '../Typography'
import { StyledButton } from './Button.styled'
import type { ButtonProps } from './Button.types'
export const Button = ({
  variant = 'primary',
  color = 'primary',
  label,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton $variant={variant} $color={color} {...props}>
      <Typography $isUppercase fontSize="xs" fontWeight="semibold">
        {label}
      </Typography>
    </StyledButton>
  )
}
