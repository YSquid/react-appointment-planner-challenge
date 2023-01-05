import React from "react";
import "./Tile.css"

export const Tile = (props) => {
  const values = Object.values(props.object);
  return (
    <div className="tile-container">
      {values.map((value, index) =>
        index === 0 ? (
          <h3 className="tile-title" key={index}>
            {value}
          </h3>
        ) : (
          <p className="tile-value" key={index}>
            {value}
          </p>
        )
      )}
    </div>
  );
};
