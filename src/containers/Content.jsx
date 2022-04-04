import React from 'react'
import Card from '../components/Card'
import Header from './Header'
import Img from "../assets/planets/bespin.png"


const Main = () => {
  return (
    <div className='content'>
        <div className='content-large content__header'>
            <Header/>
        </div>
        <div className='content-large content__main'>
            <div className='content__main-info'>
              <div className='col-3 col-md-3 col-sm-2 col-xs-2'>
                <Card
                  src={Img}
                  alt="planet"
                  title="Planeta one"
                  subtitle="terreno"
                  caption="desierto"
                />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main