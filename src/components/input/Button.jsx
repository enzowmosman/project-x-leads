import "./Button.css";

import React from "react";

export default function Button({ children, onClick, className }) {
  return (
    <button className={`ButtonComponentWrapper ${className}`} onClick={(e) => onClick(e)}>
      {children}
    </button>
  );
}
