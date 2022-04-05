import React from 'react'
import Avatar from './Avatar'
import Img from "../assets/people/luke-skywalker.png"

const Card = ({src, alt, title, subtitle, caption}) => {

  return (
    <div className='card'>
        <div className='card__image'>
            <img src={src} alt={alt} />
        </div>
        <div className='card__info'>
            <div className='card__info-general'>
                <h3>{title}</h3>
                <span>{subtitle}</span>
                <span className='mt-4 caption'>{caption}</span>
            </div>
            <div className='card__info-avatar'>
                <Avatar src={Img} alt='planet-image'/>
            </div>
        </div>
    </div>
  )
}

export default Card