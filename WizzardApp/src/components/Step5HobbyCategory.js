import React, { useContext } from "react";
import AppContext from "../AppContext";
import hobbiesList from "../api/hobbies.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Step5HobbyCategory() {
  const { globalData, setGlobalData } = useContext(AppContext);

  const hobbiesSport = hobbiesList.hobbies.filter((hobby) => {
    return hobby.category === "Sport";
  });

  const hobbiesNature = hobbiesList.hobbies.filter((hobby) => {
    return hobby.category === "Nature";
  });

  const filterHobbies = () => {
    if (globalData.hobbyCategory.sport && globalData.hobbyCategory.nature) {
      return hobbiesList.hobbies;
    }

    if (globalData.hobbyCategory.sport) {
      return hobbiesSport;
    }

    if (globalData.hobbyCategory.nature) {
      return hobbiesNature;
    } else {
      return [];
    }
  };

  // First set the value of globalData filter here and after that setState in onHobbyCategoryChange.
  //I dont Know why, but it works. If I tried to set the filteredHobbies directly in setGlobal data, the state was one step behind.

  globalData.filteredHobbies = filterHobbies();

  const onHobbyCategoryChange = (event) => {
    setGlobalData({
      ...globalData,
      hobbyCategory: {
        ...globalData.hobbyCategory,
        [event.target.name]: event.target.checked,
      },

      filteredHobbies: filterHobbies(),
    });
  };

  return (
    <>
      <h3 className="step-heading">Vyberte si hobby kategóriu</h3>
      <FontAwesomeIcon icon={faLeaf} className="icon" />

      <div className="wrapper">
        <div className="hobby-category-container">
          <div>
            <input
              type="checkbox"
              checked={globalData.hobbyCategory.sport}
              name="sport"
              onChange={onHobbyCategoryChange}
              className="check-box"
            ></input>
            <label>Šport</label>
          </div>

          <div>
            <input
              type="checkbox"
              checked={globalData.hobbyCategory.nature}
              name="nature"
              onChange={onHobbyCategoryChange}
              className="check-box"
            ></input>
            <label>Príroda</label>
          </div>
        </div>
      </div>
    </>
  );
}
