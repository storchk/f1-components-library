import styled, { css } from 'styled-components'

import type { StyledBadgeProps } from './Badge.types'
import { getBadgeVariants } from './Badge.variants'

export const StyledBadge = styled.span<StyledBadgeProps>(
  ({ theme, ...props }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    ${getBadgeVariants({ theme, ...props })}
  `
)
