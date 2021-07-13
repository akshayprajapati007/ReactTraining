import React, { useCallback, useState } from "react";
import update from "immutability-helper";
import Box from "./Box";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const app = {
  display: "grid",
  placeItems: "center",
  height: "100vh",
};

const boxContainer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  paddingTop: "35px",
  width: "450px",
  height: "350px",
  border: "1px solid black",
  borderRadius: "5px",
};

function App() {
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      name: "Box1",
    },
    {
      id: 2,
      name: "Box2",
    },
    {
      id: 3,
      name: "Box3",
    },
  ]);

  const moveBox = useCallback(
    (dragIndex, hoverIndex) => {
      const dragBox = boxes[dragIndex];
      setBoxes(
        update(boxes, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragBox],
          ],
        })
      );
    },
    [boxes]
  );

  return (
    <div style={app}>
      <DndProvider backend={HTML5Backend}>
        <div style={boxContainer}>
          {boxes.map((box, index) => (
            <Box name={box.name} key={box.id} index={index} moveBox={moveBox} />
          ))}
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
