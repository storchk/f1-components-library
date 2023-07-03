import {
  StyledArticleCard,
  StyledArticleCardContent,
  StyledImage,
  StyledBadge,
  StyledTextContent,
} from './ArticleCard.styled'
import type { ArticleCardProps } from './ArticleCard.types'
import { Card } from '../../Atoms/Card'
import { Typography } from '../../Atoms'

export const ArticleCard = ({
  badges = [],
  type = 'image',
  src,
  textContent,
  ...props
}: ArticleCardProps): JSX.Element => {
  return (
    <StyledArticleCard>
      {src ? <StyledImage src={src} /> : null}
      <Card variant="primary" $noPadding {...props}>
        <>
          <StyledArticleCardContent>
            {badges.map((badge, index) => (
              <StyledBadge key={`badge-${index}`} {...badge} />
            ))}
            <StyledTextContent>
              {textContent ? <Typography>{textContent}</Typography> : null}
            </StyledTextContent>
          </StyledArticleCardContent>
        </>
      </Card>
    </StyledArticleCard>
  )
}
