import React from "react";
import "./TileList.css"
import { Tile } from "./../tile/Tile";

export const TileList = (props) => {
  const data = props.data;
  return (
    <div className="tile-list">
      {data.map((object, index) => (
          <Tile key= {index} object={object} />
      ))}
    </div>
  );
};
