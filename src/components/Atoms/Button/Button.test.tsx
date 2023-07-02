import { testing } from '../../../testing'
import { Button } from './Button'
import { ButtonProps } from './Button.types'
import { axe } from 'jest-axe'

const { render, screen, renderer } = testing
const label = 'Hello world! I am using React'

const renderComponent = (props?: Partial<ButtonProps>) =>
  render(<Button label={label} {...props} />)
describe('Atoms: Button', () => {
  it('should render button with text', () => {
    renderComponent()
    const text = screen.getByText(/Hello world! I am using React/i)
    expect(text).toBeInTheDocument()
  })

  it('snapshot | variant: primary', () => {
    const view = renderer(<Button variant="primary" label={label} />)
    expect(view).toMatchSnapshot()
  })
  it('snapshot | variant: secondary', () => {
    const view = renderer(<Button variant="secondary" label={label} />)
    expect(view).toMatchSnapshot()
  })
  it('snapshot | variant: ghost', () => {
    const view = renderer(<Button variant="ghost" label={label} />)
    expect(view).toMatchSnapshot()
  })
  it('snapshot | variant: test', () => {
    const view = renderer(<Button variant="text" label={label} />)
    expect(view).toMatchSnapshot()
  })
  it('snapshot | color: primary', () => {
    const view = renderer(<Button color="primary" label={label} />)
    expect(view).toMatchSnapshot()
  })
  it('snapshot | color: secondary', () => {
    const view = renderer(<Button color="secondary" label={label} />)
    expect(view).toMatchSnapshot()
  })

  test('A11y - No violations detected', async () => {
    const { container } = renderComponent()
    expect(await axe(container)).toHaveNoViolations()
  })
})
