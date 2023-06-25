import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Example = {
  args: {
    primary: true,
    label: 'Button',
  },
} satisfies Story
