import { Typography } from '../Typography'
import { StyledCompound, StyledTire } from './CompoundIcon.styled'
import type { CompoundIconProps } from './CompoundIcon.types'
export const CompoundIcon = ({
  compoundType,
  size = 'sm',
  withTire = false,
}: CompoundIconProps): JSX.Element => {
  const name = compoundType[0]

  if (!withTire)
    return (
      <Typography
        $isUppercase
        fontSize="md"
        fontWeight="bold"
        color={compoundType}
        fontFamily="branded"
      >
        {name}
      </Typography>
    )
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
