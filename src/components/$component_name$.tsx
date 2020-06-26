import React, { useEffect, useState } from 'react'

const $component_name$ = () => {
  const [backendProxyUrl, setbackendProxyUrl] = useState<string>('')
  useEffect(() => {
    // Make sure that the backend to which this app is going to communicate is up and running
    // then uncomment the following lines
    // const serverUri = resolveServerHost()
    // setbackendProxyUrl(serverUri)
  }, [])

  return (
    <div className='row card col s12 m7'>
      <h5 className='col s12'>
        Please refer{' '}
        <a href='https://github.com/tmtsoftware/esw-ts'> esw-ts </a>{' '}
        documentation for appropriate usage of esw-ts library.
      </h5>
    </div>
  )
}
$component_name$.displayName = '$component_name$'
export default $component_name$
