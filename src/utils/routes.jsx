import React from "react";
import AdminWelcome from "../components/AdminWelcome";
import LoanApplicationReview from "../pages/loanApplication";
import Loans from "../pages/loans";
import OverviewAdmin from "../pages/overview";
import Agents from "../pages/agents";
import AgentDetails from "../pages/agentDetails";
import AddAgent from "../pages/AddAgent";
import ClientAll from "../pages/clients";
import ClientsProfile from "../pages/clientsProfile";
import Messaging from "../pages/messaging";

const routes = [
  { path: "/", element: <AdminWelcome /> },
  { path: "/overview", element: <OverviewAdmin /> },
  { path: "/loans", element: <Loans /> },
  {
    path: "/loans/loan-application-review",
    element: <LoanApplicationReview />,
  },
  { path: "/agents", element: <Agents /> },
  { path: "/agents/agent-details", element: <AgentDetails /> },
  { path: "/agents/add-agent", element: <AddAgent /> },
  { path: "/clients", element: <ClientAll /> },
  { path: "/clients/client-profile", element: <ClientsProfile /> },
  { path: "/messaging", element: <Messaging /> },
];

export { routes };
