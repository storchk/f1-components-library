import styled, { css } from 'styled-components'

import type { ThemeType } from '../../../theme'
import type { StyledCompoundProps, StyledTireProps } from './CompoundIcon.types'

export const StyledCompoundContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledCompound = styled.div<StyledCompoundProps>(
  ({ theme, compoundType, size }) => css`
    width: ${getDimension(size).compound};
    height: ${getDimension(size).compound};
    border: ${getDimension(size).compoundSize} solid ${theme.colors[compoundType]};
    border-radius: 50%;
    position: absolute;

    &::before {
      ${getCompoundStyle(theme)}
      top: -${theme.spacing.xxs};
    }
    &::after {
      ${getCompoundStyle(theme)}
      bottom: -${theme.spacing.xxs};
    }
  `
)

export const StyledTire = styled.div<StyledTireProps>(
  ({ theme, size }) => css`
    width: ${getDimension(size).tire};
    height: ${getDimension(size).tire};
    border-radius: 50%;
    background-color: ${theme.colors.pureBlack};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `
)

const getCompoundStyle = (theme: ThemeType) => css`
  content: '';
  background-color: ${theme.colors.pureBlack};
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  left: calc(50% - ${theme.spacing.xxs});
`

const getDimension = (size: StyledTireProps['size']) => {
  switch (size) {
    case 'md':
    default:
      return {
        tire: '48px',
        compound: '40px',
        compoundSize: '2px',
      }
    case 'lg':
      return {
        tire: '56px',
        compound: '48px',
        compoundSize: '3px',
      }
    case 'sm':
      return {
        tire: '40px',
        compound: '32px',
        compoundSize: '2px',
      }
  }
}
