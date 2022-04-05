import React from 'react'
import NavImage from '../components/NavImage'
import ImgDef from "../assets/planets/yaviniv.png"
import Nav from './Nav'
import { useLocation } from 'react-router-dom'

const Aside = () => {
  const location = useLocation()
  return (
    <div className='aside'>
      <div className='defaultImg'>
        <NavImage
          width='100%'
          src={ImgDef}
          alt="planets"
          caption={location.pathname === "/" ? "Planets" : location.pathname.slice(1)}
        />
      </div>
        <Nav/>
    </div>
  )
}

export default Aside