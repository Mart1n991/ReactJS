import React from "react";

export default function Suggestions({ suggestions, detail }) {
  return (
    <div className="suggestion-container">
      <h1 className="suggestion-heading">Zoznam Podnetov</h1>
      {suggestions.map((suggestion, index) => {
        return (
          <div
            key={suggestion.id}
            className="suggestion"
            onClick={() => detail(suggestion)}
          >
            <div className="suggestion-number">{index + 1}</div>

            <div className="suggestion-details">
              <div className="suggestion-name">
                {suggestion.firstName}
                {` ${suggestion.lastName}`}
              </div>

              <div className="suggestion-address">{suggestion.address}</div>
              {suggestion.visible ? (
                <div className="suggestion-description">
                  <p>{suggestion.description}</p>
                  <p>Podnet bol pridaný: {suggestion.date}</p>
                </div>
              ) : null}
            </div>

            <div className="suggestion-picture">
              <img
                src={suggestion.picture}
                alt="obrázok"
                className="suggestion-picture"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}
