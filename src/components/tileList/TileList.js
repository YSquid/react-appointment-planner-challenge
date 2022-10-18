import React from "react";
import {Tile} from './../tile/Tile'

export const TileList = (props) => {
  //use mockArr for now - once I have the prop passed to TileList replace with props.array
  //const mockArr = [{name: 'Albert', email: 'soup@soup.com', phone: '3064916395'}, {name: 'Roger', email: 'salad@salad.com', phone: '3067897898'},{name: 'Maggie', email: 'cleye@eleye.com', phone: '7805554878'}]
  const data = props.data
  return (
    <div>
      {data.map((object, index) =>
      <li  key={index}><Tile object={object} /></li>
      )}
      
    </div>
  );
};
