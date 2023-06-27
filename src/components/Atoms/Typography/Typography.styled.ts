import styled, { css } from 'styled-components'

import type { TypographyProps } from './Typography.types'

export const StyledTypography = styled.div<TypographyProps>(
  ({
    theme,
    fontWeight = 'regular',
    fontSize = 'sm',
    color = 'textDark',
    isUppercase = false,
  }) => css`
    font-size: ${theme.font.size[fontSize]};
    font-weight: ${theme.font.weight[fontWeight]};
    color: ${theme.colors[color]};

    ${isUppercase
      ? css`
          text-transform: uppercase;
        `
      : ''}
  `
)
