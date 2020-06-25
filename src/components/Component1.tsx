import React from 'react'
// #import-components-example
import { AuthContextProvider } from 'esw-ts'
// #import-components-example
import { AppConfig } from '../config/AppConfig'

const Component1 = () => {
  return (
    <div className='row card col s12 m7'>
      {
        Please refer <a href="https://github.com/tmtsoftware/esw-ts"> esw-ts </a> documentation.
      }
    </div>
  )
}

export default Component1

// project name 
// esw-ts default yes, add component1.tsx showing usage of esw
// auth setup , add navbar with auth ?
// do we need to add clients usage in this template ?