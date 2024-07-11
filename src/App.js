import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { getStays } from "./data";

// Main app
export default function App() {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const convertToTwoDigit = (number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };
  let stays = getStays();
  const egBlue = "#3662d8";
  const purple = "#A020F0";
  const [bgColor, setBgColor] = useState(egBlue);
  const changeColor = () => {
    if (bgColor === egBlue) {
      setBgColor(purple);
    } else {
      setBgColor(egBlue);
    }
  };
  return (
    <div className="app">
      <div className="clock" style={{ background: bgColor }}>
        <span>
          <u>|{time.hours}:</u>
        </span>
        <span>
          <u>{time.minutes}</u>
        </span>
        <span>
          <u>{time.hours >= 12 ? " PM|" : " AM|"}</u>
        </span>

        <div style={{ background: bgColor }}>
          <p className="disclaimer" style={{ background: bgColor }}>
            This is a fictional website for educational purposes
          </p>
          <h1 className="app-title"> ROME </h1>
          <p className="app-slogan"> Explore the ancient city of Rome</p>
        </div>
      </div>
      <button type="button" onClick={changeColor}>
        Colour
      </button>
      <br />
      <div className="container">
        {stays.map((stay) => {
          return (
            <Card
              key={stay.id}
              id={stay.id}
              name={stay.name}
              description={stay.description}
              img={stay.img}
            />
          );
        })}
      </div>
      <hr className="app-divider" />
      <div>
        <h2 className="app-subheader">
          <u>Climate</u>
        </h2>
        <p>
          {" "}
          Rome has a Mediterranean climate with cool winters and warm and hot
          summers The temperatures can vary with lows of 2C in January to the
          highs of 30C in July and August There is little or no rainfall in
          summer months but this then increases to the average of 90mm in
          November and December.{" "}
        </p>
      </div>
      <hr className="app-divider" />
      <div>
        <h2 className="app-subheader">
          <u>History</u>
        </h2>
        <p>
          Rome was founded around 625 BC in the areas of ancient Italy known as
          Etruria and Latium. It is thought that the city-state of Rome was
          initially formed by Latium villagers joining together with settlers
          from the surrounding hills in response to an Etruscan invasion.
        </p>
      </div>
      <h1 className="footer" style={{ background: bgColor }}>
        <p> Alex W 2024</p>
      </h1>
    </div>
  );
}
