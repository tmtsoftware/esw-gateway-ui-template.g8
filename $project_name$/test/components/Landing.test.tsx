import React from 'react'
import SampleGUI from '../../src/components/SampleGUI'
import { render } from '@testing-library/react'

describe('Landing', () => {
  test('should render Landing page', async () => {
    const { container } = render(<Landing />)
    expect(container).toMatchSnapshot()
  })
})
