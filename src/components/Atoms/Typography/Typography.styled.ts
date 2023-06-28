import styled, { css } from 'styled-components'

import type { TypographyProps } from './Typography.types'

export const StyledTypography = styled.div<TypographyProps>(
  ({
    theme,
    fontWeight = 'regular',
    fontSize = 'sm',
    color,
    $isUppercase = false,
    fontFamily = 'default',
  }) => css`
    font-size: ${theme.font.size[fontSize]};
    font-weight: ${theme.font.weight[fontWeight]};
    color: ${color ? theme.colors[color] : 'inherit'};
    font-family: ${theme.font.fontFamily[fontFamily]};

    ${$isUppercase
      ? css`
          text-transform: uppercase;
        `
      : ''}
  `
)
