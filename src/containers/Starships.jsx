import React, {useEffect, useState} from 'react'
import Card from '../components/Card'
import Img from "../assets/starships/Executor_BF2.png"


const Starships = () => {
  const [starships, setStarships] = useState(null)
  const [counter, setCounter] = useState(1)
  const [reset, setReset] = useState([])
  const [loader, setLoader] = useState(true)


    useEffect(() => {
            const fetchData = async() => {
            const response = await fetch(`https://swapi.dev/api/starships/?page=${counter}`)
            const data = await response.json()
            setStarships(data.results)
            setLoader(false)
        }
        fetchData()
    }, [counter, reset])

    const handleClick = () => {
        const filter = starships.filter((f) => f.cargo_capacity !== "n/a" && "unknown")
        const orderFilter = filter.sort((a, b) => b.cargo_capacity - a.cargo_capacity)
        setStarships(orderFilter)
    }
    const handleClickCrew = () => {
        const filter = starships.filter((f) => f.crew !== "n/a" && "unknown")
        const orderFilter = filter.sort((a, b) => b.crew - a.crew)
        setStarships(orderFilter)
    }
    const handleClickPassengers = () => {
        const filter = starships.filter((f) => f.passengers !== "n/a" && "unknown")
        const orderFilter = filter.sort((a, b) => b.passengers - a.passengers)
        setStarships(orderFilter)
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
            <div className='filters'>
                <div className='filters__options'>
                  <h4>Order by:</h4>
                  <button className='button-contained' onClick={handleClick}>Cargo capacity</button>
                  <button className='button-contained' onClick={handleClickCrew}>Crew</button>
                  <button className='button-contained' onClick={handleClickPassengers}>Passengers</button>
                  <button className='button-contained' onClick={() => setReset(starships)}>Reset</button>
                </div>
                <div className='pagination'>
                  <button className='button-border' disabled={counter <= 1} onClick={handleClickPrev}>Prev</button>
                  {counter}
                  <button className='button-border' disabled={counter > 3} onClick={handleClickNext}>Nex</button>
                </div>
            </div>
            {!loader ? (
            <div className='content__main-info'>
              {starships && starships.map((m, index) => (
                  <div key={index} className='col-6 col-xl-3 col-md-3 col-sm-2 col-xs-2'>
                    <Card
                      src={Img}
                      alt={m.name}
                      title={m.name}
                      subtitle={m.model}
                      caption={`Capacity: ${m.cargo_capacity} / Passengers: ${m.passengers} / Crew: ${m.crew}`}
                    />
                  </div>
              ))}
            </div>
            ):(
                <p>Loading...</p>
            )}
        </div>
    </div>
  )
}

export default Starships