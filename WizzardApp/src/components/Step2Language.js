import React, { useContext } from "react";
import AppContext from "../AppContext";
import { LANGUAGES } from "../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons";

export default function Step2Language() {
  const { globalData, setGlobalData } = useContext(AppContext);

  const changeLanguage = (event) => {
    setGlobalData({
      ...globalData,
      language: event.target.value,
    });
  };

  return (
    <>
      <h3 className="step-heading">Vyberte jazyk</h3>
      <FontAwesomeIcon
        icon={faAmericanSignLanguageInterpreting}
        className="icon"
      />
      <div className="wrapper">
        <div className="language-container">
          <select onChange={changeLanguage} className="select-language">
            <option value={`${LANGUAGES.SK}`}>{LANGUAGES.SK}</option>
            <option value={`${LANGUAGES.CZ}`}>{LANGUAGES.CZ}</option>
            <option value={`${LANGUAGES.EN}`}>{LANGUAGES.EN}</option>
            <option value={`${LANGUAGES.DE}`}>{LANGUAGES.DE}</option>
          </select>
        </div>
      </div>
    </>
  );
}
