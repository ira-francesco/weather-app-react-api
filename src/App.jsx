import { useState } from "react";
export default function App() {
  const apiKey = "d54919d21826957b16fa1de8e3099d25";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [weatherObj, setWeatherObj] = useState({ name: "" });
  const [location, setLocation] = useState("London");
  async function checkWeather() {
    const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    setWeatherObj({ name: data.name });
  }

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <button onClick={checkWeather}>Check the weather!</button>
      <h1>{weatherObj.name}</h1>
    </div>
  );
}