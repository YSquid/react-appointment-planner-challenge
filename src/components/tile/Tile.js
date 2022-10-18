import React from "react";


export const Tile = (props) => {
  const values = Object.values(props.object)
  return (
    <div className="tile-container">
      {values.map((value, index) => 
        index === 0 ? <p className="tile-title" key={index}>{value}</p> : <p className='tile' key={index}>{value}</p>
      )}
    </div>
  );
};
