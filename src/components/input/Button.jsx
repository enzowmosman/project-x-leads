import "./Button.css";

import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button className={"ButtonComponentWrapper"} onClick={(e) => onClick(e)}>
      {children}
    </button>
  );
}
