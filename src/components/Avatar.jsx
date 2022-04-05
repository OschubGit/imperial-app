import React from 'react'
import DefaultImg from '../assets/default.png'

const Avatar = ({src, alt}) => {
  return (
    <div className='avatar'>
        <img className='avatar__img' src={src ? src : DefaultImg} alt={alt}/>
    </div>
  )
}

export default Avatar