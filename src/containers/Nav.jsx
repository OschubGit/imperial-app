import React from 'react'
import {IoPlanet, IoSparkles, IoPeople, IoCarSport} from 'react-icons/io5'

const Nav = () => {
  return (
    <nav className='nav'>
        <ul className='nav__list'>
            <li className='nav__list-item'><IoPlanet/>Planets</li>
            <hr/>
            <li className='nav__list-item'><IoSparkles/>Starships</li>
            <hr/>
            <li className='nav__list-item'><IoPeople/>People</li>
            <hr/>
            <li className='nav__list-item'><IoCarSport/>Vehicles</li>
            <hr/>
        </ul>
    </nav>
  )
}

export default Nav