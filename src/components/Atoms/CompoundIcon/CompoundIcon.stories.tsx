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

export const Default: Story = {
  render: props => (
    <>
      <CompoundIcon {...props} />
    </>
  ),
}
