import React from 'react'
import $component_name$ from '../../src/components/$component_name$'
import { render } from '@testing-library/react'

describe('$component_name$', () => {
  test('should render Component', async () => {
    const { container } = render(<$component_name$ />)
    expect(container).toMatchSnapshot()
  })
})
