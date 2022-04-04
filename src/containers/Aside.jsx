import React from 'react'
import NavImage from '../components/NavImage'
import ImgDef from "../assets/planets/yaviniv.png"
import Nav from './Nav'

const Aside = () => {
  return (
    <div className='aside'>
      <div className='defaultImg'>
        <NavImage
          width='100%'
          src={ImgDef}
          alt="planets"
          caption="Planets"
        />
      </div>
        <Nav/>
    </div>
  )
}

export default Aside