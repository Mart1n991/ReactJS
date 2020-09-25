import React, { useState } from "react";
import AppContext from "./AppContext";

//Bootstrap
import { Button } from "react-bootstrap";

//Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

//Steps
import Step1Theme from "./components/Step1Theme";
import Step2Language from "./components/Step2Language";
import Step3UserInputs from "./components/Step3UserInputs";
import Step4PrivacyPolicy from "./components/Step4PrivacyPolicy";
import Step5HobbyCategory from "./components/Step5HobbyCategory";
import Step6Hobby from "./components/Step6Hobby";
import Step7Summary from "./components/Step7Summary";

//Constants
import {
  DEFAULT_STEP,
  TOTAL_STEPS,
  THEME,
  PROGRESS,
  LANGUAGES,
  USER_INPUTS,
  PRIVACY_POLICY,
  GLOBAL_ERRORS,
  HOBBY_CATEGORY,
  HOBBY_SELECT,
  FILTERED_HOBBIES,
} from "./constants";

export default function App() {
  const [globalData, setGlobalData] = useState({
    currentStep: DEFAULT_STEP,
    theme: THEME.LIGHT,
    language: LANGUAGES.SK,
    userInputs: USER_INPUTS,
    privacyPolicy: PRIVACY_POLICY,
    globalErrors: GLOBAL_ERRORS,
    hobbyCategory: HOBBY_CATEGORY,
    hobbySelect: HOBBY_SELECT,
    filteredHobbies: FILTERED_HOBBIES,
  });

  console.log("globalData", globalData);

  //Step 3 Input Validation conditions
  const inputValidation = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let ageError = "";

    if (globalData.userInputs.firstName.length <= 3) {
      firstNameError = "Meno musí mať viac ako 3 písmená";
    }

    if (globalData.userInputs.lastName.length <= 3) {
      lastNameError = "Priezvisko musí mať viac ako 3 písmená";
    }

    if (
      globalData.userInputs.email.length < 5 ||
      !globalData.userInputs.email.includes("@") ||
      !globalData.userInputs.email.includes(".")
    ) {
      emailError = "Zadajte správny formát emailu";
    }

    if (globalData.userInputs.age > 0 && globalData.userInputs.age < 18) {
      ageError = "Musíte mať viac ako 18 rokov";
    } else if (globalData.userInputs.age > 120) {
      ageError = "Pravdepodobne píšete zo záhrobia :D zadajte správny vek";
    } else if (globalData.userInputs.age <= 0) {
      ageError = "Vek musí byť väčší ako 0";
    }

    if (firstNameError || lastNameError || emailError || ageError) {
      setGlobalData({
        ...globalData,
        userInputs: {
          ...globalData.userInputs,
          errors: {
            firstName: firstNameError,
            lastName: lastNameError,
            email: emailError,
            age: ageError,
          },
        },
      });

      return false;
    }

    return true;
  };

  //Button Back settings
  const buttonBack = (event) => {
    event.preventDefault();

    if (globalData.currentStep === 7) {
      globalData.hobbySelect = [];
    }

    setGlobalData({
      ...globalData,
      currentStep: globalData.currentStep - 1,
    });
  };

  //Button Next settings
  const buttonNext = (event) => {
    event.preventDefault();

    //Step 3 input Validation
    const isValid = inputValidation();

    if (globalData.currentStep === 3 && isValid) {
      setGlobalData({
        ...globalData,
        currentStep: globalData.currentStep + 1,
        userInputs: {
          ...globalData.userInputs,
          errors: USER_INPUTS.errors,
        },
      });
    }

    //Step 4 Validation START
    if (globalData.currentStep === 4 && globalData.privacyPolicy === false) {
      setGlobalData({
        ...globalData,
        globalErrors: {
          privacyPolicy: "Musíte súhlasiť s podmienkami",
        },
      });
    }

    if (globalData.currentStep === 4 && globalData.privacyPolicy) {
      setGlobalData({
        ...globalData,
        currentStep: globalData.currentStep + 1,
        globalErrors: {
          privacyPolicy: "",
        },
      });
    }
    //Step 4 Validation END

    if (globalData.currentStep < 3 || globalData.currentStep > 4) {
      setGlobalData({
        ...globalData,
        currentStep: globalData.currentStep + 1,
      });
    }
  };

  //Toggle class to app-container depending on click of Light or Dark Button in Step1Theme component
  const appStyle = () => {
    if (globalData.theme === "Light") {
      return "light";
    }

    if (globalData.theme === "Dark") {
      return "dark";
    }
  };

  //Rendering components depending on state of current step
  const renderContent = () => {
    switch (globalData.currentStep) {
      case 1:
        return <Step1Theme />;
      case 2:
        return <Step2Language />;
      case 3:
        return <Step3UserInputs />;
      case 4:
        return <Step4PrivacyPolicy />;
      case 5:
        return <Step5HobbyCategory />;
      case 6:
        return <Step6Hobby />;
      case 7:
        return <Step7Summary />;
      default:
        return <div>Error</div>;
    }
  };

  return (
    <AppContext.Provider value={{ globalData, setGlobalData }}>
      <div className={`app-container ${appStyle()}`}>
        <Header />
        <div className="content-container">
          {renderContent(globalData.currentStep)}
        </div>

        <div className="button-container">
          {globalData.currentStep > 1 && (
            <div className="btn btn-back">
              <Button variant="danger" onClick={buttonBack}>
                SPÄŤ
              </Button>
            </div>
          )}

          {globalData.currentStep < TOTAL_STEPS && (
            <div className="btn btn-next">
              <Button variant="primary" onClick={buttonNext}>
                ĎALEJ
              </Button>
            </div>
          )}
        </div>
        <Footer now={PROGRESS} />
      </div>
    </AppContext.Provider>
  );
}
