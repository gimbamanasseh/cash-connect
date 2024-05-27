import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import ClientProfileController from "./ClientProfileController";
import ImagePopup from "../../../components/ImagePopup";

function ClientProfileForm() {
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageAlt, setSelectedImageAlt] = useState("");
  // set initial values of both inputs to empty strings
  const initialValues = {
    full_legal_name: "Emry Torff",
    dob: "01/23/1988",
    residential_address: "Abuja, Nigeria",
    phone_number: "+234 708 6691 614",
    email_address: "emerytorff@gmail.com",
    loan_type: "Full payment",
    purpose_of_loan: "financial aid for school fees",
    date_of_payment: "Jan 15th, 2024",
    collateral_status: "Yes",
    collateral_name: "A duplex",
    collateral_worth: "N 75, 000, 000.00",
    collateral_img1: "",
    collateral_img2: "",
    collateral_img3: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  // set current screen/segment
  const [currentSegment, setCurrentSegment] = useState(0);

  const segmentTitles = [
    "Personal Information",
    "Loan Specifics",
    "Collateral",
  ];

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };

  const handleNextClick = () => {
    setCurrentSegment((prevSegment) => prevSegment + 1);
  };

  // track whether the gallery popup for collateral is open or closed
  const toggleImagePopup = (src, alt) => {
    if (src && alt) {
      setImagePopupOpen(false);
      setSelectedImage(src);
      setSelectedImageAlt(alt);
      setTimeout(() => {
        setImagePopupOpen(true);
      }, 0);
    } else {
      console.error("Invalid src or alt values:", src, alt);
    }
  };

  const renderFormFields = () => {
    switch (currentSegment) {
      case 0:
        return (
          <>
            <ClientProfileController
              control="input"
              id="full_legal_name"
              type="text"
              label="Full Legal Name"
              name="full_legal_name"
            />
            <ClientProfileController
              control="input"
              id="dob"
              type="text"
              label="Date of Birth"
              name="dob"
            />
            <ClientProfileController
              control="input"
              id="residential_address"
              type="text"
              label="Residential Address"
              name="residential_address"
            />
            <ClientProfileController
              control="input"
              id="phone_number"
              type="text"
              label="Phone Number"
              name="phone_number"
            />
            <ClientProfileController
              control="input"
              id="email_address"
              type="text"
              label="Email Address"
              name="email_address"
            />
          </>
        );
      case 1:
        return (
          <>
            <ClientProfileController
              control="input"
              id="loan_type"
              type="text"
              label="Loan Type"
              name="loan_type"
            />
            <ClientProfileController
              control="textarea"
              id="purpose_of_loan"
              type="text"
              label="Purpose of Loan"
              name="purpose_of_loan"
            />
            <ClientProfileController
              control="input"
              id="date_of_payment"
              type="text"
              label="Date of Payment"
              name="date_of_payment"
            />
          </>
        );
      case 2:
        return (
          <>
            <ClientProfileController
              control="input"
              id="collateral_status"
              type="text"
              label="Do you have a collateral"
              name="collateral_status"
            />
            <ClientProfileController
              control="input"
              id="collateral_name"
              type="text"
              label="Name of collateral"
              name="collateral_name"
            />
            <ClientProfileController
              control="input"
              id="collateral_worth"
              type="text"
              label="How much is the collateral worth?"
              name="collateral_worth"
            />
            <ClientProfileController
              control="button"
              label="Click to View Collateral Photo 1"
              onClick={() =>
                toggleImagePopup(
                  require("../../../../src/assets/images/terms-and-condition.png"),
                  "Click to view the property submitted"
                )
              }
            />
            <ClientProfileController
              control="button"
              label="Click to View Collateral Photo 2"
              onClick={() =>
                toggleImagePopup(
                  require("../../../../src/assets/images/collateral-duplex.png"),
                  "Click to view the property submitted"
                )
              }
            />
            <ClientProfileController
              control="button"
              label="Click to View Collateral Photo 2"
              onClick={() =>
                toggleImagePopup(
                  require("../../../../src/assets/images/collateral-cert-of-ownership.png"),
                  "Click to view the property submitted"
                )
              }
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mb-4">
        <h3 className="title font-semibold text-[#475367]">
          {segmentTitles[currentSegment]}
        </h3>
        <div className="absolute py-1 px-3 bg-[#FFE7E4] rounded-full text-orange font-medium text-sm top-24 right-5">
          {`${currentSegment + 1}/${segmentTitles.length}`}
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            {renderFormFields()}
            <div className="h-12 flex justify-between mt-[3rem] w-full relative gap-x-10">
              <NavLink
                to="/clients"
                type="button"
                className="text-[16px] font-[500] text-center text-orange py-3 px-6 w-full rounded-[8px] border-[1.5px] border-orange bg-white"
              >
                Cancel
              </NavLink>
              {currentSegment < 2 && (
                <button
                  type="button"
                  onClick={handleNextClick}
                  className="text-[16px] font-[500] text-center text-white py-3 px-6 w-full rounded-[8px] border-[1.5px] bg-orange"
                >
                  Next
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
      {isImagePopupOpen && (
        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={() => setImagePopupOpen(false)}
          imageUrl={selectedImage}
          altText={selectedImageAlt}
        />
      )}
    </>
  );
}

export default ClientProfileForm;
