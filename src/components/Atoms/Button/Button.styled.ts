import styled, { css } from 'styled-components'

import type { ThemeType } from '../../../theme'
import type { ButtonColor, StyledButtonProps } from './Button.types'

const getColorStylesByColor = (theme: ThemeType, color: ButtonColor) => {
  switch (color) {
    case 'black':
      return css`
        border-color: ${theme.colors.black};
        background-color: ${theme.colors.black};

        &:hover {
          background-color: ${theme.colors.textDarkSoft};
          border-color: ${theme.colors.white};
        }
      `
    case 'gold':
      return css`
        border-color: ${theme.colors.gold};
        background-color: ${theme.colors.gold};

        &:hover {
          background-color: ${theme.colors.goldLight};
          border-color: ${theme.colors.goldLight};
        }
      `
    case 'white':
      return css`
        border-color: ${theme.colors.white};
        background-color: ${theme.colors.white};

        &:hover {
          background-color: ${theme.colors.ceramic};
          border-color: ${theme.colors.ceramic};
        }
      `
    case 'primary':
    default:
      return css`
        border-color: ${theme.colors.primary};
        background-color: ${theme.colors.primary};

        &:hover {
          background-color: ${theme.colors.primaryLight};
          border-color: ${theme.colors.primaryLight};
        }
      `
  }
}

export const StyledButton = styled.button<StyledButtonProps>(
  ({ theme, $variant, $color }) => css`
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: ${theme.border.radius};
    border: ${theme.border.width} solid;
    color: ${$color === 'gold' ? theme.colors.textDark : theme.colors.textWhite};

    ${$variant === 'positive' ? css`` : ''}
    ${getColorStylesByColor(theme, $color)}
  `
)
