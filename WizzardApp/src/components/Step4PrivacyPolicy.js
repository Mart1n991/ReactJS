import React, { useContext } from "react";
import AppContext from "../AppContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

export default function Step4PrivacyPolicy() {
  const { globalData, setGlobalData } = useContext(AppContext);

  const onCheckboxChange = () => {
    setGlobalData({
      ...globalData,
      privacyPolicy: !globalData.privacyPolicy,
    });
  };

  return (
    <>
      <h3 className="step-heading">Zásady ochrany osobných údajov</h3>
      <FontAwesomeIcon icon={faUserSecret} className="icon" />

      <div className="wrapper">
        <p className="privacy-policy">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="privacy-policy-agreement">
          <input
            type="checkbox"
            checked={globalData.privacyPolicy}
            onChange={onCheckboxChange}
            className="check-box"
          ></input>
          <label>Súhlasím</label>
        </div>

        {!globalData.privacyPolicy && (
          <div className="input-error">
            {globalData.globalErrors.privacyPolicy}
          </div>
        )}
      </div>
    </>
  );
}
