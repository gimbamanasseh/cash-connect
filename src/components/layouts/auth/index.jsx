import React from "react";
import logo from "../../../assets/images/cashconnect-logo.png";

function AuthLayout({ children }) {
  return (
    <main className="container-2xl">
      <div className="h-auto text-center justify-center py-4 border-b-2 border-orange">
        <img src={logo} className="inline mx-4 mt-0" alt="logo" />
        <p className="inline text-3xl tracking-wide text-orange font-bold">
          Casconnect
        </p>
      </div>
      {children}
    </main>
  );
}
export default AuthLayout;
