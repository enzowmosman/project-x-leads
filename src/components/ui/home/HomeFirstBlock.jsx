import "./HomeFirstBlock.css";
import React from "react";

import Temp1 from "../../../assets/temp1.jpeg";
import Button from "../../input/Button.jsx";

export default function HomeFirstBlock() {
  return (
    <div className={"HomeFirstBlock__Outer"}>
      <div className={"HomeFirstBlock__Wrapper"}>
        <div className={`HomeFirstBlock__Image`}>
          <img src={Temp1} />
        </div>
        <div className={"HomeFirstBlock__Container"}>
          <span className={"HomeFirstBlock__Title"}>
            Build dashboards and track performance from everywhere
          </span>
          <span className={"HomeFirstBlock__Desc"}>
            Connect your data from any tool and track it from any device. No
            more logging into dozens of different tools to understand
            performance — now you and your team can easily connect your data,
            build and share reports, monitor trends, and discover insights.
          </span>
        </div>
        <div className={"HomeFirstBlock__ButtonContainer"}>
          <span className="material-symbols-outlined HomeFirstBlock__IndicationIcon">
            switch_access_shortcut
          </span>
          <div className={"HomeFirstBlock__ButtonInput"}>
            <input className={"HomeFirstBlock__EmailInput"} />
            <Button className={"HomeFirstBlock__Button"}>
              {"Start now ->"}
            </Button>
          </div>
        </div>
        <div className={"HomeFirstBlock__FreeContainer"}>
          <div className={"HomeFirstBlock__FreeItem"}>
            <span className="material-symbols-outlined HomeFirstBlock__FreeDoneIcon">
              done
            </span>
            <spam className={"HomeFirstBlock__FreeDesc"}>
              Teste gratuitamente
            </spam>
          </div>
          <div className={"HomeFirstBlock__FreeItem"}>
            <span className="material-symbols-outlined HomeFirstBlock__FreeDoneIcon">
              done
            </span>
            <spam className={"HomeFirstBlock__FreeDesc"}>
              Não é necessário cartão de crédito
            </spam>
          </div>
        </div>
      </div>
    </div>
  );
}
