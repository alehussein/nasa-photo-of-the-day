import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./Componets/NasaPhoto";



function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      // console.log(res);
      setData(res.data);
    })
    .catch(err => console.log(err))
  }, [])

  

  return (
    <div className="App">
   {data && <NasaPhoto photo={data}/>}
    </div>
  );
}

export default App;
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

// const dummyData ={
// copyright: "Mike Selby",
// date: "2023-03-02",
// explanation: "Spiral galaxy NGC 3169 looks to be unraveling like a ball of cosmic yarn. It lies some 70 million light-years away, south of bright star Regulus toward the faint constellation Sextans. Wound up spiral arms are pulled out into sweeping tidal tails as NGC 3169 (left) and neighboring NGC 3166 interact gravitationally. Eventually the galaxies will merge into one, a common fate even for bright galaxies in the local universe. Drawn out stellar arcs and plumes are clear indications of the ongoing gravitational interactions across the deep and colorful galaxy group photo. The telescopic frame spans about 20 arc minutes or about 400,000 light-years at the group's estimated distance, and includes smaller, bluish NGC 3165 at the right. NGC 3169 is also known to shine across the spectrum from radio to X-rays, harboring an active galactic nucleus that is the site of a supermassive black hole.",
// hdurl: "https://apod.nasa.gov/apod/image/2303/NGC3169LRGBrevFinalcropCDK1000_27Feb2023_2048.jpg",
// title: "Unraveling NGC 3169",
// }