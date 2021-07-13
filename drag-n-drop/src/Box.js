import React from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const box = {
  border: "1px solid gray",
  borderRadius: "5px",
  display: "grid",
  placeItems: "center",
  width: "150px",
  height: "135px",
  cursor: "pointer",
  marginRight: "0.8em",
  fontFamily: "sans-serif",
};

function Box({ name, index, moveBox, id }) {
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.BOX,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      //if drag item place at self position then don't drag
      if (dragIndex === hoverIndex) {
        return;
      }

      moveBox(dragIndex, hoverIndex);

      //set the drag item index to new positon index which is hover item index
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BOX,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} style={{ ...box, opacity }} data-handler-id={handlerId}>
      {name}
    </div>
  );
}

export default Box;
