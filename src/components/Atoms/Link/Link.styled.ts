import styled, { css } from 'styled-components'

import type { LinkProps } from './Link.types'

export const StyledLink = styled.a<LinkProps>(
  ({ theme, color = 'primary', $inline = false }) => css`
    display: ${$inline ? 'inline' : 'block'};
    width: fit-content;
    color: ${theme.colors[color]};

    &:hover {
      cursor: pointer;

      ${$inline
        ? css`
            text-decoration: underline;
          `
        : css`
            border-bottom: solid ${theme.border.width.small} ${theme.colors.primary};
          `}
    }
  `
)
