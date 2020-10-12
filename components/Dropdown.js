import React from "react";

function Dropdown({ data = [] }) {
  return (
    <div className="bg-blue-500">
      <ul>
        {data.map((item, i) => {
          <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
