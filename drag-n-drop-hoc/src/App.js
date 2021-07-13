import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const app = {
  display: "grid",
  placeItems: "center",
  height: "100vh",
};

const itemContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "500px",
  height: "600px",
  border: "2px solid black",
};

const itemCss = {
  height: "150px",
  width: "150px",
  border: "1px solid black",
  margin: "auto 1em",
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
