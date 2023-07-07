import { axe } from 'jest-axe'

import { testing } from '../../../testing'
import { Card } from './Card'
import type { CardProps } from './Card.types'

const { render, screen, renderer } = testing
const mockText = 'Hello world! I am using React'

const renderComponent = (props?: Partial<CardProps>) => render(<Card {...props}>{mockText}</Card>)
describe('Atoms: Card', () => {
  it('should render button with text', () => {
    renderComponent()
    const text = screen.getByText(/Hello world! I am using React/i)
    expect(text).toBeInTheDocument()
  })

  it('snapshot | variant: primary', () => {
    const view = renderer(<Card variant="primary">{mockText}</Card>)
    expect(view).toMatchSnapshot()
  })
  it('snapshot | variant: secondary', () => {
    const view = renderer(<Card variant="secondary">{mockText}</Card>)
    expect(view).toMatchSnapshot()
  })

  it('A11y - No violations detected', async () => {
    const { container } = renderComponent()
    await expect(axe(container)).resolves.toHaveNoViolations()
  })
})
