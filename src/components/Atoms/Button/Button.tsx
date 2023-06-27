import { Typography } from '../Typography'
import { StyledButton } from './Button.styled'
import type { ButtonProps } from './Button.types'
export const Button = ({
  variant = 'default',
  color = 'primary',
  label,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton $variant={variant} $color={color} {...props}>
      <Typography tag="span" fontSize="xxxs" fontWeight="regular">
        {label}
      </Typography>
    </StyledButton>
  )
}
