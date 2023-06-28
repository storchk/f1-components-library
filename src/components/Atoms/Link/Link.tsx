import { Typography } from '../Typography'
import { StyledLink } from './Link.styled'
import type { LinkProps } from './Link.types'
export const Link = ({
  children,
  fontSize,
  fontWeight = 'regular',
  $isUppercase = false,
  ...props
}: LinkProps): JSX.Element => {
  return (
    <StyledLink {...props}>
      <Typography $isUppercase={$isUppercase} fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Typography>
    </StyledLink>
  )
}
