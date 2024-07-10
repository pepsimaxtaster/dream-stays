import "./App.css";
import React from "react";
import Card from "./components/Card";
import { getStays } from "./data";

// Main app
export default function App() {
  let stays = getStays();
  return (
    <div className="app">
      <header className="app-header">
        <p className="disclaimer">
          This is a fictional website for educational purposes
        </p>
        <h1> Rome </h1>
        <p className="app-slogan"> Explore the ancient city of Rome</p>
      </header>
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
