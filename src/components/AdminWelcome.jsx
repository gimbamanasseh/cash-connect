// index which is the login tab
import { AuthLayout } from "../components/layouts";
import SigninForm from "./SigninForm";
import { NavLink } from "react-router-dom";

function AdminWelcome() {
  return (
    <AuthLayout>
      <form>
        <div className="mx-auto text-center lg:w-1/3 p-6 mt-[3.5rem] space-y-12">
          {/* login form */}
          <h2 className="font-red-500 font-bold text-grey-900 text-3xl my-3">
            Login
          </h2>
          <span className="text-grey-400 mt-4 font-normal">
            Enter your credentials to access your account
          </span>
          <SigninForm />
          <div className="flex items-center">
            <hr className="flex-grow border-t border-grey-300" />
            <span className="px-3 text-grey-400">Or</span>
            <hr className="flex-grow border-t border-grey-300" />
          </div>
          <p className="text-grey-400 leading-8 tracking-wider">
            Are you new here?{" "}
            <NavLink
              className="text-orange text-semibold cursor-pointer"
              to="/"
            >
              Create Account
            </NavLink>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
export default AdminWelcome;
