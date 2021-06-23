import React from 'react'
import { screen, render } from '@testing-library/react'
import { Landing } from '../../../src/components'
import { expect } from 'chai'

describe('Landing', () => {
  it('should render', async () => {
    render(<Landing />)

    expect(screen.queryByText('Update src/App.tsx and save to reload.')).to.exist
  })
})
