import React, { useState } from "react";

export default function SignUpForm({ signUpNewAttendee }) {
  const randomId = Math.floor(Math.random() * Math.floor(100));

  const [userInput, setUserInput] = useState({
    id: randomId,
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  const onUserInput = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const validation = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let ageError = "";

    if (userInput.firstName.length <= 3) {
      firstNameError = "Meno musí mať viac ako 3 znaky";
    }

    if (userInput.lastName.length <= 3) {
      lastNameError = "Priezvisko musí mať viac ako 3 znaky";
    }

    if (!userInput.email.includes("@") || userInput.email.length <= 5) {
      emailError = "Nesprávny formát emailu";
    }

    if (userInput.age > 110 || userInput.age < 0 || userInput.age === "") {
      ageError = "Zadajte správny vek";
    }

    if (firstNameError || lastNameError || emailError || ageError) {
      setError({
        firstName: firstNameError,
        lastName: lastNameError,
        email: emailError,
        age: ageError,
      });
      return false;
    }

    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const isValid = validation();

    if (isValid) {
      signUpNewAttendee(userInput);

      setUserInput({
        id: randomId,
        firstName: "",
        lastName: "",
        email: "",
        age: "",
      });

      setError({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
      });
    }
  };

  return (
    <form>
      <div className="row">
        <label>Meno:</label>
        <input
          autoFocus
          type="text"
          onChange={onUserInput}
          value={userInput.firstName}
          name="firstName"
        ></input>
      </div>
      <div className="error"> {error.firstName}</div>

      <div className="row">
        <label>Priezvisko:</label>
        <input
          type="text"
          onChange={onUserInput}
          value={userInput.lastName}
          name="lastName"
        ></input>
      </div>
      <div className="error"> {error.lastName}</div>

      <div className="row">
        <label>Email:</label>
        <input
          type="email"
          onChange={onUserInput}
          value={userInput.email}
          name="email"
        ></input>
      </div>
      <div className="error"> {error.email}</div>

      <div className="row">
        <label>Vek:</label>
        <input
          type="number"
          onChange={onUserInput}
          value={userInput.age}
          name="age"
        ></input>
      </div>
      <div className="error"> {error.age}</div>

      <button className="button" onClick={onSubmit}>
        Pridať
      </button>
    </form>
  );
}
