import React from "react";
import Inputs from "./Inputs";

const SigninController = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Inputs {...rest} />;
    // Add cases for other control types (textarea, select, radio, checkbox, date) as needed
    default:
      return null;
  }
};

export default SigninController;
