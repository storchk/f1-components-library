import type { Meta, StoryObj } from '@storybook/react'

import { CompoundIcon } from './CompoundIcon'
import type { CompoundIconProps } from './CompoundIcon.types'

export default {
  title: 'Atoms/CompoundIcon',
  component: CompoundIcon,
  args: {
    compoundType: 'soft',
    size: 'sm',
  },
  argTypes: {
    compoundType: {
      options: ['soft', 'medium', 'hard', 'intermediate', 'wet'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta

type Story = StoryObj<CompoundIconProps>

export const OnlyIcon: Story = {
  render: ({ compoundType, size }) => (
    <>
      <CompoundIcon compoundType={compoundType} size={size} />
    </>
  ),
}
export const WithTire: Story = {
  render: props => (
    <>
      <CompoundIcon withTire {...props} />
    </>
  ),
}
export const WithTireAndLabel: Story = {
  render: props => (
    <>
      <CompoundIcon withLabel withTire {...props} />
    </>
  ),
}
