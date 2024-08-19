import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";
import { useState, useRef, useEffect } from "react";
import profile from "../assets/Auth/userProfile.png";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const user = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
  }

  // Close the dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="flex items-center justify-around h-16 bg-gradient-to-r from-gray-100 to-gray-200 text-[#6B7280] font-mono border-none shadow-md relative">
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <p className="md:pl-2 md:text-2xl text-lg text-black">
            HackathonResearchHub
          </p>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4 md:gap-10 mt-4 mb-4 items-center">
            <li
              className="text-xl hover:font-extrabold text-black cursor-pointer"
              onClick={() => navigate("/")}
            >
              <p>Home</p>
            </li>

            <li
              className="text-xl hover:font-extrabold text-black cursor-pointer"
              onClick={() => navigate("/hackathon")}
            >
              <p>Hackathons</p>
            </li>

            <li className="text-xl hover:font-extrabold text-black cursor-pointer">
              <Link to={"/research"}>Research Papers</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <div className="ml-2 flex flex-row gap-3 md:gap-8 items-center justify-center cursor-pointer relative">
              <li>
                <button className="items-center px-2  md:px-7 py-1 text-sm md:text-lg text-white font-bold border border-blue-500 bg-blue-500 rounded-md hover:bg-blue-600 group">
                  {isLoggedIn ? (
                    <Link onClick={handleLogout}>Logout</Link>
                  ) : (
                    <Link to={"/auth/login"}>Login</Link>
                  )}
                </button>
              </li>

              <li>
                {!isLoggedIn && (
                  <Link to="/auth/signup">
                    <button className="w-full px-2 md:px-7 py-1 text-sm md:text-lg text-white font-bold border border-blue-500 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-300">
                      Register
                    </button>
                  </Link>
                )}
              </li>

              <li className="relative">
                {isLoggedIn && (
                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <img
                      src={user.photoURL ? user.photoURL : profile}
                      alt="User Profile"
                      className="w-12 h-12 rounded-full border-4 border-gray-200 object-cover shadow-lg"
                    />
                    <h1 className="hidden md:block text-xl font-bold text-black">
                      {user.firstName}
                    </h1>

                    {dropdownOpen && (
                      <div
                        ref={dropdownRef}
                        className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                      >
                        <Link
                          to="/auth/profile"
                          className="flex items-center px-4 py-2 text-blue-500 hover:bg-gray-100"
                        >
                          <FaUser className="mr-2" />
                          Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
                        >
                          <FaSignOutAlt className="mr-2" />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </li>
            </div>
          </ul>
        </div>
      </nav>

      {children}

      <Footer />
    </div>
  );
}

export default Layout;
