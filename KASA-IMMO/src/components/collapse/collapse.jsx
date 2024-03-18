import React, { useState } from "react";
import "./collapse.css";
import collapseData from "./collapse.json";
function Collapse() {
  const [data, setData] = useState(collapseData);
  return (
    <div className="container">
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <button onClick={() => handleCollapseToggle(item.id)}>
            {item.state ? "▼" : "►"}
          </button>
          {item.state && <p>{item.text}</p>}
        </div>
      ))}
    </div>
  );

  function handleCollapseToggle(id) {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            state: !item.state,
          };
        }
        return item;
      });
    });
  }
}

export default Collapse;
