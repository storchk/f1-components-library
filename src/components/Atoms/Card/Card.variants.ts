import { css } from 'styled-components'

import type { GetCardVariantsProps } from './Card.types'
import { StyledCardText } from './Card.styled'

export const getCardVariants = ({ theme, $variant }: GetCardVariantsProps) => {
  switch ($variant) {
    case 'primary':
    default:
      return css`
        border-bottom: solid ${theme.border.width.small};
        border-right: solid ${theme.border.width.small};
        border-bottom-right-radius: ${theme.spacing.md};
        background-color: ${theme.colors.pureWhite};
        border-bottom-color: ${theme.colors.contrast2};
        border-right-color: ${theme.colors.contrast2};

        &:hover {
          border-bottom-color: ${theme.colors.primary};
          border-right-color: ${theme.colors.primary};
        }
      `
    case 'secondary':
      return css`
        background-color: ${theme.colors.pureWhite};
        border-bottom-left-radius: ${theme.spacing.md};
        border-bottom-right-radius: ${theme.spacing.md};

        &:hover {
          background-color: ${theme.colors.secondary};

          ${StyledCardText} {
            color: ${theme.colors.pureWhite};
          }
        }
      `
  }
}
