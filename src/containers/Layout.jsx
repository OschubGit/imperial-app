import React from 'react'
import Aside from './Aside'
import Content from './Content'

const Layout = () => {
  return (
    <div className='layout'>
        <div className='layout__aside'>
            <Aside/>
        </div>
        <div className='layout__content'>
            <Content/>
        </div>
    </div>
  )
}

export default Layout