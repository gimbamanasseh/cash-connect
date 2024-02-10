import React, { useState } from "react";
import ProfilePic from "../../../../assets/images/profile-rounded.png";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="fixed top-0 w-full  border-t-4 border-orange bg-white z-50">
      <div className="flex items-center justify-between py-3 px-[2.5rem] border border-b-[#E4E7EC]">
        <div className="relative w-1/4 mt-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                  fill="#475367"
                />
              </svg>
            </span>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-[0.75rem] px-[3rem] text-gray-900 ring-inset ring-1 ring-grey-500 focus:outline-none focus:ring-1 focus:ring-orange p-[1rem] placeholder:text-gray-500 sm:text-sm sm:leading-6"
            placeholder="Search"
          />
        </div>
        <div className="w-1/4">
          <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0">
            <button
              type="button"
              className="flex text-sm"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
            >
              <img
                className="w-8 h-8 fill rounded-full mt-1"
                src={ProfilePic}
                alt="user photo"
              />
              <span className="text-start pl-3">
                <span className="block text-sm text-gray-900">Eugene A.</span>
                <span className="block text-xs text-gray-500 truncate">
                  eu@cashconnect
                </span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-2 mt-2"
              >
                <g mask="url(#mask0_702_26089)">
                  <path d="M12 15L7 10H17L12 15Z" fill="#1C1B1F" />
                </g>
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            {isDropdownOpen && (
              <div
                className="absolute mt-[19rem] z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900">Eugene A.</span>
                  <span className="block text-sm text-gray-500 truncate">
                    eu@cashconnect
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
