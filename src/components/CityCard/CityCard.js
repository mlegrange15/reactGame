import React from "react";
import "./CityCard.css";

const CityCard = props => (
    <div className="col-md-4">
      <div className="card remove text-white shadow-lg" onClick={() => props.handleClick(props.id)}>
          <img alt={props.name} src={props.image} />
          <div className="card-img-overlay">
    <h5 className="card-title">{props.name} : {props.nickname}</h5>
        </div>
      </div>
    </div>
);

export default CityCard;
