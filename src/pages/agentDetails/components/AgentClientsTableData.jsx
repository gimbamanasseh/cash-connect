import React, { useState } from "react";
import PropTypes from "prop-types";

const AgentClientsTableData = ({ rowData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <tr className="border-b">
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="flex items-center mx-3">
          <input
            id={`${rowData.id}-checkbox`}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor={`${rowData.id}-checkbox`} className="sr-only">
            checkbox
          </label>
        </div>
        <div className="flex gap-x-1">
          <div className="ps-3">
            <div className="text-base text-gray-900">{rowData.name}</div>
          </div>
        </div>
      </th>
      <td className="px-4 py-3 text-[#344054]">{rowData.amount}</td>
      <td className="px-4 py-3 text-[#344054]">{rowData.timestampTaken}</td>
      <td className="px-4 py-3 text-[#344054]">{rowData.timestampRepay}</td>
      <td className="absolute py-3 flex items-center justify-center">
        <button
          id={`${rowData.id}-dropdown-button`}
          data-dropdown-toggle={`${rowData.id}-dropdown`}
          className="inline-flex items-center p-[0.5rem] mr-15 text-sm font-medium border-[1px] border-[#E4E7EC] text-center text-gray-500 rounded-lg"
          type="button"
          onClick={toggleDropdown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M9.5 2.66666C9.5 3.21895 9.05228 3.66666 8.5 3.66666C7.94772 3.66666 7.5 3.21895 7.5 2.66666C7.5 2.11438 7.94772 1.66666 8.5 1.66666C9.05228 1.66666 9.5 2.11438 9.5 2.66666Z"
              fill="black"
            />
            <path
              d="M9.5 8C9.5 8.55228 9.05228 9 8.5 9C7.94772 9 7.5 8.55228 7.5 8C7.5 7.44771 7.94772 7 8.5 7C9.05228 7 9.5 7.44771 9.5 8Z"
              fill="black"
            />
            <path
              d="M8.5 14.3333C9.05228 14.3333 9.5 13.8856 9.5 13.3333C9.5 12.781 9.05228 12.3333 8.5 12.3333C7.94772 12.3333 7.5 12.781 7.5 13.3333C7.5 13.8856 7.94772 14.3333 8.5 14.3333Z"
              fill="black"
            />
          </svg>
        </button>
        <div
          id={`${rowData.id}-dropdown`}
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } absolute top-[-1] right-10 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow `}
        >
          <ul
            className="py-1 text-sm text-gray-700 "
            aria-labelledby={`${rowData.id}-dropdown-button`}
          >
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 ">
                Assign to new agent
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
            >
              Delete Client
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};

AgentClientsTableData.propTypes = {
  rowData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    timestampTaken: PropTypes.string.isRequired,
    timestampRepay: PropTypes.string.isRequired,
  }).isRequired,
};

export default AgentClientsTableData;
