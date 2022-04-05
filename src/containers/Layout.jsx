import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'


const Layout = ({children}) => {

  return (
    <div className="layout">
        <div className='layout__aside'>
            <Aside/>
        </div>
        <div className='layout__content'>
          <div className='content'>
            <div className='content-large content__header'>
              <Header/>
            </div>
          </div>
          {children}
        </div>
        <div className='layout__footer'>
          <Footer/>
        </div>
    </div>
  )
}

export default Layout