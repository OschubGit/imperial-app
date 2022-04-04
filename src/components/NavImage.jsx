import React from 'react'

const NavImage = ({width="auto", height="auto", src, alt, caption}) => {
  return (
    <div className='navImage'>
        <img width={width} height={height} src={src} alt={alt}/>
        <span>{caption}</span>
    </div>
  )
}

export default NavImage