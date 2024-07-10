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
        seconds: date.getSeconds(),
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
      <div className="clock">
        <span>{time.hours}:</span>
        <span>{time.minutes}:</span>
        <span>{time.seconds}</span>
        <span>{time.hours >= 12 ? " PM" : " AM"}</span>
      </div>
      <header style={{ background: bgColor }}>
        <p className="disclaimer">
          This is a fictional website for educational purposes
        </p>
        <h1 className="app-title"> Rome </h1>
        <p className="app-slogan"> Explore the ancient city of Rome</p>
      </header>
      <button type="button" onClick={changeColor}>
        Click me!
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
        <h2 className="app-subheader">Climate</h2>
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
        <h2 className="app-subheader">History</h2>
        <p>
          Rome was founded around 625 BC in the areas of ancient Italy known as
          Etruria and Latium. It is thought that the city-state of Rome was
          initially formed by Latium villagers joining together with settlers
          from the surrounding hills in response to an Etruscan invasion.
        </p>
      </div>
      <div className="footer"></div>
      <h1 className="footer">
        <p> Alex W 2024</p>
      </h1>
    </div>
  );
}
