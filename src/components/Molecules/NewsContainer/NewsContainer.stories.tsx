import type { Meta, StoryObj } from '@storybook/react'

import { Heading, Typography } from '../../Atoms'
import { NewsContainer } from './NewsContainer'
import type { NewsContainerProps } from './NewsContainer.types'

export default {
  title: 'Molecules/NewsContainer',
  component: NewsContainer,
  args: {
    heading: "Editor's Picks",
  },
} as Meta

type Story = StoryObj<NewsContainerProps>

export const WithHeading: Story = {
  render: ({ heading, ...props }) => (
    <NewsContainer heading={heading} {...props}>
      <Typography>
        Formula 1 have a stated aim of being Net Zero by 2030 – an ambitious target, but one that
        the sport is embracing, with help from key partners like logistics experts DHL. Ahead of the
        Spanish Grand Prix earlier this month, F1 and DHL presented the latest innovation aimed at
        making the sport more sustainable – a brand new fleet of 18 biofuel-powered trucks set to
        deliver the equipment needed for the European portion of the F1 season.
      </Typography>
    </NewsContainer>
  ),
}
export const WithoutHeading: Story = {
  render: ({ heading, ...props }) => (
    <NewsContainer {...props}>
      <Heading tag="h2">{heading}</Heading>
      <Typography>
        Formula 1 have a stated aim of being Net Zero by 2030 – an ambitious target, but one that
        the sport is embracing, with help from key partners like logistics experts DHL. Ahead of the
        Spanish Grand Prix earlier this month, F1 and DHL presented the latest innovation aimed at
        making the sport more sustainable – a brand new fleet of 18 biofuel-powered trucks set to
        deliver the equipment needed for the European portion of the F1 season.
      </Typography>
    </NewsContainer>
  ),
}
