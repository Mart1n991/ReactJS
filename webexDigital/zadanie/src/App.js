import React, { useState } from "react";
import Suggestions from "./components/Suggestions";
import UserInputs from "./components/UserInputs";

function App() {
  const [suggestions, setSuggestions] = useState([]);

  const addNewSuggestion = (suggestion) => {
    setSuggestions([suggestion, ...suggestions]);
  };

  const detail = (suggestion) => {
    let tempSuggestions = suggestions.map((item) => {
      if (item.id === suggestion.id)
        return { ...suggestion, visible: !suggestion.visible };
      return item;
    });

    setSuggestions([...tempSuggestions]);
  };

  return (
    <div className="app-container">
      <UserInputs addNewSuggestion={addNewSuggestion}></UserInputs>
      <Suggestions suggestions={suggestions} detail={detail}></Suggestions>
    </div>
  );
}

export default App;
