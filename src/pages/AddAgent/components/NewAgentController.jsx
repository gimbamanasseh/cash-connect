import React from "react";
import Inputs from "../../../components/Inputs";

const NewAgentController = ({ control, ...rest }) => {
  switch (control) {
    case "input":
    case "select":
      return <Inputs control={control} {...rest} />;
    default:
      return null;
  }
};

export default NewAgentController;
