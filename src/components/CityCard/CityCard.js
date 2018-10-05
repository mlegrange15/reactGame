import React from "react";
import "./CityCard.css";

const CityCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Nickname:</strong> {props.nickname}
        </li>
        <li>
          <strong>Address:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.handleX(props.id)} className="remove">𝘅</span>
  </div>
);

export default CityCard;
