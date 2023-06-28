import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from './Heading'
import type { HeadingProps } from './Heading.types'

export default {
  title: 'Atoms/Typography/Heading',
  component: Heading,
  args: {
    color: 'pureBlack',
    fontWeight: 'regular',
    fontSize: 'sm',
    tag: 'h3',
    isUppercase: false,
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
    tag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
    },
    isUppercase: {
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta

type Story = StoryObj<HeadingProps>
const text = 'The quick brown fox jumps over the lazy dog'

export const Default: Story = {
  render: props => <Heading {...props}>{text}</Heading>,
}
