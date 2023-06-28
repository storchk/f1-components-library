import { css } from 'styled-components'

import type { GetButtonVariantsProps } from './Button.types'

export const getButtonVariants = ({ theme, $color, $variant }: GetButtonVariantsProps) => {
  switch ($variant) {
    case 'primary':
    default:
      return css`
        color: ${theme.colors.secondary};
        border-color: ${theme.colors[$color]};

        &:hover {
          box-shadow: 0 0 0 2px ${theme.colors[$color]} inset;
        }
      `
    case 'secondary':
      return css`
        color: ${theme.colors.pureWhite};
        border-color: ${theme.colors[$color]};
        background-color: ${theme.colors[$color]};

        ${$color === 'primary'
          ? css`
              &:hover {
                color: ${theme.colors.secondary};
                border-color: ${theme.colors[$color]};
                background-color: transparent;
              }
            `
          : css`
              &:hover {
                border-color: ${theme.colors[`${$color}Accent`]};
                background-color: ${theme.colors[`${$color}Accent`]};
              }
            `}
      `
    case 'ghost':
      return css`
        color: ${theme.colors[$color]};
        border: none;

        &:hover {
          color: ${theme.colors[`${$color}Accent`]};
        }
      `
    case 'text':
      return css`
        color: ${theme.colors[$color]};
        padding: 0;
        border: none;
        border-radius: 0;

        &:hover {
          color: ${theme.colors[`${$color}Accent`]};
        }
      `
  }
}
