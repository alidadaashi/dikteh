import React from "react";

export default function Pet(props) {

  return (
    <div>
      <h2>
        {props.name} <i>{props.animal}</i>
      </h2>
    </div>
  );
}
