import React from 'react'
import {IoPlanet, IoSparkles, IoPeople, IoCarSport} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
        <ul className='nav__list'>
            <li className='nav__list-item'>
              <Link to='/'>
                <IoPlanet/>Planets
              </Link>
                </li>
            <hr/>
            <li className='nav__list-item'>
              <Link to='/starships'>
                <IoSparkles/>Starships
              </Link>
            </li>
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