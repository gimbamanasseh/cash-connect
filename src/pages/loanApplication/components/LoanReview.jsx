import { Form, Formik } from "formik";
import React, { useState } from "react";
import LoanReviewController from "./LoanReviewController";
import ImagePopup from "../../../components/ImagePopup";

function LoanReview({ src, alt }) {
  const [activeSection, setActiveSection] = useState(0);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageAlt, setSelectedImageAlt] = useState("");
  const displayContent = (index) => {
    setActiveSection(index);

    // Remove 'active' class from all buttons
    document.querySelectorAll(".linkClass").forEach((button) => {
      button.classList.remove("active");
    });

    // Display the selected content and add 'active' class to the button
    const selectedContent = document.getElementById(`content_${index}`);
    const selectedButton = document.getElementById(`button_${index}`);

    if (selectedContent && selectedButton) {
      selectedContent.style.display = "block";
      selectedButton.classList.add("active");
    }
  };

  // actions button
  const [isActionsDropdownOpen, setActionsDropdownOpen] = useState(false);
  const toggleActionsDropdown = () => {
    setActionsDropdownOpen((prev) => !prev);
  };

  // form data for dynamic rendering
  const data = {
    fullname: "Emery Troff",
    sections: [
      {
        title: "Borrower Details",
        description: "See all the details of the borrower.",
        description_button: "See all the details of the borrower.",
        formFields: [
          {
            id: "applicant_name",
            type: "input",
            label: "Applicant Name",
            placeholder: "Emery Troff",
          },
          {
            id: "application_date",
            type: "input",
            label: "Application Date",
            placeholder: "1 Dec, 2023.",
          },
          {
            id: "approval_date",
            type: "input",
            label: "Approval Date",
            placeholder: "1 Dec, 2023.",
          },
          {
            id: "loan_amount",
            type: "input",
            label: "Loan Amount",
            placeholder: "N 100,000.00",
          },
          {
            id: "loan_balance",
            type: "input",
            label: "Loan Balance",
            placeholder: "N 20,000.00",
          },
        ],
      },
      {
        title: "Employer Information",
        description:
          "Below are the employer details for the applicant in question.",
        description_button: "See the employment details of client",
        formFields: [
          {
            id: "employer_name",
            type: "input",
            label: "Employer Name",
            placeholder: "Afolabi Hanifa",
          },
          {
            id: "company_name",
            type: "input",
            label: "Company",
            placeholder: "Creative Studio Duo",
          },
          {
            id: "job_title",
            type: "input",
            label: "Job Title",
            placeholder: "Designer",
          },
          {
            id: "monthly_income",
            type: "input",
            label: "Monthly Income",
            placeholder: "N400,000.00",
          },
        ],
      },
      {
        title: "Banking Information",
        description:
          "Below are the banking details for the applicant in question.",
        description_button: "See the plans for repayment of funds",
        formFields: [
          {
            id: "account_name",
            type: "input",
            label: "Account Name",
            placeholder: "Zion Johnathan",
          },
          {
            id: "account_number",
            type: "input",
            label: "Account Number",
            placeholder: "332132342",
          },
          {
            id: "bank_name",
            type: "input",
            label: "Bank Name",
            placeholder: "First Bank",
          },
          {
            id: "bank_verification_number",
            type: "input",
            label: "BVN",
            placeholder: "323244445",
          },
        ],
      },
      {
        title: "Guarantor’s Information",
        description:
          "Below are the guarantor's details for the applicant in question.",
        description_button: "See the Guarantor’s Information",
        formFields: [
          {
            id: "guarantor_name",
            type: "input",
            label: "Gurantor Name",
            placeholder: "Ozenua John Tobi",
          },
          {
            id: "guarantor_relationship",
            type: "input",
            label: "Relationship",
            placeholder: "Brother",
          },
          {
            id: "guarantor_job_title",
            type: "input",
            label: "Job Title",
            placeholder: "Designer",
          },
          {
            id: "guarantor_yearly_income",
            type: "input",
            label: "Yearly Income",
            placeholder: "$1,200,000.00",
          },
        ],
      },
      {
        title: "Collateral",
        description:
          "Below are the collateral and other related documents provided by the applicant in question.",
        description_button: "See the collateral of the borrower",
        formFields: [
          {
            id: "reg_t_and_c",
            type: "img",
            label: "Registration form with Terms and Conditions",
            alt: "Click to view Terms and Conditions",
            src: require("../../../../src/assets/images/terms-and-condition.png"),
            onClick: () =>
              toggleImagePopup(
                require("../../../../src/assets/images/terms-and-condition.png"),
                "Click to view Terms and Conditions"
              ),
          },
          {
            id: "property_img",
            type: "img",
            label: "Image of property",
            alt: "Click to view the property submitted",
            src: require("../../../../src/assets/images/collateral-duplex.png"),
            onClick: () =>
              toggleImagePopup(
                require("../../../../src/assets/images/collateral-duplex.png"),
                "Click to view the property submitted"
              ),
          },
          {
            id: "cert_of_ownership",
            type: "img",
            label: "Property CfO",
            alt: "Click to view the property's CfO",
            src: require("../../../../src/assets/images/collateral-cert-of-ownership.png"),
            onClick: () =>
              toggleImagePopup(
                require("../../../../src/assets/images/collateral-cert-of-ownership.png"),
                "Click to view the property's CfO"
              ),
          },
        ],
      },
    ],
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

  return (
    <>
      <div className="flex justify-between my-4">
        <div>
          <h2 className="text-[1.125rem] font-bold mb-2">Loan Details</h2>
          <p className="text-[#8C94A6] py-1">
            See all details regarding the loan taken by{" "}
            <span className="font-semibold text-black">{data.fullname}</span>.
          </p>
        </div>
        <div className="relative lg:w-[50%] text-end">
          <button
            id="actionsDropdownButton"
            data-dropdown-toggle="actionsDropdown"
            className="py-[1rem] px-[1.5rem] text-sm font-semibold text-white bg-orange rounded-lg"
            type="button"
            onClick={toggleActionsDropdown}
          >
            Actions
            <svg
              className="-mr-1 ml-1.5 w-5 h-5 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div
            id="actionsDropdown"
            className={`${
              isActionsDropdownOpen ? "block" : "hidden"
            } absolute top-17 right-2 z-10 w-44 bg-white rounded divide-y text-start divide-gray-100 shadow`}
          >
            <ul
              className="py-1 text-sm text-gray-700"
              aria-labelledby="actionsDropdownButton"
            >
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Approve Loan
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                  Reject Loan
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
              >
                Reject and Delete
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-gray-50 sm:p-5">
        <div className="w-full flex flex-row mx-auto gap-x-6">
          <div
            id={`content_${activeSection}`}
            className="contentClass w-[70%] h-auto bg-white mx-auto px-[1.5rem] py-[2rem] shadow-md sm:rounded-lg overflow-hidden"
          >
            <div className="relative flex justify-between mb-[2rem]">
              <span className="text-start">
                <h3 className="font-semibold text-xl">
                  {data.sections[activeSection].title}
                </h3>
                <p className="text-[#8C94A6] py-1">
                  {data.sections[activeSection].description}
                </p>
              </span>
              <span className="absolute rounded-full bg-[#D7FFCC] text-[#1B7A00] font-medium px-[1rem] py-[0.25rem] text-sm top-0 right-0">
                50% payment made
              </span>
            </div>
            <div>
              <div className={`block gap-y-[1rem]`}>
                <Formik>
                  <Form>
                    {(data.sections[activeSection].formFields || []).map(
                      (field) => (
                        <React.Fragment key={field?.id}>
                          {field && (
                            <>
                              {field.type === "img" ? (
                                <div>
                                  {field.label && (
                                    <label
                                      htmlFor={field.id}
                                      className="block text-sm mb-2 font-normal text-grey-900"
                                    >
                                      {field.label}
                                    </label>
                                  )}
                                  <button
                                    id={field.id}
                                    type="button"
                                    className="button px-[2rem] mb-4 py-[1rem] font-semibold text-orange text-sm border-[1px] rounded-lg underline underline-offset-2"
                                    onClick={() => {
                                      field.src &&
                                        toggleImagePopup(field.src, field.alt);
                                    }}
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
                                    {field.alt}
                                  </button>
                                </div>
                              ) : (
                                <LoanReviewController
                                  key={field.id}
                                  control={field.type}
                                  id={field.id}
                                  label={field.label}
                                  name={field.id}
                                  placeholder={field.placeholder}
                                  // Other props for input fields
                                />
                              )}
                            </>
                          )}
                        </React.Fragment>
                      )
                    )}
                    {isImagePopupOpen && (
                      <ImagePopup
                        isOpen={isImagePopupOpen}
                        onClose={() => setImagePopupOpen(false)}
                        imageUrl={selectedImage}
                        altText={selectedImageAlt}
                      />
                    )}
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
          <div className="relative w-[30%] h-screen bg-white mx-auto px-[1.5rem] py-[2rem] shadow-md sm:rounded-lg overflow-hidden">
            <ul className="list-none flex flex-col gap-y-[2rem] mb-5">
              {data.sections.map((section, index) => (
                <li className="h-30" key={index}>
                  <button
                    className={`linkClass flex flex-row justify-start space-x-[1rem] content-center ${
                      activeSection === index ? "active" : ""
                    }`}
                    onClick={() => displayContent(index)}
                  >
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="34"
                        width="34"
                        viewBox="0 0 530 530"
                        className="text-[#98A2B3] mt-2"
                      >
                        <path
                          fill="#98A2B3"
                          className="fill"
                          d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                        />
                      </svg>
                    </div>
                    <div className="text-start">
                      <h4 className="text-base font-semibold">
                        {section.title}
                      </h4>
                      <span className="block text-[#475367] text-xs">
                        {section.description_button}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
            <div className="absolute px-5 flex w-full bottom-3 mt-5 gap-x-3">
              <button className="py-[1rem] px-[1.5rem] bg-orange text-white font-semibold rounded-lg">
                Accept Loan
              </button>{" "}
              <button className="py-[1rem] px-[1.5rem] bg-white text-orange border-[1px] border-orange font-semibold rounded-lg">
                Reject Loan
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default LoanReview;
