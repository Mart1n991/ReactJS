import React, { useContext } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import AppContext from "../AppContext";
import { PROGRESS } from "../constants";

export default function Footer({ now }) {
  const { globalData } = useContext(AppContext);

  const progessBar = () => {
    switch (globalData.currentStep) {
      case 2:
        return (now = PROGRESS * 2);
      case 3:
        return (now = PROGRESS * 3);
      case 4:
        return (now = PROGRESS * 4);
      case 5:
        return (now = PROGRESS * 5);
      case 6:
        return (now = PROGRESS * 6);
      case 7:
        return (now = PROGRESS * 7);
      default:
        return (now = 0);
    }
  };

  return <ProgressBar now={progessBar()} />;
}
