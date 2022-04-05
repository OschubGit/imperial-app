import React, {useEffect, useState} from 'react'
import Card from '../components/Card'
import Img from "../assets/starships/Executor_BF2.png"


const Starships = () => {
  const [starships, setStarships] = useState()
  const [newInfo, setNewInfo] = useState([])
  const [counter, setCounter] = useState(1)
  const [crew, setCrew] = useState([])


    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/?page=${counter}`)
            .then((response) => response.json())
            .then((json) => setStarships(json))
            console.log(starships)
    }, [counter])

    const handleClick = () => {
        setCrew(starships.results.sort((a, b) => a.crew - b.crew))
        console.log(crew)
      }

    const handleClickPrev = () => {
        setCounter(counter - 1)
    }
    const handleClickNext = () => {
        setCounter(counter + 1)
    }

  return (
    <div className='content'>
        <div className='content-large content__main'>
            <button onClick={handleClick}>Crew</button>
            <div className='content__main-info'>
              {starships && starships.results.map((m, index) => (
                <div key={index} className='col-6 col-xl-3 col-md-3 col-sm-2 col-xs-2'>
                  <Card
                    src={Img}
                    alt={m.name}
                    title={m.name}
                    subtitle={m.model}
                    caption={m.passengers}
                  />
                </div>
              ))}
              <div>
                <button onClick={handleClickPrev}>Prev</button>
                {counter}
                <button onClick={handleClickNext}>Nex</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Starships