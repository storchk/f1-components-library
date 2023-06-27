import styled, { css } from 'styled-components'

import type { ThemeType } from '../../../theme'
import type { ButtonColor, ButtonVariant, StyledButtonProps } from './Button.types'

const getVariantStylesByVariant = (theme: ThemeType, variant: ButtonVariant) => {
  switch (variant) {
    case 'positive':
      return css`
        color: ${theme.colors.textWhite};
      `
    case 'textLink':
      return css``
    case 'textOnly':
      return css``
    case 'default':
    default:
      return css`
        background-color: transparent;
      `
  }
}
const getColorStylesByColor = (theme: ThemeType, color: ButtonColor) => {
  switch (color) {
    case 'black':
      return css`
        color: ${theme.colors.black};
        border-color: ${theme.colors.black};
        background-color: ${theme.colors.black};

        &:hover {
          background-color: ${theme.colors.textDarkSoft};
          border-color: ${theme.colors.white};
        }
      `
    case 'gold':
      return css`
        color: ${theme.colors.gold};
        border-color: ${theme.colors.gold};
        background-color: ${theme.colors.gold};

        &:hover {
          background-color: ${theme.colors.goldLight};
          border-color: ${theme.colors.goldLight};
        }
      `
    case 'white':
      return css`
        color: ${theme.colors.white};
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
        color: ${theme.colors.primary};
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

    ${getColorStylesByColor(theme, $color)}
    ${getVariantStylesByVariant(theme, $variant)}
  `
)
