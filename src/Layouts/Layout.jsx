import Footer from '../Components/Footer';
import { Link,useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const navigate = useNavigate();  
  return (
        <div>

            <nav className="flex items-center justify-around h-16 bg-gradient-to-r from-gray-100 to-gray-200 text-[#6B7280] font-mono border-none shadow-md">

            <div
          className="flex items-center justify-center cursor-pointer"
          
          onClick={() => navigate("/")}
        >
          <p className="pl-2 text-2xl text-black">HACKATHON EXPERIENCE</p>
          {/* <img src={Pizzalogo} className="h-13 w-12 md:h-16 md:w-16" alt="Pizza logo" /> */}
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4 md:gap-6 mt-4 mb-4 items-center">
            <li
              className="text-xl hover:font-extrabold text-black cursor-pointer"
              // onClick={scrollToMenu}
            >
              {" "}
              <p>Home </p>
            </li>

            <li
              className="text-xl hover:font-extrabold text-black cursor-pointer"
              // onClick={scrollToServices}
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
              <Link to={"/challenges"}>Research Papers</Link>
            </li>
            <li className='ml-2'>
            <button className="items-center px-7 py-1 text-lg text-white font-bold border border-blue-500 bg-blue-500 rounded-md hover:bg-blue-600 group ">
              Login
            </button>
            </li>
            
            <li>
            <button className="items-center px-7 py-1 text-blue-500 text-lg border border-blue-500 font-bold bg-white rounded-md hover:bg-gray-100 group">
              Logout
            </button>
            </li>
            
          </ul>
        </div>

            </nav>

                {children}

            <Footer />
        </div>  
    )
}

export default Layout;