import React from 'react'
import Header from './Header'

const Main = () => {
  return (
    <div className='content'>
        <div className='content-large content__header'>
            <Header/>
        </div>
        <div className='content-large content__main'>
            <div className='content__main-info'>
              <div className='col-3 col-md-3 col-sm-2 col-xs-2'>col1</div>
              <div className='col-3 col-md-3 col-sm-2 col-xs-2'>col1</div>
              <div className='col-3 col-md-3 col-sm-2 col-xs-2'>col1</div>
              <div className='col-3 col-md-3 col-sm-2 col-xs-2'>col1</div>
            </div>
        </div>
    </div>
  )
}

export default Main