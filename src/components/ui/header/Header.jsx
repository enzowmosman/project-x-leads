import "./Header.css";

import React from "react";

import LogoBIM from "../../../assets/Logo_BIMachine.png";
import Button from "../../input/Button.jsx";


export default function Header() {
  return (
      <React.Fragment>
          <div className={'headerSpace'} />
          <div className={"headerWrapper"}>
              <img src={LogoBIM} />
              <Button>Teste grátis hoje</Button>
          </div>
      </React.Fragment>
  );
}

