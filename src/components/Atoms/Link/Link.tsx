import { Typography } from '../Typography'
import { StyledLink } from './Link.styled'
import type { LinkProps } from './Link.types'
export const Link = ({
  children,
  fontWeight = 'regular',
  $isUppercase = false,
  $inline,
  ...props
}: LinkProps): JSX.Element => {
  return (
    <>
      {$inline ? ' ' : null}
      <StyledLink {...props} $inline={$inline}>
        <Typography $isUppercase={$isUppercase} fontWeight={fontWeight}>
          {children}
        </Typography>
      </StyledLink>
      {$inline ? ' ' : null}
    </>
  )
}
