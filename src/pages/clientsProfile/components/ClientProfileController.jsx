import React from "react";
import Inputs from "../../../components/Inputs";

const ClientProfileController = ({ control, onClick, label, ...rest }) => {
  switch (control) {
    case "input":
    case "select":
    case "textarea":
      return <Inputs control={control} {...rest} disabled />;
    case "img":
      if (!rest) {
        return null; // for when rest is undefined or null
      }

      const { src, alt } = rest;

      return <img src={src} alt={alt} onClick={onClick} />;
    case "button":
      return (
        <button type="button" onClick={onClick}>
          {label}
        </button>
      );
    default:
      return null;
  }
};

export default ClientProfileController;
