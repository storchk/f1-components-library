import type { Meta, StoryObj } from '@storybook/react'

import { ArticleCard } from './ArticleCard'
import type { ArticleCardProps } from './ArticleCard.types'

export default {
  title: 'Molecules/ArticleCard',
  args: {
    src: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1688223058/fom-website/2023/Austria/verstappen-leads-sprint-austria-2023.png.transform/6col-retina/image.png',
    type: 'image',
    textContent:
      'Verstappen battles back against Perez for victory during frenetic wet-dry Sprint in Austria',
    badges: [
      { label: 'Highlight', variant: 'primary' },
      { label: 'F1 Tv', variant: 'secondary' },
    ],
  },
  component: ArticleCard,
} as Meta

type Story = StoryObj<ArticleCardProps>

export const Default: Story = {
  render: props => <ArticleCard {...props} />,
}
