import React from 'react'

const Avatar = ({src, alt}) => {
  return (
    <div className='avatar'>
        <img className='avatar__img' src={src} alt={alt}/>
    </div>
  )
}

export default Avatar