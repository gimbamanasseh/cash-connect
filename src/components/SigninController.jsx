import React from "react";
import Inputs from "./Inputs";

const SigninController = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Inputs control={control} {...rest} />;
    default:
      return null;
  }
};

export default SigninController;
