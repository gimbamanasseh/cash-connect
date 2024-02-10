import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SigninController from "./SigninController";
import { NavLink } from "react-router-dom";

function SigninForm() {
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
    // simulate an asynchronous action, like an API call
    setTimeout(() => {
      // display an alert with the form values converted to a JSON string
      // alert(JSON.stringify(values, null, 2));

      // Set 'submitting' to false, form submission is complete
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
          <SigninController
            control="input"
            id="user_email"
            type="email"
            label="EMAIL ADDRESS"
            name="email"
            placeholder="enter email address"
          />
          <SigninController
            control="input"
            id="user_password"
            type="password"
            label="PASSWORD"
            name="password"
            placeholder="enter password"
          />
          <div className="h-12 my-6 w-full relative">
            <span className="absolute left-0 inline">
              <input
                type="checkbox"
                name="remember_me"
                id="remember_me"
                className="size-4 mr-2"
              />
              <p className="text-start text-sm leading-6 text-grey-900 inline">
                Remember me for 30 days
              </p>
            </span>
            <span className="absolute right-0  inline">
              <NavLink
                className="text-end text-sm text-orange font-normal cursor-pointer"
                to="/"
              >
                Forgot password?
              </NavLink>
            </span>
          </div>

          <NavLink
            to="/overview"
            type="submit"
            className="text-[16px] font-[500] text-center text-white bg-tfc-black py-3 px-6 w-full rounded-[8px] border-[1.5px] bg-orange"
          >
            Log into Account
          </NavLink>
          {/* <button>Log into Account</button> */}
        </Form>
      )}
    </Formik>
  );
}

export default SigninForm;
