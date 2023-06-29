import { testing } from '../../../testing'
import { Badge } from './Badge'

const { render, screen, renderer } = testing
const label = "Hello world! I am using React"

describe('Atoms: Badge', () => {
  it('should render badge with text', () => {
    render( <Badge label={label} />)
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
})
