import React from 'react'
import Landing from '../../../src/components/Landing'
import { render } from '@testing-library/react'

describe('Landing', () => {
  test('should render Landing page', async () => {
    const { container } = render(<Landing />)
    expect(container).toMatchSnapshot()
  })
})
