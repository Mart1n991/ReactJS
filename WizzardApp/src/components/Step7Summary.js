import React, { useContext } from "react";
import AppContext from "../AppContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";

export default function Step7Summary() {
  const { globalData } = useContext(AppContext);

  return (
    <>
      <h3 className="step-heading">Sumár</h3>
      <FontAwesomeIcon icon={faInfinity} className="icon" />

      <div className="wrapper">
        <div className="summary-container">
          <div className="personal-data">
            <h3 className="step-heading">Osobné údaje</h3>
            <p className="summary">
              <span>Meno:</span>
              {globalData.userInputs.firstName}
            </p>
            <p className="summary">
              <span>Priezvisko:</span>
              {globalData.userInputs.lastName}
            </p>
            <p className="summary">
              <span>Email:</span>
              {globalData.userInputs.email}
            </p>
            <p className="summary">
              <span>Vek:</span>
              {globalData.userInputs.age}
            </p>
            <p className="summary">
              <span>Jazyk:</span>
              {globalData.language}
            </p>
            <p className="summary">
              <span>Téma:</span>
              {globalData.theme}
            </p>
          </div>
          <div className="hobby-summary">
            <h3 className="step-heading summary-heading">Hobby</h3>
            <div className="hobby-summary-list">
              {globalData.hobbySelect.map((hobby, idx) => {
                return (
                  <p className="hobby" key={idx}>
                    {hobby}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
