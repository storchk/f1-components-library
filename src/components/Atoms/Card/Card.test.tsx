import { testing } from '../../../testing'
import { Card } from './Card'
import { CardProps } from './Card.types'
import { axe } from 'jest-axe'

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

  test('A11y - No violations detected', async () => {
    const { container } = renderComponent()
    expect(await axe(container)).toHaveNoViolations()
  })
})
