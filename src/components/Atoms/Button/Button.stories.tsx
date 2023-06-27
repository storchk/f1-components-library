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
      options: ['black', 'gold', 'white', 'primary'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
  render: props => <Button variant="default" {...props} />,
}
export const Positive: Story = {
  render: props => <Button variant="positive" {...props} />,
}
export const TextOnly: Story = {
  render: props => <Button variant="textOnly" {...props} />,
}
export const TextLink: Story = {
  render: props => <Button variant="textOnly" {...props} />,
}
