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
        <button
          type="button"
          onClick={onClick}
          className="button w-full text-start px-[2rem] mb-4 py-[1rem] font-semibold text-orange text-sm border-[1px] rounded-lg underline underline-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
            className="inline mr-2"
          >
            <path
              fill="#CB1600"
              d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
            />
          </svg>
          {label}
        </button>
      );
    default:
      return null;
  }
};

export default ClientProfileController;
