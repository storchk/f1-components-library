import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'
import type { CardProps } from './Card.types'
import { Typography } from '../Typography'
import { Badge } from '../Badge'

export default {
  title: 'Atoms/Card',
  component: Card,
} as Meta

type Story = StoryObj<CardProps>

export const Primary: Story = {
  render: props => (
    <Card variant="primary" {...props}>
      <div>
        <Typography>
          Relive the frantic Sprint Shootout as Verstappen takes P1 and Hamilton exits early
        </Typography>
        <Typography>
          Relive the frantic Sprint Shootout as Verstappen takes P1 and Hamilton exits early
        </Typography>
        <Typography>
          Relive the frantic Sprint Shootout as Verstappen takes P1 and Hamilton exits early
        </Typography>
      </div>
    </Card>
  ),
}
export const Secondary: Story = {
  render: props => (
    <Card variant="secondary" {...props}>
      <Badge label="Highlight" />
      <div>
        <Typography>
          Relive the frantic Sprint Shootout as Verstappen takes P1 and Hamilton exits early
        </Typography>
        <Typography>
          Relive the frantic Sprint Shootout as Verstappen takes P1 and Hamilton exits early
        </Typography>
      </div>
    </Card>
  ),
}
