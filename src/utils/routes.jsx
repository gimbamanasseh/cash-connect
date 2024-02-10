// import { Navigate } from "react-router-dom";
// import { Home, overview, loans } from "../pages";
import AdminWelcome from "../components/AdminWelcome";
import LoanApplicationReview from "../pages/loanApplication";
import Loans from "../pages/loans";
import OverviewAdmin from "../pages/overview";

const routes = [
  { path: "/", element: <AdminWelcome /> },
  { path: "/overview", element: <OverviewAdmin /> },
  { path: "/loans", element: <Loans /> },
  { path: "/loan-application-review", element: <LoanApplicationReview /> },
];

export { routes };
