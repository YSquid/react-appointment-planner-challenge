import React from "react";
import { Tile } from "./../tile/Tile";

export const TileList = (props) => {
  const data = props.data;
  return (
    <div>
      {data.map((object, index) => (
        <li key={index}>
          <Tile object={object} />
        </li>
      ))}
    </div>
  );
};
