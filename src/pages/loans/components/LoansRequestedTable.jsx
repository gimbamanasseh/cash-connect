import React, { useState } from "react";
import TableData from "../../loans/components/TableData";

function LoansRequestedTable({ data, fileName }) {
  // overall actions button
  const [isActionsDropdownOpen, setActionsDropdownOpen] = useState(false);
  const toggleActionsDropdown = () => {
    setActionsDropdownOpen((prev) => !prev);
  };

  // data item actions feature
  const [isItemsDropdownOpen, setIsItemsDropdownOpen] = useState(false);
  const toggleItemsDropdown = () => {
    setIsItemsDropdownOpen(!isItemsDropdownOpen);
  };

  // sample data for the table content
  const sampleData = [
    {
      id: "1",
      name: "Emery Torff",
      email: "thekdfisher@email.com",
      amount: "N200,000.00",
      paymentType: "Full payment",
      timestamp: "Apr 12, 2023 | 09:32AM",
      status: "Pending",
    },
    {
      id: "2",
      name: "Maren Dokidis",
      email: "thekdfisher@email.com",
      amount: "N200,000.00",
      paymentType: "Full payment",
      timestamp: "Apr 12, 2023 | 09:24AM",
      status: "Pending",
    },
    {
      id: "3",
      name: "Cooper Siphron",
      email: "thekdfisher@email.com",
      amount: "N200,000.00",
      paymentType: "Full payment",
      timestamp: "Apr 11, 2023 | 05:46PM",
      status: "Pending",
    },
    {
      id: "4",
      name: "Marcus Dias",
      email: "thekdfisher@email.com",
      amount: "N200,000.00",
      paymentType: "Full payment",
      timestamp: "Apr 11, 2023 | 02:32PM",
      status: "Pending",
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

  // export .csv
  const downloadCSV = () => {
    // const csvContent =
    //   "data:text/csv;charset=utf-8," +
    //   data.map((row) => row.join(",")).join("\n");
    // const encodedUri = encodeURI(csvContent);
    // const link = document.createElement("a");
    // link.setAttribute("href", encodedUri);
    // link.setAttribute("download", `${fileName}.csv`);
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex justify-between my-4">
        <div className="text-[1.125rem] font-bold">Loans Requested</div>
      </div>
      <section className="w-full bg-gray-50 sm:p-5">
        <div className="w-full mx-auto">
          <div className="w-full h-auto bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="relative flex items-start w-full md:w-auto">
                <button
                  id="actionsDropdownButton"
                  data-dropdown-toggle="actionsDropdown"
                  className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-semibold text-orange bg-white rounded-lg border border-orange"
                  type="button"
                  onClick={toggleActionsDropdown}
                >
                  Actions
                  <svg
                    className="-mr-1 ml-1.5 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                </button>
                <div
                  id="actionsDropdown"
                  className={`${
                    isActionsDropdownOpen ? "block" : "hidden"
                  } absolute top-10 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow`}
                >
                  <ul
                    className="py-1 text-sm text-gray-700"
                    aria-labelledby="actionsDropdownButton"
                  >
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                        Mark as Approved
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Delete all
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                  type="button"
                  className="button w-[7.75rem] text-orange border-[1px] border-orange bg-white rounded-[0.5rem] py-[0.5rem] px-[0.75rem] text-center font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    className="inline mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.90078 1.66667C3.39075 1.66667 2.16663 2.89079 2.16663 4.40082C2.16663 4.9618 2.33918 5.50919 2.66087 5.96876L7.69868 13.1656C7.89478 13.4458 7.99996 13.7794 7.99996 14.1214V15.964C7.99996 17.6721 9.79743 18.783 11.3251 18.0191C12.3516 17.5059 13 16.4568 13 15.3092V14.1214C13 13.7794 13.1051 13.4458 13.3012 13.1656L18.339 5.96876C18.6607 5.50919 18.8333 4.9618 18.8333 4.40082C18.8333 2.89079 17.6092 1.66667 16.0991 1.66667H4.90078ZM11.3333 15.3092C11.3333 15.8255 11.0416 16.2975 10.5798 16.5284C10.1602 16.7382 9.66663 16.4331 9.66663 15.964V14.1214C9.66663 13.4375 9.45626 12.7701 9.06407 12.2099L4.02626 5.01299C3.90066 4.83356 3.83329 4.61984 3.83329 4.40082C3.83329 3.81127 4.31122 3.33334 4.90078 3.33334H16.0991C16.6887 3.33334 17.1666 3.81127 17.1666 4.40082C17.1666 4.61984 17.0993 4.83356 16.9737 5.01299L11.9359 12.2099C11.5437 12.7701 11.3333 13.4375 11.3333 14.1214V15.3092Z"
                      fill="#CB1600"
                    />
                  </svg>
                  Filter
                </button>
                <button
                  type="button"
                  onClick={downloadCSV}
                  className="disabled button w-[7.75rem] text-white border-[1px] border-orange bg-orange rounded-[0.5rem] py-[0.5rem] px-[0.75rem] text-center font-semibold"
                >
                  Export .csv
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
                      Amount
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Payment Type
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((rowData, index) => (
                    <TableData key={index} rowData={rowData} />
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
    </>
  );
}
export default LoansRequestedTable;
