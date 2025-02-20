import React from "react";

function Card({ img, title, description }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;