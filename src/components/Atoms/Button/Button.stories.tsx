import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import type { ButtonProps } from './Button.types'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    color: 'primary',
    label: 'Button',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {
  render: props => <Button variant="primary" {...props} />,
}
export const Secondary: Story = {
  render: props => <Button variant="secondary" {...props} />,
}
export const Ghost: Story = {
  render: props => <Button variant="ghost" {...props} />,
}
export const Text: Story = {
  render: props => <Button variant="text" {...props} />,
}
