import React from "react";
import {Tile} from './../tile/Tile'

export const TileList = (props) => {
  const mockArr = [{name: 'Albert', email: 'soup@soup.com', phone: '3064916395'}, {name: 'Maggie', email: 'salad@salad.com', phone: '3067897898'},{name: 'Maggie', email: 'salad@salad.com', phone: '3067897898'}]
  return (
    <div>
      {mockArr.map((object, index) =>
      <li><Tile object={object} key={index} /></li>
      )}
      
    </div>
  );
};
