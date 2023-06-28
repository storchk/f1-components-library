import { Typography } from '../Typography'
import { StyledBadge } from './Badge.styled'
import type { BadgeProps } from './Badge.types'
export const Badge = ({ variant = 'primary', label, ...props }: BadgeProps): JSX.Element => {
  return (
    <StyledBadge $variant={variant} {...props}>
      <Typography $isUppercase fontSize="xxs" fontWeight="semibold">
        {label}
      </Typography>
    </StyledBadge>
  )
}
