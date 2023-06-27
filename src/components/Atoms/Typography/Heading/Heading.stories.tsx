import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from './Heading'
import type { HeadingProps } from './Heading.types'

export default {
  title: 'Atoms/Typography/Heading',
  component: Heading,
  args: {
    color: 'textDark',
    fontWeight: 'regular',
    fontSize: 'sm',
    tag: 'h3',
    isUppercase: false,
  },
  argTypes: {
    color: {
      options: [
        'black',
        'white',
        'neutral',
        'warmNeutral',
        'ceramic',
        'primary',
        'primaryAccent',
        'primaryLight',
        'primaryDark',
        'gold',
        'goldLight',
        'goldLightes',
        'error',
        'warning',
        'textDark',
        'textDarkSoft',
        'textWhite',
        'textWhiteSoft',
      ],
      control: {
        type: 'select',
      },
    },
    fontWeight: {
      options: ['black', 'bold', 'thin', 'light', 'regular', 'semibold'],
      control: {
        type: 'select',
      },
    },
    fontSize: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
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

type Story = StoryObj<Pick<HeadingProps, 'color' | 'fontSize' | 'fontWeight'>>
const text = 'The quick brown fox jumps over the lazy dog'

export const Default: Story = {
  render: props => <Heading {...props}>{text}</Heading>,
}
