import styled, { css } from 'styled-components'

import { StyledTypography } from '../Typography'
import type { StyledCardProps } from './Card.types'
import { getCardVariants } from './Card.variants'

export const StyledCardText = styled(StyledTypography)``

export const StyledCard = styled.div<StyledCardProps>(
  ({ theme, $variant, $noPadding = false }) => css`
    display: block;
    transition: all 0.5s cubic-bezier(0.2, 0, 0.05, 1);

    ${getCardVariants({ theme, $variant })}

    &:hover {
      cursor: pointer;
    }

    ${!$noPadding &&
    css`
      > div {
        padding: ${theme.spacing.xl} ${theme.spacing.sm};
      }
    `}
  `
)
