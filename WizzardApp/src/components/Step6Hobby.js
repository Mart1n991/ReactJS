import React, { useContext } from "react";
import AppContext from "../AppContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";

export default function Step6Hobby() {
  const { globalData, setGlobalData } = useContext(AppContext);

  //add false value to hobbiesList
  const hobbiesListUpdate = globalData.filteredHobbies.map((element) => {
    return {
      ...element,
      select: false,
    };
  });

  const onHobbySelect = (event) => {
    let index;

    if (event.target.checked) {
      globalData.hobbySelect.push(event.target.value);
    } else {
      index = globalData.hobbySelect.indexOf(event.target.value);
      globalData.hobbySelect.splice(index, 1);
    }

    setGlobalData({
      ...globalData,
      hobbySelect: globalData.hobbySelect,
    });
  };

  const renderHobbies = () => {
    return (
      <>
        {hobbiesListUpdate.map((hobby) => {
          return (
            <div key={hobby.id} className="hobby-select">
              <input
                type="checkbox"
                value={hobby.name}
                onChange={onHobbySelect}
                className="check-box"
              ></input>
              <p className="hobby-name">{hobby.name}</p>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="wrapper">
      {globalData.filteredHobbies.length === 0 ? (
        <div className="step6-heading">
          <h3 className="step-heading">Nevybrali ste žiadnu kategóriu.</h3>
          <h3 className="step-heading">Vráťte sa o krok späť.</h3>
          <FontAwesomeIcon icon={faVolleyballBall} className="icon" />
        </div>
      ) : (
        <div className="step6-heading">
          <h3 className="step-heading step6-heading">Vyberte si hobby</h3>
          <FontAwesomeIcon icon={faVolleyballBall} className="icon" />
        </div>
      )}
      <div className="hobby-select-container">{renderHobbies()}</div>
    </div>
  );
}
