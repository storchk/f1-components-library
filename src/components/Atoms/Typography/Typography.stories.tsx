import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'
import type { TypographyProps } from './Typography.types'

export default {
  title: 'Atoms/Typography',
  component: Typography,
  args: {
    color: 'textDark',
    fontWeight: 'regular',
    fontSize: 'sm',
    tag: 'span',
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
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
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

type Story = StoryObj<Pick<TypographyProps, 'color' | 'fontSize' | 'fontWeight'>>
const text = 'The quick brown fox jumps over the lazy dog'

export const Typo: Story = {
  render: props => <Typography {...props}>{text}</Typography>,
}
