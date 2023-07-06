import { Typography } from '../Typography'
import { StyledCompound, StyledCompoundContainer, StyledTire } from './CompoundIcon.styled'
import type { CompoundIconProps } from './CompoundIcon.types'
export const CompoundIcon = ({
  compoundType,
  size = 'sm',
  withTire = false,
  withLabel = false,
}: CompoundIconProps): JSX.Element => {
  const name = compoundType[0]

  if (!withTire)
    return (
      <Typography
        $isUppercase
        fontSize={size}
        fontWeight="bold"
        color={compoundType}
        fontFamily="branded"
      >
        {name}
      </Typography>
    )
  return (
    <StyledCompoundContainer>
      <StyledTire size={size} compoundType={compoundType} aria-label={compoundType}>
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
      {withLabel ? (
        <Typography tag="span" $isUppercase fontSize="sm" fontWeight="semibold">
          {compoundType}
        </Typography>
      ) : null}
    </StyledCompoundContainer>
  )
}
