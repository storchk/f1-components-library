type CompoundType = 'soft' | 'medium' | 'hard' | 'intermediate' | 'wet'

export type CompoundIconProps = {
  withTire?: boolean
  compoundType: CompoundType
  size: 'sm' | 'md' | 'lg'
}

export type StyledTireProps = CompoundIconProps
export type StyledCompoundProps = CompoundIconProps
