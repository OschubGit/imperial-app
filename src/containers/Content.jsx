import React, {useEffect, useState} from 'react'
import Card from '../components/Card'
import Img from "../assets/planets/bespin.png"


const Main = () => {
  const [planets, setPlanets] = useState()
  const [diameter, setDiameter] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/planets')
            .then((response) => response.json())
            .then((json) => setPlanets(json))
          }, [])
          
          const handleClick = () => {
            setDiameter(planets.results.sort((a, b) => a.diameter - b.diameter))
          }

  return (
    <div className='content'>
        <div className='content-large content__main'>
            <button onClick={handleClick}>ordenar</button>
            <div className='content__main-info'>
              {planets && planets.results.map((m, index) => (
                <div key={index} className='col-6 col-xl-3 col-md-3 col-sm-2 col-xs-2'>
                  <Card
                    src={Img}
                    alt={m.name}
                    title={m.name}
                    subtitle={m.terrain}
                    caption={m.population}
                  />
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Main