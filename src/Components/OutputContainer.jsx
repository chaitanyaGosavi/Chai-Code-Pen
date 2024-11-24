import React from 'react'

const OutputContainer = ({srcDoc}) => {
  return (
    <>
    <iframe title='Output' className='bg-transparent flex-1 h-1/2' src="" sandbox='allow-scripts' srcDoc= {srcDoc}>

    </iframe>
    </>
  )
}

export default OutputContainer
