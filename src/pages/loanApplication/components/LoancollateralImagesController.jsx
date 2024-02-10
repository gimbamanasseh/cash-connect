import React from "react";
import {} from "../../../components/Images";

const LoancollateralImagesController = ({ control, src, alt, onClick }) => {
  switch (control) {
    case "img":
      if (!src) {
        return null; // for when rest is undefined or null
      }

      return <img src={src} alt={alt} onClick={onClick} />;
    default:
      return null;
  }
};
export default LoancollateralImagesController;
