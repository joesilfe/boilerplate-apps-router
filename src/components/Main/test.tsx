import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderezia o componente
    const { container } = render(<Main />)

    // busca o elemento e verifica a exist&encia
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
