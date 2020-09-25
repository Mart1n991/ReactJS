import React, { useContext } from "react";
import AppContext from "../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

export default function Step3UserInputs() {
  const { globalData, setGlobalData } = useContext(AppContext);

  const onInputChange = (event) => {
    setGlobalData({
      ...globalData,
      userInputs: {
        ...globalData.userInputs,
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <>
      <h3 className="step-heading">Vyplňte formulár</h3>
      <FontAwesomeIcon icon={faAlignJustify} className="icon" />
      <form>
        <div className="row">
          <label>Krstné meno</label>
          <input
            autoFocus
            type="text"
            value={globalData.userInputs.firstName}
            name="firstName"
            onChange={onInputChange}
          ></input>
        </div>
        <div className="input-error">
          {globalData.userInputs.errors.firstName}
        </div>

        <div className="row">
          <label>Priezvisko</label>
          <input
            autoFocus
            type="text"
            value={globalData.userInputs.lastName}
            name="lastName"
            onChange={onInputChange}
          ></input>
        </div>
        <div className="input-error">
          {globalData.userInputs.errors.lastName}
        </div>

        <div className="row">
          <label>Email</label>
          <input
            autoFocus
            type="text"
            value={globalData.userInputs.email}
            name="email"
            onChange={onInputChange}
          ></input>
        </div>
        <div className="input-error">{globalData.userInputs.errors.email}</div>

        <div className="row">
          <label>Vek</label>
          <input
            autoFocus
            type="number"
            value={globalData.userInputs.age}
            name="age"
            onChange={onInputChange}
          ></input>
        </div>
        <div className="input-error">{globalData.userInputs.errors.age}</div>
      </form>
    </>
  );
}
