import {  useState } from 'react';

export const Weather = () => {
    const [weather, setWeather] = useState([]);

    const loading = !weather.length;

 
    let url = "https://api.weatherapi.com/v1/forecast.json?key=d8d5bfc23a1b4fd285c40136230106&q=74120&days=2&aqi=no&alerts=no"
      fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("The temp  in " + data.location.name + " for today is" + " " + data.current.temp_f +" " + "degrees")
        

        setWeather(data);
     
        });
   

    return (
    <div>
        {loading ? (
            < Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
          />
            //<div>Loading ...</div>
    ):(
         weather.map(({location, name, current, temp_f}) => (
          <>
          <div> weather: {temp_f}</div>
          <div>Location: {name}</div>
          </>
        ))
    )}
    </div>
    
    )
         }
         




