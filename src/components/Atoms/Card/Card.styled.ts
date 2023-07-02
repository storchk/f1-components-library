import styled, { css } from 'styled-components'

import type { StyledCardProps } from './Card.types'
import { getCardVariants } from './Card.variants'
import { StyledTypography } from '../Typography'

export const StyledCardText = styled(StyledTypography)``

export const StyledCard = styled.div<StyledCardProps>(
  ({ theme, $variant }) => css`
    display: block;
    transition: all 0.5s cubic-bezier(0.2, 0, 0.05, 1);

    ${getCardVariants({ theme, $variant })}

    &:hover {
      cursor: pointer;
    }
    > div {
      padding: ${theme.spacing.xl} ${theme.spacing.sm};
    }
  `
)
