import {IoPlanet, IoSparkles, IoPeople, IoCarSport} from 'react-icons/io5'

const navigation = [
    {
        id: 0,
        title: "Planets",
        slug: "/",
        icon: <IoPlanet/>
    },
    {
        id: 1,
        title: "Starships",
        slug: "starships",
        icon: <IoSparkles/>
    },
    {
        id: 2,
        title: "People",
        slug: "people",
        icon: <IoPeople/>
    },
    {
        id: 3,
        title: "Vehicles",
        slug: "vehicles",
        icon: <IoCarSport/>
    }
  ];

  export default navigation;
  