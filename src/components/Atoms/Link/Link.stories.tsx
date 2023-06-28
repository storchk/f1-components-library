import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../Typography'
import { Link } from './Link'
import type { LinkProps } from './Link.types'

export default {
  title: 'Atoms/Link',
  component: Link,
  args: {
    children: 'Teams',
    color: 'secondary',
    fontWeight: 'regular',
    fontSize: 'xs',
  },
  argTypes: {
    color: {
      options: [
        'contrast1',
        'contrast2',
        'contrast3',
        'contrast4',
        'contrast5',
        'primary',
        'primaryAccent',
        'secondary',
        'pureBlack',
        'pureWhite',
        'background',
        'soft',
        'medium',
        'hard',
        'intermediate',
        'wet',
        'fastest',
        'faster',
        'slower',
        'slowest',
      ],
      control: {
        type: 'select',
      },
    },
    fontWeight: {
      options: ['bold', 'light', 'regular', 'semibold'],
      control: {
        type: 'select',
      },
    },
    fontSize: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta

type Story = StoryObj<LinkProps>

export const Default: Story = {
  render: props => <Link {...props} />,
}
export const Example: Story = {
  render: ({ color, fontWeight }) => (
    <Typography>
      Ahead of the Spanish Grand Prix earlier this month, F1 and DHL presented the latest innovation
      aimed at making the sport more sustainable –{' '}
      <Link color={color} fontWeight={fontWeight} $inline>
        a brand new fleet of 18 biofuel-powered trucks
      </Link>{' '}
      set to deliver the equipment needed for the European portion of the F1 season.
    </Typography>
  ),
}
