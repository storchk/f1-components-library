import type { AnchorHTMLAttributes } from 'react'

import type { TypographyProps } from '../Typography'
export type LinkProps = AnchorHTMLAttributes<HTMLLinkElement> &
  Omit<TypographyProps, 'fontFamily' | 'tag'> & { $inline?: boolean }
