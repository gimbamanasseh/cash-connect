import Header from "../../../components/layouts/dashboard/components/Header";
import { useState } from "react";
import RecentLoanApprovalTable from "./RecentLoanApprovalTable";

function MainContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCashOuts, setIsCashOuts] = useState(false);
  const [isServicedClients, setIsServicedClients] = useState(false);

  const toggleTotalCash = () => {
    setIsOpen(!isOpen);
  };

  const toggleCashOuts = () => {
    setIsCashOuts(!isCashOuts);
  };

  const toggleServicedClients = () => {
    setIsServicedClients(!isServicedClients);
  };
  return (
    <>
      <div className="py-6 px-[2.5rem] mt-[6.38rem]">
        <div className="flex w-full justify-between">
          <div className="lg:w-[50%]">
            <h1 className="text-2xl font-bold font-gray-900 mb-2">
              Welcome to cashconnect
            </h1>
            <p className="leading-7 font-[400]">
              Assess all loan applications on cashconnect, approve or <br />
              decline easily.
            </p>
          </div>
          <div className="lg:w-[50%] text-end">
            <a
              className="button p-4 bg-orange text-white rounded-lg"
              href="/loans"
            >
              Review loan applications
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-10 mt-[1.5rem]">
          <div className="flex items-center justify-start h-auto rounded-lg bg-white border-[1px] border-[#E4E7EC] p-[1rem]">
            <div className="w-full h-auto mt-0 py-3">
              <span className="relative text-sm flex justify-between text-gray-400 mb-2">
                Total funds available
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdownTotalCash"
                  type="button"
                  onClick={toggleTotalCash}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                {isOpen && (
                  <div
                    id="dropdownTotalCash"
                    className="absolute right-0 top-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 "
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          See details
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </span>
              <p className="my-2">N 3,031,491.00</p>
            </div>
          </div>
          <div className="flex items-center justify-start h-auto rounded-lg bg-white border-[1px] border-[#E4E7EC] p-[1rem]">
            <div className="w-full h-auto mt-0 py-3">
              <span className="relative text-sm flex justify-between text-gray-400 mb-2">
                Cash outstanding
                <button
                  id="dropdownCashOutsButton"
                  data-dropdown-toggle="dropdownCashOuts"
                  type="button"
                  onClick={toggleCashOuts}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                {isCashOuts && (
                  <div
                    id="dropdownCashOuts"
                    className="absolute right-0 top-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 "
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownCashOutsButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          See details
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </span>
              <p className="my-2">N 1,521,491.00</p>
            </div>
          </div>
          <div className="flex items-center justify-start h-auto rounded-lg bg-white border-[1px] border-[#E4E7EC] p-[1rem]">
            <div className="w-full h-auto mt-0 py-3">
              <span className="relative text-sm flex justify-between text-gray-400 mb-2">
                Serviced clients
                <button
                  id="dropdownServicedClientsButton"
                  data-dropdown-toggle="dropdownServicedClients"
                  type="button"
                  onClick={toggleServicedClients}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                {isServicedClients && (
                  <div
                    id="dropdownServicedClients"
                    className="absolute right-0 top-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 "
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownServicedClientsButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          See details
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </span>
              <p className="my-2">505 </p>
            </div>
          </div>
        </div>
        <RecentLoanApprovalTable />
      </div>
    </>
  );
}
export default MainContent;
