import "./Card.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Card(cardData) {
  // I am called when Chrome is displaying the locations
  useEffect(() => {}, []);
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
    <div className="card">
      <h1 className="card-header"> {cardData.name} </h1>
      <img className="card-header-img" alt={cardData.alt} src={cardData.img} />
      <p className="card-body"> {cardData.description} </p>
      <Link to={cardData.id}>
        <button className="card-button" style={{ background: bgColor }}>
          View More
        </button>
      </Link>
    </div>
  );
}

export default Card;
