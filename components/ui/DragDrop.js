import React from "react";

const Box = ({ boxdata, boxNumber, handleDrag, handleDrop }) => {
  return (
    <div
      draggable={true}
      id={boxNumber}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
    >
      {boxdata}
    </div>
  );
};

export default Box;
