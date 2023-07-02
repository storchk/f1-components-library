import { axe } from 'jest-axe'
import { testing } from '../../../testing'
import { Badge } from './Badge'
import { BadgeProps } from './Badge.types'

const { render, screen, renderer } = testing
const label = 'Hello world! I am using React'

const renderComponent = (props?: Partial<BadgeProps>) => render(<Badge label={label} {...props} />)

describe('Atoms: Badge', () => {
  it('should render badge with text', () => {
    renderComponent()
    const text = screen.getByText(/Hello world! I am using React/i)
    expect(text).toBeInTheDocument()
  })

  it('snapshot | variant: primary', () => {
    const view = renderer(<Badge variant="primary" label={label} />)
    expect(view).toMatchSnapshot()
  })
  it('snapshot | variant: secondary', () => {
    const view = renderer(<Badge variant="secondary" label={label} />)
    expect(view).toMatchSnapshot()
  })

  test('A11y - No violations detected', async () => {
    const { container } = renderComponent()
    expect(await axe(container)).toHaveNoViolations()
  })
})
