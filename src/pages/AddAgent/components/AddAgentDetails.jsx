import React, { Component } from "react";
import NewAgentForm from "./NewAgentForm";

export default class AddAgentDetails extends Component {
  render() {
    return (
      <>
        <section className="w-full bg-gray-50 sm:p-5">
          <div className="w-full mx-auto">
            <div className="w-[50%] h-auto bg-white mx-auto px-[1.5rem] py-[2rem] relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="relative flex justify-between mb-[2rem]">
                <span className="text-start">
                  <h3 className="font-semibold text-xl">Add New Agent</h3>
                  <p className="text-[#8C94A6] py-1">
                    Fill in new agent Information in the spaces provided below
                  </p>
                </span>
                <span className="absolute font-medium text-sm top-0 right-0">
                  1/3
                </span>
              </div>
              <NewAgentForm/>
            </div>
          </div>
        </section>
      </>
    );
  }
}
