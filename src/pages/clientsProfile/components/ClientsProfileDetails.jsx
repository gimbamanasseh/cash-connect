import React, { Component } from "react";
import ClientProfileForm from "./ClientProfileForm";

export default class ClientsProfileDetails extends Component {
  render() {
    return (
      <>
        <section className="w-full bg-gray-50 sm:p-5">
          <div className="w-full mx-auto">
            <div className="w-[50%] h-auto bg-white mx-auto px-[1.5rem] py-[2rem] relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="w-fit my-2 py-1 px-3 bg-[#FFE7E4] rounded-full text-orange font-normal underline underline-offset-4">
                View messages exchanged with client.
              </div>
              <div className="relative flex justify-between my-[2rem]">
                <span className="text-start">
                  <h3 className="font-semibold text-xl">Client Information</h3>
                  <p className="text-[#8C94A6] py-1">
                    Below are the application details for the applicant in
                    question.
                  </p>
                </span>
              </div>
              <ClientProfileForm />
            </div>
          </div>
        </section>
      </>
    );
  }
}
