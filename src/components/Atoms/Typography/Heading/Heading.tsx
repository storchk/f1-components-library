import { Typography } from '../Typography'
import type { HeadingProps } from './Heading.types'

const getHeadingByTag = (props: HeadingProps) => {
  switch (props.tag) {
    case 'h1':
      return <Typography {...props} fontSize="xl" />
    case 'h2':
      return <Typography {...props} fontSize="lg" fontWeight="bold" />
    case 'h3':
    default:
      return <Typography {...props} fontSize="md" />
    case 'h4':
      return <Typography {...props} fontSize="sm" fontWeight="bold" />
    case 'h5':
      return <Typography {...props} fontSize="xs" />
    case 'h6':
      return <Typography {...props} fontSize="xxs" />
  }
}
export const Heading = ({
  fontFamily = 'branded',
  tag = 'h3',
  ...props
}: HeadingProps): JSX.Element => {
  return getHeadingByTag({ fontFamily, tag, ...props })
}
