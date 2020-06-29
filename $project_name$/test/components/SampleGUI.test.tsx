import React from 'react'
import SampleGUI from '../../src/components/SampleGUI'
import { render } from '@testing-library/react'

describe('SampleGUI', () => {
  test('should render Component', async () => {
    const { container } = render(<SampleGUI />)
    expect(container).toMatchSnapshot()
  })
})
