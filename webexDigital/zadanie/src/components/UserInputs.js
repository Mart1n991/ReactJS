import React, { useState } from "react";

export default function UserInputs({ addNewSuggestion }) {
  const randomId = Math.floor(Math.random() * 1000000);

  const [userInputs, setUserInputs] = useState({
    id: randomId,
    firstName: "",
    lastName: "",
    address: "",
    description: "",
    picture: null,
    date: new Date().toLocaleDateString(),
    visible: false,
  });

  const onInputChange = (event) => {
    setUserInputs({
      ...userInputs,
      [event.target.name]: event.target.value,
    });
  };

  const fileSelectHandler = (event) => {
    setUserInputs({
      ...userInputs,
      picture: URL.createObjectURL(event.target.files[0]),
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    addNewSuggestion(userInputs);

    setUserInputs({
      id: randomId,
      firstName: "",
      lastName: "",
      address: "",
      description: "",
      picture: null,
      date: new Date().toLocaleDateString(),
      visible: false,
    });
  };

  return (
    <div>
      <form className="form-container">
        <div className="row">
          <label>Meno</label>
          <input
            autoFocus
            type="text"
            name="firstName"
            value={userInputs.firstName}
            onChange={onInputChange}
          ></input>
        </div>

        <div className="row">
          <label>Priezvisko</label>
          <input
            type="text"
            name="lastName"
            value={userInputs.lastName}
            onChange={onInputChange}
          ></input>
        </div>

        <div className="row">
          <label>Adresa</label>
          <input
            type="text"
            name="address"
            value={userInputs.address}
            onChange={onInputChange}
          ></input>
        </div>

        <div className="row">
          <label>Popis</label>
          <input
            type="text"
            name="description"
            value={userInputs.description}
            onChange={onInputChange}
          ></input>
        </div>

        <div className="row">
          <input type="file" onChange={fileSelectHandler}></input>
        </div>

        <button onClick={onSubmit} className="button">
          Odoslať
        </button>
      </form>
    </div>
  );
}
