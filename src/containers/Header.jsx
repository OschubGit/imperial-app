import React from 'react'
import { IoPersonCircle, IoNotifications, IoMenu, IoCloseCircleSharp } from "react-icons/io5"
import HeaderTitle from '../components/HeaderTitle'
import Aside from './Aside'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <div className='header'>
        <div className='header__title'>
            <IoMenu onClick={handleClick} className='header__title-menu'/>
            <HeaderTitle
                title={"Imperial Destroyer Center"}
            />
        </div>
        <div className='header__actions'>
            <IoNotifications/>
            <IoPersonCircle/>
        </div>
    </div>
    {open && (
      <div className='mobileMenu'>
        <div className='mobileMenu__close'>
          <IoCloseCircleSharp onClick={handleClose}/>
        </div>
        <Aside/>
      </div>
    )}
    </>
  )
}

export default Header