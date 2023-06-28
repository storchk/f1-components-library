import styled, { css } from 'styled-components'

import { mediaQuery } from '../../../styles'
import { Heading } from '../../Atoms/Typography'

export const StyledHeading = styled(Heading)``

export const StyledNewsContainer = styled.div(
  ({ theme }) => css`
    position: relative;
    border-top: solid ${theme.spacing.xs} ${theme.colors.primary};
    border-right: solid ${theme.spacing.xs} ${theme.colors.primary};
    border-bottom: solid ${theme.spacing.xs} ${theme.colors.primary};
    border-top-right-radius: ${theme.spacing.md};
    border-bottom-right-radius: ${theme.spacing.md};

    ${StyledHeading} {
      position: absolute;
      left: 0;
      top: -20px;
      background-color: ${theme.colors.pureWhite};
      padding: ${theme.spacing.xxs} ${theme.spacing.sm} ${theme.spacing.xxs} 0;
      word-break: break-all;
      max-width: 85%;
    }

    > div {
      padding: ${theme.spacing.xl} ${theme.spacing.sm};

      ${mediaQuery.md} {
        padding: ${theme.spacing.md};
      }
    }
  `
)
