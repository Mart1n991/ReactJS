import React, { useContext } from "react";
import AppContext from "../AppContext";

import Button from "react-bootstrap/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

import { THEME } from "../constants";

export default function Step1Theme() {
  const { globalData, setGlobalData } = useContext(AppContext);

  const themeChangeDark = (theme) => {
    if (theme === globalData.theme) {
      setGlobalData({
        ...globalData,
        theme: THEME.DARK,
      });
    }
  };

  const themeChangeLight = (theme) => {
    if (theme === THEME.DARK) {
      setGlobalData({
        ...globalData,
        theme: THEME.LIGHT,
      });
    }
  };

  return (
    <>
      <h3 className="step-heading">Vyberte si tému</h3>
      <FontAwesomeIcon icon={faShieldAlt} className="icon" />
      <div className="button-container button-container-step1">
        <Button
          variant="light"
          onClick={() => themeChangeLight(globalData.theme)}
        >
          Svetlá
        </Button>
        <Button
          variant="dark"
          onClick={() => themeChangeDark(globalData.theme)}
        >
          Tmavá
        </Button>
      </div>
    </>
  );
}
