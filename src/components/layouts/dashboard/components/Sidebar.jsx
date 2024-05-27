// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/cashconnect-logo.png";

function Sidebar() {
  // Get the current pathname
  const currentPath = window.location.pathname;

  // Add 'active' className to the active link
  const links = document.querySelectorAll(".sidebar-link");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href === currentPath) {
      link.classList.add("active:bg-gray-800", "active:text-white");
    }
  });
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 border-t-4 border-orange w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-[1.5rem] overflow-y-auto bg-grey-900 relative">
          <Link
            to="/overview"
            className="flex items-center ps-2.5 py-[1.25rem] mb-5 border-b-2 border-orange"
          >
            <img
              src={Logo}
              className="h-6 me-3 sm:h-7"
              alt="Cashconnect Logo"
            />
            <span className="self-center text-orange text-xl font-semibold whitespace-nowrap">
              Cashconnect
            </span>
          </Link>
          <ul className="space-y-2 font-medium mt-[0.75rem]">
            <li>
              <a
                href="/overview"
                className="flex items-center p-2 text-[#98A2B3] hover:font-semibold hover:text-white group rounded-[0.25rem] px-[1rem] py-[0.75rem] sidebar-link"
              >
                <svg
                  className="w-7 h-7 text-[#98A2B3] transition duration-75 group-hover:text-white group-hover:font-semibold"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 19C2.45 19 1.97917 18.8042 1.5875 18.4125C1.19583 18.0208 1 17.55 1 17V7C1 6.45 1.19583 5.97917 1.5875 5.5875C1.97917 5.19583 2.45 5 3 5H13C13.55 5 14.0208 5.19583 14.4125 5.5875C14.8042 5.97917 15 6.45 15 7V17C15 17.55 14.8042 18.0208 14.4125 18.4125C14.0208 18.8042 13.55 19 13 19H3ZM17 19V5H19V19H17ZM21 19V5H23V19H21Z" />
                </svg>
                <span className="ms-3">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="/loans"
                className="flex items-center p-2 text-[#98A2B3] hover:font-semibold hover:text-white group rounded-[0.25rem] px-[1rem] py-[0.75rem] sidebar-link"
              >
                <svg
                  className="w-7 h-7 text-[#98A2B3] transition duration-75 group-hover:text-white group-hover:font-semibold"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.66667 5.00001C6.20643 5.00001 5.83333 5.37311 5.83333 5.83334C5.83333 6.29358 6.20643 6.66668 6.66667 6.66668H13.3333C13.7936 6.66668 14.1667 6.29358 14.1667 5.83334C14.1667 5.37311 13.7936 5.00001 13.3333 5.00001H6.66667Z" />
                  <path d="M5.83333 10C5.83333 9.53977 6.20643 9.16668 6.66667 9.16668H13.3333C13.7936 9.16668 14.1667 9.53977 14.1667 10C14.1667 10.4602 13.7936 10.8333 13.3333 10.8333H6.66667C6.20643 10.8333 5.83333 10.4602 5.83333 10Z" />
                  <path d="M6.66667 13.3333C6.20643 13.3333 5.83333 13.7064 5.83333 14.1667C5.83333 14.6269 6.20643 15 6.66667 15H8.88889C9.34913 15 9.72222 14.6269 9.72222 14.1667C9.72222 13.7064 9.34913 13.3333 8.88889 13.3333H6.66667Z" />
                  <path d="M11.1111 13.3333C10.6509 13.3333 10.2778 13.7064 10.2778 14.1667C10.2778 14.6269 10.6509 15 11.1111 15H13.3333C13.7936 15 14.1667 14.6269 14.1667 14.1667C14.1667 13.7064 13.7936 13.3333 13.3333 13.3333H11.1111Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9015 18.251C12.9952 18.2745 13.0861 18.3081 13.1724 18.3513C15.1607 19.3454 17.5 17.8996 17.5 15.6767V4.16668C17.5 2.32573 16.0076 0.833344 14.1667 0.833344H5.83333C3.99238 0.833344 2.5 2.32573 2.5 4.16668V15.6767C2.5 17.8996 4.83933 19.3454 6.82757 18.3513C6.91395 18.3081 7.00479 18.2745 7.09848 18.251L9.59577 17.6267C9.86117 17.5604 10.1388 17.5604 10.4042 17.6267L12.9015 18.251ZM4.16667 4.16668C4.16667 3.2462 4.91286 2.50001 5.83333 2.50001H14.1667C15.0871 2.50001 15.8333 3.2462 15.8333 4.16668V15.6767C15.8333 16.6606 14.7979 17.3006 13.9178 16.8605C13.7226 16.763 13.5174 16.687 13.3057 16.6341L10.8085 16.0098C10.2777 15.8771 9.72235 15.8771 9.19155 16.0098L6.69426 16.6341C6.48259 16.687 6.27736 16.763 6.08221 16.8605C5.20214 17.3006 4.16667 16.6606 4.16667 15.6767V4.16668Z"
                  />
                </svg>
                <span className="ms-3">Loans</span>
              </a>
            </li>
            <li>
              <a
                href="/agents"
                className="flex items-center p-2 text-[#98A2B3] hover:font-semibold hover:text-white group rounded-[0.25rem] px-[1rem] py-[0.75rem] sidebar-link"
              >
                <svg
                  className="w-7 h-7 text-[#98A2B3] transition duration-75 group-hover:text-white group-hover:font-semibold"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 21V19H19V11.9C19 9.95 18.3208 8.29583 16.9625 6.9375C15.6042 5.57917 13.95 4.9 12 4.9C10.05 4.9 8.39583 5.57917 7.0375 6.9375C5.67917 8.29583 5 9.95 5 11.9V18H4C3.45 18 2.97917 17.8042 2.5875 17.4125C2.19583 17.0208 2 16.55 2 16V14C2 13.65 2.0875 13.3208 2.2625 13.0125C2.4375 12.7042 2.68333 12.4583 3 12.275L3.075 10.95C3.20833 9.81667 3.5375 8.76667 4.0625 7.8C4.5875 6.83333 5.24583 5.99167 6.0375 5.275C6.82917 4.55833 7.7375 4 8.7625 3.6C9.7875 3.2 10.8667 3 12 3C13.1333 3 14.2083 3.2 15.225 3.6C16.2417 4 17.15 4.55417 17.95 5.2625C18.75 5.97083 19.4083 6.80833 19.925 7.775C20.4417 8.74167 20.775 9.79167 20.925 10.925L21 12.225C21.3167 12.375 21.5625 12.6 21.7375 12.9C21.9125 13.2 22 13.5167 22 13.85V16.15C22 16.4833 21.9125 16.8 21.7375 17.1C21.5625 17.4 21.3167 17.625 21 17.775V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H11ZM9 14C8.71667 14 8.47917 13.9042 8.2875 13.7125C8.09583 13.5208 8 13.2833 8 13C8 12.7167 8.09583 12.4792 8.2875 12.2875C8.47917 12.0958 8.71667 12 9 12C9.28333 12 9.52083 12.0958 9.7125 12.2875C9.90417 12.4792 10 12.7167 10 13C10 13.2833 9.90417 13.5208 9.7125 13.7125C9.52083 13.9042 9.28333 14 9 14ZM15 14C14.7167 14 14.4792 13.9042 14.2875 13.7125C14.0958 13.5208 14 13.2833 14 13C14 12.7167 14.0958 12.4792 14.2875 12.2875C14.4792 12.0958 14.7167 12 15 12C15.2833 12 15.5208 12.0958 15.7125 12.2875C15.9042 12.4792 16 12.7167 16 13C16 13.2833 15.9042 13.5208 15.7125 13.7125C15.5208 13.9042 15.2833 14 15 14ZM6.025 12.45C5.90833 10.6833 6.44167 9.16667 7.625 7.9C8.80833 6.63333 10.2833 6 12.05 6C13.5333 6 14.8375 6.47083 15.9625 7.4125C17.0875 8.35417 17.7667 9.55833 18 11.025C16.4833 11.0083 15.0875 10.6 13.8125 9.8C12.5375 9 11.5583 7.91667 10.875 6.55C10.6083 7.88333 10.0458 9.07083 9.1875 10.1125C8.32917 11.1542 7.275 11.9333 6.025 12.45Z" />
                </svg>
                <span className="ms-3">Agents</span>
              </a>
            </li>
            <li>
              <a
                href="/clients"
                className="flex items-center p-2 text-[#98A2B3] hover:font-semibold hover:text-white group rounded-[0.25rem] px-[1rem] py-[0.75rem] sidebar-link"
              >
                <svg
                  className="w-7 h-7 text-[#98A2B3] transition duration-75 group-hover:text-white group-hover:font-semibold"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 20V17.2C1 16.6333 1.14583 16.1125 1.4375 15.6375C1.72917 15.1625 2.11667 14.8 2.6 14.55C3.63333 14.0333 4.68333 13.6458 5.75 13.3875C6.81667 13.1292 7.9 13 9 13C10.1 13 11.1833 13.1292 12.25 13.3875C13.3167 13.6458 14.3667 14.0333 15.4 14.55C15.8833 14.8 16.2708 15.1625 16.5625 15.6375C16.8542 16.1125 17 16.6333 17 17.2V20H1ZM19 20V17C19 16.2667 18.7958 15.5625 18.3875 14.8875C17.9792 14.2125 17.4 13.6333 16.65 13.15C17.5 13.25 18.3 13.4208 19.05 13.6625C19.8 13.9042 20.5 14.2 21.15 14.55C21.75 14.8833 22.2083 15.2542 22.525 15.6625C22.8417 16.0708 23 16.5167 23 17V20H19ZM9 12C7.9 12 6.95833 11.6083 6.175 10.825C5.39167 10.0417 5 9.1 5 8C5 6.9 5.39167 5.95833 6.175 5.175C6.95833 4.39167 7.9 4 9 4C10.1 4 11.0417 4.39167 11.825 5.175C12.6083 5.95833 13 6.9 13 8C13 9.1 12.6083 10.0417 11.825 10.825C11.0417 11.6083 10.1 12 9 12ZM19 8C19 9.1 18.6083 10.0417 17.825 10.825C17.0417 11.6083 16.1 12 15 12C14.8167 12 14.5833 11.9792 14.3 11.9375C14.0167 11.8958 13.7833 11.85 13.6 11.8C14.05 11.2667 14.3958 10.675 14.6375 10.025C14.8792 9.375 15 8.7 15 8C15 7.3 14.8792 6.625 14.6375 5.975C14.3958 5.325 14.05 4.73333 13.6 4.2C13.8333 4.11667 14.0667 4.0625 14.3 4.0375C14.5333 4.0125 14.7667 4 15 4C16.1 4 17.0417 4.39167 17.825 5.175C18.6083 5.95833 19 6.9 19 8Z" />
                </svg>
                <span className="ms-3">Clients</span>
              </a>
            </li>
            <li>
              <a
                href="/messaging"
                className="flex items-center p-2 text-[#98A2B3] hover:text-white rounded-[0.25rem] group px-[1rem] py-[0.75rem] sidebar-link"
              >
                <svg
                  className="flex-shrink-0 w-7 h-7 text-[#98A2B3] transition duration-75 group-hover:text-white group-hover:font-semibold"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L21.05 6.4C21.35 6.58333 21.5833 6.83333 21.75 7.15C21.9167 7.46667 22 7.8 22 8.15V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21H4C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V8.15C2 7.8 2.08333 7.46667 2.25 7.15C2.41667 6.83333 2.65 6.58333 2.95 6.4L12 1ZM12 12.65L19.8 8L12 3.35L4.2 8L12 12.65Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Messaging</span>
                <span className="inline-flex items-center justify-center w-2 h-2 p-2.5 ms-2 text-xs font-medium text-gray-900 bg-[#98a2b3] rounded-full">
                  30
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-[#98A2B3] hover:text-white rounded-[0.25rem] group px-[1rem] py-[0.75rem] sidebar-link"
              >
                <svg
                  className="flex-shrink-0 w-7 h-7 text-[#98A2B3] transition duration-75 group-hover:text-white group-hover:font-semibold"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1958 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22ZM4 19V17H6V10C6 8.61667 6.41667 7.3875 7.25 6.3125C8.08333 5.2375 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6458 2.72917 10.9375 2.4375C11.2292 2.14583 11.5833 2 12 2C12.4167 2 12.7708 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V3.825C13.3333 4.15833 13.2083 4.50833 13.125 4.875C13.0417 5.24167 13 5.61667 13 6C13 7.38333 13.4875 8.5625 14.4625 9.5375C15.4375 10.5125 16.6167 11 18 11V17H20V19H4ZM18 9C17.1667 9 16.4583 8.70833 15.875 8.125C15.2917 7.54167 15 6.83333 15 6C15 5.16667 15.2917 4.45833 15.875 3.875C16.4583 3.29167 17.1667 3 18 3C18.8333 3 19.5417 3.29167 20.125 3.875C20.7083 4.45833 21 5.16667 21 6C21 6.83333 20.7083 7.54167 20.125 8.125C19.5417 8.70833 18.8333 9 18 9Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Notification
                </span>
                <span className="inline-flex items-center justify-center w-2 h-2 p-2.5 ms-2 text-xs font-medium text-gray-900 bg-[#98a2b3] rounded-full">
                  9
                </span>
              </a>
            </li>
          </ul>
          <div className="absolute bottom-2 left-2">
            <a
              href="/"
              className="flex items-center p-2 text-[#98A2B3] hover:font-semibold hover:text-white group rounded-[0.25rem] px-[1rem] py-[0.75rem] relative mb-0"
            >
              <svg
                className="w-7 h-7 text-[#98A2B3] transition duration-75 group-hover:text-white group-hover:font-semibold"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.99948 5.00002C7.23806 5.00002 4.99948 7.2386 4.99948 10C4.99948 12.7614 7.23806 15 9.99948 15C12.7609 15 14.9995 12.7614 14.9995 10C14.9995 7.2386 12.7609 5.00002 9.99948 5.00002ZM6.66615 10C6.66615 8.15907 8.15854 6.66669 9.99948 6.66669C11.8404 6.66669 13.3328 8.15907 13.3328 10C13.3328 11.841 11.8404 13.3334 9.99948 13.3334C8.15854 13.3334 6.66615 11.841 6.66615 10Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0843 1.69077C10.9219 0.566231 9.07708 0.566231 7.91464 1.69077C7.61939 1.9764 7.20885 2.10979 6.8021 2.05226C5.20069 1.82575 3.7082 2.9101 3.42876 4.50314C3.35778 4.90776 3.10405 5.25698 2.74117 5.44952C1.31246 6.20756 0.742379 7.96208 1.45267 9.41512C1.63308 9.78419 1.63308 10.2159 1.45267 10.5849C0.742378 12.038 1.31246 13.7925 2.74117 14.5505C3.10405 14.7431 3.35778 15.0923 3.42876 15.4969C3.7082 17.0899 5.20069 18.1743 6.8021 17.9478C7.20885 17.8903 7.61939 18.0236 7.91464 18.3093C9.07708 19.4338 10.9219 19.4338 12.0843 18.3093C12.3796 18.0236 12.7901 17.8903 13.1969 17.9478C14.7983 18.1743 16.2908 17.0899 16.5702 15.4969C16.6412 15.0923 16.8949 14.7431 17.2578 14.5505C18.6865 13.7925 19.2566 12.038 18.5463 10.5849C18.3659 10.2159 18.3659 9.78419 18.5463 9.41512C19.2566 7.96208 18.6865 6.20756 17.2578 5.44952C16.8949 5.25698 16.6412 4.90776 16.5702 4.50314C16.2908 2.9101 14.7983 1.82575 13.1969 2.05226C12.7901 2.10979 12.3796 1.9764 12.0843 1.69077ZM9.07347 2.88864C9.58978 2.38916 10.4092 2.38916 10.9255 2.88864C11.5902 3.53171 12.5145 3.83203 13.4303 3.7025C14.1416 3.60189 14.8045 4.08352 14.9286 4.7911C15.0884 5.70206 15.6596 6.48831 16.4766 6.92179C17.1112 7.25848 17.3644 8.03779 17.049 8.68318C16.6428 9.51409 16.6428 10.4859 17.049 11.3169C17.3644 11.9623 17.1112 12.7416 16.4766 13.0782C15.6596 13.5117 15.0884 14.298 14.9286 15.2089C14.8045 15.9165 14.1416 16.3982 13.4303 16.2975C12.5145 16.168 11.5902 16.4683 10.9255 17.1114C10.4092 17.6109 9.58978 17.6109 9.07347 17.1114C8.40874 16.4683 7.48445 16.168 6.56869 16.2975C5.85739 16.3982 5.19448 15.9165 5.07036 15.2089C4.91056 14.298 4.33932 13.5117 3.52232 13.0782C2.88773 12.7416 2.63452 11.9623 2.95001 11.3169C3.35618 10.4859 3.35618 9.51409 2.95001 8.68318C2.63452 8.03779 2.88773 7.25848 3.52232 6.92179C4.33932 6.48831 4.91056 5.70206 5.07036 4.7911C5.19448 4.08352 5.85739 3.60189 6.56869 3.7025C7.48445 3.83203 8.40874 3.53171 9.07347 2.88864Z"
                />
              </svg>
              <span className="ms-3">Settings</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
