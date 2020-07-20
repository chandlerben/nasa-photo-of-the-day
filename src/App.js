import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Image, Video, Description } from './components';
import "./App.css";
import NASA from './components/NASA'


const moment = require('moment');


function App() {
  const [apod, setApod] = useState(undefined);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const today = useState(date)[0];
  useEffect(() => fetchApod(), [date]);
  const fetchApod = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=UZLcFR4TTKnOnZK7DqeKf1m00cnbUkrOcRQJlf3j`, {
        params: {
          date: date,
          api_key: 'UZLcFR4TTKnOnZK7DqeKf1m00cnbUkrOcRQJlf3j'
        }
      })
      .then(res => {
        console.log(res);
        setApod(res.data);
      })
      .catch(err => console.log(err));
  }

  const nextDate = () => {
    setDate(
      moment(date).add(1, 'days').format('YYYY-MM-DD')
    );
  };

  const prevDate = () => {
    setDate(
      moment(date).subtract(1, 'days').format('YYYY-MM-DD')
    );
  };

  console.log(date);
  console.log(today);
  console.log(apod);
  if (!apod) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <h1>NASA Astronomy Picture of the Day</h1>

      {apod.media_type === 'image' ? (
        <Image url={apod.hdurl} alt={apod.title} />
      ) : (
          <Video url={apod.url} title={apod.title} />
        )}

      <Description
        title={apod.title}
        date={apod.date}
        explanation={apod.explanation}
      />

    </div>
  );
}

export default App;
