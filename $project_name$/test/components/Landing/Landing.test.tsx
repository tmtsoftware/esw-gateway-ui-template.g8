import React from 'react'
import { Landing } from '../../../src/components'
import { render } from '@testing-library/react'

describe('Landing', () => {
  test('should render', async () => {
    const { container } = render(<Landing />)
    expect(container).toMatchSnapshot()
  })
})
