import React, { useState } from 'react';

const api = {
   key: "a3d9eb01d4de82b9b8d0849ef604dbed",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});


  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')
        console.log(result);
        });
    }
  }
  

  const dateBuilder =(d) => {
    let months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
     "Sep", "Nov", "Dec"
    ];
     let days = [
       "Sunday", "Mondy", "Tuesday", "Wednesday", "Thursday", "Friday", 
       "Saturday"
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined")
    ? ((weather.main.temp > 15)
      ? 'App warm'
      : 'App')
       : 'App'}>
        <main>
          <div className="search-box">
            <input type="text"
            className="search-bar"
            placeholder="search..."
            onChange={e => setQuery(e.target.value)}
            value ={query}
            onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
            <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div> 
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].description}</div>
          </div>
          </div>
          ) : (  <div>
            <div className="location-box">
              <div className="location">London, UK</div> 
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                13°c
              </div>
              <div className="weather">cloudy</div>
            </div>
            </div>)}
        </main>
    </div>
  );
}
export default App;
