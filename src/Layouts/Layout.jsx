import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <div>
      <nav className="flex items-center justify-around h-16 bg-gradient-to-r from-gray-100 to-gray-200 text-[#6B7280] font-mono border-none shadow-md">
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <p className="md:pl-2 md:text-2xl text-xl text-black">
            HackathonResearchHub
          </p>
          {/* <img src={Pizzalogo} className="h-13 w-12 md:h-16 md:w-16" alt="Pizza logo" /> */}
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4 md:gap-10 mt-4 mb-4 items-center">
            <li
              className="text-xl hover:font-extrabold text-black cursor-pointer"
              // onClick={scrollToMenu}
              onClick={() => navigate("/")}
            >
              {" "}
              <p>Home </p>
            </li>

            <li
              className="text-xl hover:font-extrabold text-black cursor-pointer"
              // onClick={scrollToServices}
              onClick={() => navigate("/hackathon")}
            >
              {" "}
              <p>Hackathons</p>
            </li>

            <li
              className="text-xl hover:font-extrabold text-black cursor-pointer"
              // onClick={scrollToAbout}
            >
              {" "}
              {/* <p>Challenges </p> */}
              <Link to={"/research"}>Research Papers</Link>
            </li>
          </ul>
        </div>

        <div >
          <ul>
            <div className="ml-2 flex flex-row gap-3 md:gap-8 items-center justify-center cursor-pointer">
            <li >
              <button className="items-center px-2 md:px-7 py-1 text-lg text-white font-bold border border-blue-500 bg-blue-500 rounded-md hover:bg-blue-600 group ">
                {isLoggedIn ? (
                  <Link onClick={handleLogout}>Logout</Link>
                ) : (
                  <Link to={"/auth/login"}>Login</Link>
                )}
              </button>
            </li>

            <li>
              {!isLoggedIn && (
                <button className="items-center px-2 md:px-7 py-1 text-blue-500 text-lg border border-blue-500 font-bold bg-white rounded-md hover:bg-gray-100 group">
                  {!isLoggedIn && <Link to={"/auth/signup"}>Register</Link>}
                </button>
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
