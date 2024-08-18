import toast from "react-hot-toast";
import login from "../../assets/Auth/login.png";
import Layout from "../../Layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { signIn } from "../../Redux/Slices/AuthSlice";
function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signInState, setSignInState] = useState({
    email: "",
    password: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignInState({ ...signInState, [name]: value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
  
    const { email, password } = signInState;
  
    // Custom Validation
    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email address");
      return;
    }
  
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }
  
    const apiResponse = await dispatch(signIn(signInState));
    console.log(apiResponse);
    if (apiResponse.payload.data.success) {
      navigate("/");
    }
   
  }

  return (
    <>
      <Layout>
        <section className="text-gray-600 body-font">
          <div className="flex flex-wrap items-center h-screen px-10 py-6 mx-auto">
            <div className="hidden pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 md:block">
              <img
                src={login}
                alt="Sign Up"
                width={550}
                height={550}
                className="opacity-100 md:opacity-100"
              />
            </div>

            <form className="flex flex-col w-full max-w-md p-8 bg-white shadow-lg rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">Login</h2>

              <div className="relative mb-5">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  onChange={handleUserInput}
                  name="email"
                  required
                  placeholder="John@example.com"
                  className="w-full px-4 py-2 mt-1 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-5">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password <span className="text-red-500">*</span></label>
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
                onClick={handleFormSubmit}
                className="w-full px-4 py-2 text-lg font-semibold text-white bg-yellow-500 border-0 rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300"
              >
                Create Account
              </button>

              <p className="mt-4 text-sm text-gray-600">
              Do not have an account ? {" "}
                <Link
                  to="/auth/signup"
                  className="text-yellow-500 hover:underline"
                >
                  Register
                </Link>
              </p>

            </form>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Login