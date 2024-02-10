import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// import collateralImg from "../../../../src/assets/images/collateral-cert-of-ownership.png";

// Set the root element to attach the modal to
Modal.setAppElement("#root");

const ImagePopup = ({ isOpen, onClose, imageUrl, altText }) => {
  const [imageLoadError, setImageLoadError] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  const handleClose = () => {
    setImagePopupOpen(false);
    onClose();
  };

  useEffect(() => {
    if (!imageUrl) {
      return;
    }

    const img = new Image();
    img.onload = () => setImageLoadError(false);
    img.onerror = () => setImageLoadError(true);

    // to ensure imageUrl is a valid string before assigning it to img.src
    if (typeof imageUrl === "string") {
      img.src = imageUrl;
    } else {
      console.error("Invalid imageUrl:", imageUrl);
    }

    // to clean up the event handlers when the component unmounts
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  if (!isOpen || !imageUrl) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Image Popup"
    >
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } relative top-12 z-50 mx-auto p-4 max-w-2xl justify-center items-center rounded-lg shadow-2xl h-auto`}
      >
        {/* Modal content */}
        <div className="relative">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <button
              type="button"
              className="text-[#1C1B1F] text-xl bg-transparent hover:bg-gray-200 hover:text-[#1C1B1F] rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-2 md:p-5 space-y-2">
            {imageLoadError ? (
              <p>Error loading image.</p>
            ) : (
              <img src={imageUrl} alt={altText} className="max-w-full" />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ImagePopup;
