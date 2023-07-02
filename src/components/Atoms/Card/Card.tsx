import { StyledCard, StyledCardText } from './Card.styled'
import type { CardProps } from './Card.types'
export const Card = ({ variant = 'primary', children, ...props }: CardProps): JSX.Element => {
  return (
    <StyledCard $variant={variant} {...props}>
      <div>
        <StyledCardText>{children}</StyledCardText>
      </div>
    </StyledCard>
  )
}
