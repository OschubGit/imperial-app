import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Img from "../assets/planets/bespin.png";

const Main = () => {
  const [planets, setPlanets] = useState(null);
  const [reset, setReset] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/planets");
      const data = await response.json();
      setPlanets(data.results);
      setLoader(false);
    };
    fetchData();
  }, [reset]);

  const handleClick = () => {
    const filter = planets.filter((s) => s.diameter !== "n/a" && "unknown")
    const orderFilter = filter.sort((a, b) => a.diameter - b.diameter);
    setPlanets(orderFilter);
  };

  return (
    <div className="content">
      <div className="content-large content__main">
        <div className="filters">
          <div className="filters__options">
            <h4>Order by:</h4>
            <button className="button-contained" onClick={handleClick}>
              Diameter
            </button>
            <button
              className="button-contained"
              onClick={() => setReset(planets)}
            >
              Reset
            </button>
          </div>
        </div>
        {!loader ? (
          <div className="content__main-info">
            {planets &&
              planets.map((m, index) => (
                <div
                key={index}
                className="col-3 col-xl-4 col-md-3 col-sm-2 col-xs-2"
                >
                  <Card
                    src={Img}
                    alt={m.name}
                    title={m.name}
                    subtitle={m.terrain}
                    caption={`population: ${m.population} / diameter: ${m.diameter}`}
                  />
                </div>
              ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Main;
