import React, { useState } from "react";
import AgentsTableData from "../../agents/components/AgentsTableData";
import ClientsTableData from "./ClientsTableData";

function ClientsTable({ data, fileName }) {
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
      loanAmount: "N200,000",
      loanApproved: "Apr 12, 2023 | 09:32AM",
      dueDate: "Apr 12, 2024 | 09:32AM",
      loanType: "Part Payment",
    },
    {
      id: "2",
      name: "Maren Dokidis",
      email: "thekdfisher@email.com",
      loanAmount: "N200,000",
      loanApproved: "Apr 12, 2023 | 09:32AM",
      dueDate: "Apr 12, 2024 | 09:32AM",
      loanType: "Full Payment",
    },
    {
      id: "3",
      name: "Cooper Siphron",
      email: "thekdfisher@email.com",
      loanAmount: "N200,000",
      loanApproved: "Apr 11, 2023 | 09:45AM",
      dueDate: "Apr 25, 2024 | 09:32AM",
      loanType: "Full Payment",
    },
    {
      id: "4",
      name: "Marcus Dias",
      email: "thekdfisher@email.com",
      loanAmount: "N200,000",
      loanApproved: "Apr 10, 2023 | 09:45AM",
      dueDate: "Apr 25, 2024 | 09:32AM",
      loanType: "Part Payment",
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
    <>
      <div className="flex justify-between my-4">
        <div className="text-[1.125rem] font-bold">Cashconnect Clients</div>
      </div>
      <section className="w-full bg-gray-50 sm:p-5">
        <div className="w-full mx-auto">
          <div className="w-full h-auto bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 px-4">
                <thead className="text-xs text-[#344054] uppercase bg-[#F0F2F5]">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Loan Amount
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Loan Approved
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Due Date
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Loan Type
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((rowData, index) => (
                    <ClientsTableData key={index} rowData={rowData} />
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
export default ClientsTable;
