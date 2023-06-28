import { useMemo } from 'react'

import { StyledHeading, StyledNewsContainer } from './NewsContainer.styled'
import type { NewsContainerProps } from './NewsContainer.types'
export const NewsContainer = ({
  children,
  tag = 'div',
  heading,
}: NewsContainerProps): JSX.Element => {
  const content = useMemo(() => <div>{children}</div>, [children])
  if (heading) {
    return (
      <StyledNewsContainer as={tag}>
        <StyledHeading tag="h2">{heading}</StyledHeading>
        {content}
      </StyledNewsContainer>
    )
  }
  return <StyledNewsContainer as={tag}>{content}</StyledNewsContainer>
}
