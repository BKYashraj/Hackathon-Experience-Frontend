// import { Navigate } from "react-router-dom";
import signup from "../../assets/Auth/sign up.png";
import Layout from "../../Layouts/Layout";
import toast from "react-hot-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAccount } from "../../Redux/Slices/AuthSlice";
import OAuth from "../../Components/OAuth";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signUpState, setSignUpState] = useState({
    firstName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignUpState({ ...signUpState, [name]: value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const { firstName, email, mobileNumber, password } = signUpState;

    // Custom Validation
    if (!firstName || !email || !mobileNumber || !password) {
      toast.error("All fields are required");
      return;
    }

    if (firstName.length < 5 || firstName.length > 20) {
      toast.error("First name should be between 5 and 20 characters long");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    // Mobile number validation
    if (mobileNumber.length < 10 || mobileNumber.length > 12) {
      toast.error("Mobile number should be between 10-12 digits");
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    const apiResponse = await dispatch(createAccount(signUpState));
    console.log(apiResponse);
    if (apiResponse.payload.data.success) {
      navigate("/auth/login");
    }
  }

  return (
    <>
      <Layout>
        <section className="text-gray-600 body-font">
          <div className="flex flex-wrap items-center h-screen px-10 py-6 mx-auto">
            <div className="hidden pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 md:block">
              <img
                src={signup}
                alt="Sign Up"
                width={550}
                height={550}
                className="opacity-100 md:opacity-100"
              />
            </div>

            <form
              className="flex flex-col w-full max-w-md p-8 bg-white shadow-lg rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0"
              onSubmit={handleFormSubmit}
              noValidate // Disable the default HTML5 validation
            >
              <h2 className="mb-6 text-2xl font-bold text-gray-800">Sign Up</h2>

              <div className="relative mb-5">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  onChange={handleUserInput}
                  minLength={5}
                  placeholder="John"
                  className="w-full px-4 py-2 mt-1 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleUserInput}
                  required
                  placeholder="John@example.com"
                  className="w-full px-4 py-2 mt-1 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-5">
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  onChange={handleUserInput}
                  required
                  maxLength={12}
                  placeholder="Enter 10 digit mobile number"
                  className="w-full px-4 py-2 mt-1 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-5">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={handleUserInput}
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-1 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button
                type="submit"
                onChange={handleFormSubmit}
                className="w-full px-4 py-2 mb-6  text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600  border-0 rounded-md shadow-md focus:outline-none focus:ring-2 transition-colors duration-300"
              >
                Create Account
              </button>
              <OAuth/>
              
              <p className="mt-3">Already have an account?{" "}
              <Link
                  to="/auth/login"
                  className="text-indigo-600 hover:underline"
                >
                  Login
                </Link>
              </p>
              
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Signup;
