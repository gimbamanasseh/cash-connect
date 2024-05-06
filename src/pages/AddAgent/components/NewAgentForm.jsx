import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import NewAgentController from "./NewAgentController";

function NewAgentForm() {
  // set initial values of both inputs to empty strings
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <NewAgentController
            control="input"
            id="agent_name"
            type="text"
            label="Agent Name"
            name="agent_name"
            placeholder="Enter Agent Name"
          />
          <NewAgentController
            control="input"
            id="agent_phone_number"
            type="phone"
            label="Phone Number"
            name="agent_phone_number"
            placeholder="Enter Phone Number"
          />
          <NewAgentController
            control="input"
            id="agent_email"
            type="email"
            label="Email Address"
            name="agent_email"
            placeholder="Enter Email Address"
          />
          <NewAgentController
            control="select"
            id="means_of_id"
            label="Means of IDENTIFICATION"
            name="means_of_id"
            options={[
              { value: "none", label: "Select means of identification" },
              { value: "voters_card", label: "Voters Card" },
              { value: "drivers_license", label: "Drivers License" },
              { value: "passport", label: "Passport" },
            ]}
          />
          <NewAgentController
            control="input"
            id="identification_doc"
            type="file"
            label="Upload Means of IDENTIFICATION"
            name="identification_doc"
            placeholder="Click to upload means of identification"
          />
          <div className="h-12 flex justify-between my-6 w-full relative gap-x-10">
            <NavLink
              to="/agents"
              type="submit"
              className="text-[16px] font-[500] text-center text-orange py-3 px-6 w-full rounded-[8px] border-[1.5px] border-orange bg-white"
            >
              Cancel
            </NavLink>
            <NavLink
              type="submit"
              className="text-[16px] font-[500] text-center text-white py-3 px-6 w-full rounded-[8px] border-[1.5px] bg-orange"
            >
              Next
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default NewAgentForm;
