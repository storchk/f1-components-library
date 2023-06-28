import styled, { css } from 'styled-components'

import type { StyledButtonProps } from './Button.types'
import { getButtonVariants } from './Button.variants'

export const StyledButton = styled.button<StyledButtonProps>(
  ({ theme, ...props }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    border-radius: ${theme.border.radius};
    border: ${theme.border.width.small} solid;
    transition: all 0.5s cubic-bezier(0.2, 0, 0.05, 1);

    ${getButtonVariants({ theme, ...props })}
  `
)
