import React from 'react'

const Image = ({urlpath}) => {
  return (
    <img  className='imagecontainner' src={urlpath} alt='name'/>
  )
}

export default Image;