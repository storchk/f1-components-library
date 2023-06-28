import { Typography } from '../Typography'
import { StyledCompound, StyledTire } from './CompoundIcon.styled'
import type { CompoundIconProps } from './CompoundIcon.types'
export const CompoundIcon = ({ compoundType, size = 'sm' }: CompoundIconProps): JSX.Element => {
  const name = compoundType[0]
  return (
    <StyledTire size={size} aria-label={compoundType}>
      <StyledCompound compoundType={compoundType} size={size} />
      <Typography
        $isUppercase
        fontSize="md"
        fontWeight="bold"
        color="pureWhite"
        fontFamily="branded"
      >
        {name}
      </Typography>
    </StyledTire>
  )
}
