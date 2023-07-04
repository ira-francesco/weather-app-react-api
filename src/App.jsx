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
      temp: `${Math.round(Number(data.main.temp))}`,
      feelsLike: `${Math.round(Number(data.main.feels_like))}° C`,
      humidity: `${data.main.humidity}%`,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      description: data.weather[0].description,
      maxTemp: `${Math.round(Number(data.main.temp_max))}° C`,
      minTemp: `${Math.round(Number(data.main.temp_min))}° C`,
      windSpeed: `${data.wind.speed}mph`
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
        <div className={"weather-container"}>
          <img
            style={{ width: "180px", display: "block", margin: "0 auto" }}
            src={weatherObj.icon !== "" ? weatherObj.icon : null}
            alt={""}
          />

          <h1 style={{ fontSize: "3rem" }}>
            {weatherObj.temp}{" "}
            <span
              style={{
                fontSize: "1.2rem",
                position: "absolute",
                marginTop: "7px"
              }}
            >
              °C
            </span>
          </h1>
          <h1>{weatherObj.description}</h1>
          <h1>{weatherObj.name}</h1>
        </div>
        <h1>{weatherObj.weatherMain}</h1>
        <h1>{weatherObj.feelsLike}</h1>
        <h1>{weatherObj.humidity}</h1>
      </div>
    </div>
  );
}
