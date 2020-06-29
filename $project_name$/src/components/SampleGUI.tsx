import React, { useEffect, useState } from 'react'

const SampleGUI = () => {
  const [backendProxyUrl, setbackendProxyUrl] = useState<string>('')
  useEffect(() => {
    // Make sure that the backend to which this app is going to communicate is up and running
    // then uncomment the following lines
    // const serverUri = resolveServerHost()
    // setbackendProxyUrl(serverUri)
  }, [])

  return (
    <div>
      <h5>
        Please refer{' '}
        <a href='https://github.com/tmtsoftware/esw-ts'> esw-ts </a>{' '}
        documentation for appropriate usage of esw-ts library.
      </h5>
    </div>
  )
}

export default SampleGUI
