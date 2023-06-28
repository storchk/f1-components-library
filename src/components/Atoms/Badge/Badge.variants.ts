import { css } from 'styled-components'

import type { GetBadgeVariantsProps } from './Badge.types'

export const getBadgeVariants = ({ theme, $variant }: GetBadgeVariantsProps) => {
  switch ($variant) {
    case 'primary':
    default:
      return css`
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
      `
    case 'secondary':
      return css`
        color: ${theme.colors.secondary};
        padding: ${theme.spacing.xxs} ${theme.spacing.xs};
        border-radius: ${theme.size.md}px;
        border: ${theme.border.width.small} solid ${theme.colors.primary};
      `
  }
}
