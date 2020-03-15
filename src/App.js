import React, { useState, useEffect } from "react";
import "./App.css";

const photoData = []
useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => {
      const photoData = response.data
      return photoData
    })
    .catch(error => {
      console.log(`There was an error getting the photo data: ${error}`)
    })
})

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
