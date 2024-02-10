import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Inputs = (props) => {
  const { id, label, name, type, placeholder, ...rest } = props;

  const getIcon = () => {
    if (type === "password") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="20"
          viewBox="0 0 640 512"
          className="fill-grey-400"
        >
          <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
        </svg>
      );
    } else if (type === "email") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18"
          width="18"
          viewBox="0 0 512 512"
          className="fill-grey-400"
        >
          <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
        </svg>
      );
    }
    // Add more conditions for other field types as needed
    return null;
  };

  return (
    <div className="mb-[1.5rem]">
      <label
        htmlFor={name}
        className="block text-sm text-left font-medium leading-6 text-grey-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <Field
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          {...rest}
          className="block w-full bg-none border-0 rounded-[0.375rem] ring-inset ring-1 ring-grey-500 focus:outline-none focus:ring-1 focus:ring-orange p-[1rem] text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center  z-index-10">
          <span className="text-gray-500 sm:text-sm">{getIcon()}</span>
        </div>
        <span className="flex select-none items-center pl-3 text-red-500 sm:text-sm">
          <ErrorMessage name={name}>
            {(error) => <TextError message={error} />}
          </ErrorMessage>
        </span>
      </div>
    </div>
  );
};

export default Inputs;
