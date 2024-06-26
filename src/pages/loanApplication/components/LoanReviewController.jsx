import React from "react";
import Inputs from "../../../components/Inputs";

const LoanReviewController = ({ control, onClick, ...rest }) => {
  switch (control) {
    case "input":
    case "textarea":
      return <Inputs control={control} {...rest} disabled />;
    case "img":
      if (!rest) {
        return null; // for when rest is undefined or null
      }

      const { src, alt } = rest;

      return <img src={src} alt={alt} onClick={onClick} />;
    default:
      return null;
  }
};

export default LoanReviewController;
