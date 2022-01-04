import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const app = {
  display: "grid",
  placeItems: "center",
  height: "100vh",
  background: "#2C3531",
};

const itemContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "500px",
  height: "430px",
  border: "2px solid black",
  borderRadius: "16px",
  background: "#1A1A1D",
  boxShadow: "5px 5px 3px 0px rgba(130,130,130,0.59)",
};

const itemCss = {
  height: "150px",
  width: "150px",
  border: "1px solid black",
  borderRadius: "16px",
  margin: "auto 1em",
  color: "white",
  display: "grid",
  placeItems: "center",
  background: "#2C3531",
};

const SortableItem = SortableElement(({ value }) => (
  <div style={itemCss}>{value}</div>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div style={itemContainer}>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </div>
  );
});

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newItems = arrayMove(items, oldIndex, newIndex);
    setItems(newItems);
  };

  return (
    <div style={app}>
      <SortableList items={items} onSortEnd={onSortEnd} axis="xy" />
    </div>
  );
}

export default App;
