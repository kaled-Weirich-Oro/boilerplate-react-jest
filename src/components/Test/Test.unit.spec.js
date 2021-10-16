import React from 'react'
import { render, screen } from '@testing-library/react'

import { Test } from '.'

describe('<Test />', () => {
  it('should render the heading', () => {
    render(<Test />)

    expect(screen.getByRole('heading', { name: /Test/i })).toBeInTheDocument()

  })

  /*
    it('should render without any marker', () => {
      render(<Test />)

      // Gera um link para o playground de teste
      screen.logTestingPlaygroundURL()

    })
  */

  /*
    it('should render debug HTML', () => {
      const { debug } = render(<Test />)
      debug()
    })
  */

  /*
    it('created Snapshot', () => {
    const { container } = render(<Test />)
    expect(container.firstChild).toMatchSnapshot()
   })
  */

})
