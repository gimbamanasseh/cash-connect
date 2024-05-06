import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AgentClientsTableData from "./AgentClientsTableData";
import ProgressChart from "./ProgressChart";

function AgentClientsTable({ data }) {
  const location = useLocation();
  const agentData = location.state?.agentData || {};
  // console.log(agentData);
  // console.log("location state:", location.state);
  // data item actions feature
  const [isItemsDropdownOpen, setIsItemsDropdownOpen] = useState(false);
  const toggleItemsDropdown = () => {
    setIsItemsDropdownOpen(!isItemsDropdownOpen);
  };

  // sample data for the table content
  const sampleData = [
    {
      id: "1",
      name: "Sahlom Winner",
      amount: "N200,000.00",
      timestampTaken: "Nov 24, 2023",
      timestampRepay: "Jan 01, 2024",
    },
    {
      id: "2",
      name: "Hillary Wilton",
      amount: "N200,000.00",
      timestampTaken: "Nov 24, 2023",
      timestampRepay: "Jan 01, 2024",
    },
    {
      id: "3",
      name: "Mathew Jack",
      amount: "N200,000.00",
      timestampTaken: "Nov 24, 2023",
      timestampRepay: "Jan 01, 2024",
    },
    {
      id: "4",
      name: "Dom Anthony",
      amount: "N200,000.00",
      timestampTaken: "Nov 24, 2023",
      timestampRepay: "Jan 01, 2024",
    },
  ];

  // pagination for the table data
  const itemsPerPage = 10;
  const totalPages = Math.ceil(sampleData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = sampleData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="bg-white px-5 py-5 rounded-[0.75rem]">
      <div className="flex justify-between my-4">
        <div>
          <h3 className="text-[1.125rem] font-bold">{agentData.name}</h3>
          <span>See the clients data</span>
        </div>
      </div>
      <div className="flex justify-between w-full py-3 my-3">
        <div>
          <ProgressChart
            title="Client"
            extraTitle="Number of Clients"
            value={agentData.clientsServiced}
            minLimit={0}
            maxLimit={500}
          />
        </div>
        <div>
          <ProgressChart
            title="Cleared"
            value={2}
            minLimit={0}
            maxLimit={500}
            extraTitle="Successfully Paid"
          />
        </div>
        <div>
          <ProgressChart
            title="Cash"
            value={200}
            minLimit={0}
            maxLimit={500}
            extraText="k"
            extraTitle="Cash Received"
          />
        </div>
        <div>
          <ProgressChart
            title="Debts"
            value={120}
            minLimit={0}
            maxLimit={500}
            extraText="k"
            extraTitle="Outstanding Cash"
          />
        </div>
        <div>
          <ProgressChart
            title="Pay rates"
            value={agentData.paymentRatio}
            minLimit={0}
            maxLimit={100}
            extraText="%"
            extraTitle="Payment Ratio"
          />
        </div>
      </div>
      <section className="w-full sm:p-5 mt-7">
        <div className="w-full mx-auto">
          <div className="w-full h-auto bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="relative flex items-start w-full md:w-auto">
                <p>
                  <span className="font-semibold text-grey-900">Clients:</span>{" "}
                  10
                </p>
              </div>

              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
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
                    name="search_agent_clients"
                    id="search_agent_clients"
                    className="block w-full rounded-md border-0 py-[0.5rem] px-[3rem] text-gray-900 ring-inset ring-1 ring-grey-500 focus:outline-none focus:ring-1 focus:ring-orange p-[1rem] placeholder:text-gray-500 sm:text-sm sm:leading-5"
                    placeholder="Search here..."
                  />
                </div>
                <button
                  type="button"
                  className="button text-grey-900 border-[1px] border-grey-500 bg-white rounded-[0.5rem] py-[0.3rem] px-[1.5rem] text-center font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    className="inline mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.90078 1.66667C3.39075 1.66667 2.16663 2.89079 2.16663 4.40082C2.16663 4.9618 2.33918 5.50919 2.66087 5.96876L7.69868 13.1656C7.89478 13.4458 7.99996 13.7794 7.99996 14.1214V15.964C7.99996 17.6721 9.79743 18.783 11.3251 18.0191C12.3516 17.5059 13 16.4568 13 15.3092V14.1214C13 13.7794 13.1051 13.4458 13.3012 13.1656L18.339 5.96876C18.6607 5.50919 18.8333 4.9618 18.8333 4.40082C18.8333 2.89079 17.6092 1.66667 16.0991 1.66667H4.90078ZM11.3333 15.3092C11.3333 15.8255 11.0416 16.2975 10.5798 16.5284C10.1602 16.7382 9.66663 16.4331 9.66663 15.964V14.1214C9.66663 13.4375 9.45626 12.7701 9.06407 12.2099L4.02626 5.01299C3.90066 4.83356 3.83329 4.61984 3.83329 4.40082C3.83329 3.81127 4.31122 3.33334 4.90078 3.33334H16.0991C16.6887 3.33334 17.1666 3.81127 17.1666 4.40082C17.1666 4.61984 17.0993 4.83356 16.9737 5.01299L11.9359 12.2099C11.5437 12.7701 11.3333 13.4375 11.3333 14.1214V15.3092Z"
                      fill="#162540"
                    />
                  </svg>
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 px-4">
                <thead className="text-xs text-[#344054] uppercase bg-[#F0F2F5]">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Loan taken on
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-4 py-3">
                      repayment Date
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((rowData, index) => (
                    <AgentClientsTableData key={index} rowData={rowData} />
                  ))}
                </tbody>
              </table>
            </div>
            {/* table data pagination */}
            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
              <span className="text-sm font-normal text-gray-500">
                Showing
                <span className="font-semibold text-gray-900">
                  {startIndex + 1}-{Math.min(endIndex, sampleData.length)}
                </span>
                of
                <span className="font-semibold text-gray-900">
                  {sampleData.length}
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <ul className="flex items-stretch -space-x-px">
                  <li>
                    <a
                      href="#"
                      className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                        currentPage === 1 ? "cursor-not-allowed" : ""
                      }`}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  {/* Render page numbers dynamically */}
                  {[...Array(totalPages)].map((_, page) => (
                    <li key={page}>
                      <a
                        href="#"
                        className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                          currentPage === page + 1 ? "font-bold" : ""
                        }`}
                        onClick={() => handlePageChange(page + 1)}
                      >
                        {page + 1}
                      </a>
                    </li>
                  ))}

                  <li>
                    <a
                      href="#"
                      className={`flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                        currentPage === totalPages ? "cursor-not-allowed" : ""
                      }`}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </section>
  );
}
export default AgentClientsTable;
