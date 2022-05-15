import React from "react";

function Card(props) {
  return (
    <div className="theNote">
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
    </div>
    
  );
}

export default Card;