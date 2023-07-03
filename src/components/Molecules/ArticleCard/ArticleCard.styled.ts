import styled, { css } from 'styled-components'
import { Badge } from '../../Atoms/Badge'

export const StyledImage = styled.img`
  z-index: 1;
`

export const StyledBadge = styled(Badge)(
  ({ theme }) => css`
    margin-right: ${theme.spacing.sm};

    &:nth-last-of-type() {
      margin-right: 0;
    }
  `
)

export const StyledTextContent = styled.div(
  ({ theme }) => css`
    margin-top: ${theme.spacing.xs};
  `
)
export const StyledArticleCard = styled.div(
  ({ theme }) => css`
    position: relative;

    &:hover {
      > div {
        z-index: 5;
        margin-top: -${theme.spacing.sm};
        padding-top: ${theme.spacing.sm};
        position: absolute;
        transition: all 0.5s cubic-bezier(0.2, 0, 0.05, 1);
      }
    }
  `
)

export const StyledArticleCardContent = styled.div(
  ({ theme }) => css`
    padding: ${theme.spacing.xs} ${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm};
  `
)
