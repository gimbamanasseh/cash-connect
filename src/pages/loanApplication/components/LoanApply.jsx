import React, { Component } from "react";

export default class LoanApply extends Component {
  render() {
    return (
      <>
        <section className="w-full bg-gray-50 sm:p-5">
          <div className="w-full mx-auto">
            <div className="w-[50%] h-auto bg-white mx-auto px-[1.5rem] py-[2rem] relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="relative flex justify-between mb-[2rem]">
                <span className="text-start">
                  <h3 className="font-semibold text-xl">Loan Application</h3>
                  <p className="text-[#8C94A6] py-1">
                    Below are the application details for the applicant in
                    question.
                  </p>
                </span>
                <span className="absolute font-medium text-sm top-0 right-0">
                  1/4
                </span>
              </div>
              <div>
                <h4 className="title text-[#475367] font-medium">
                  Personal Information
                </h4>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
