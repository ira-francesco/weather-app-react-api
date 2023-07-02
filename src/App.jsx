import { useState } from "react";
import "./style.scss";
import backgroundImage from "./assets/background.jpg";
export default function App() {
  const apiKey = "d54919d21826957b16fa1de8e3099d25";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const iconUrl = "http://openweathermap.org/img/w/";
  /*
  + iconcode + ".png";
  */
  const [weatherObj, setWeatherObj] = useState({
    name: "",
    country: "",
    weatherMain: "",
    temp: "",
    feelsLike: "",
    humidity: "",
    main: "",
    icon: "",
    windSpeed: ""
  });

  const [location, setLocation] = useState("London");
  async function checkWeather() {
    const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    setWeatherObj({
      name: `${data.name}, ${data.sys.country}`,
      weatherMain: data.weather[0].main,
      temp: `${Math.round(Number(data.main.temp))}° C`,
      feelsLike: `${Math.round(Number(data.main.feels_like))}° C`,
      humidity: `${data.main.humidity}%`,
      icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    });
  }

  return (
    <div className="App" style={{ background: `url(${backgroundImage})` }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          style={{ marginTop: "20px" }}
        />
        <button style={{ marginTop: "20px" }} onClick={checkWeather}>
          Check the weather!
        </button>
      </div>
      <div className={"main-container"}>
        <h1>{weatherObj.name}</h1>
        <h1>{weatherObj.weatherMain}</h1>
        <h1>{weatherObj.temp}</h1>
        <h1>{weatherObj.feelsLike}</h1>
        <h1>{weatherObj.humidity}</h1>
        <img src={weatherObj.icon} alt={"weather-icon"} />
      </div>
    </div>
  );
}
