import React from 'react'
import { Component1 } from '../../src/components/Component1'
import { render } from '@testing-library/react'

describe('Component1', () => {
  test('should render Component', async () => {
    const { container } = render(<Component1 />)
    expect(container).toMatchSnapshot()
  })
})
