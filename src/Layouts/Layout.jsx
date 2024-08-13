import Footer from '../Components/Footer';
// import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  // const navigate = useNavigate();  
  return (
        <div>

            <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">


            <div
          className="flex items-center justify-center cursor-pointer"
          
          // onClick={() => navigate("/")}
        >
          <p className="pl-2 text-2xl text-black">HACKATHON EXPERIENCE</p>
          {/* <img src={Pizzalogo} className="h-13 w-12 md:h-16 md:w-16" alt="Pizza logo" /> */}
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4">
            <li
              className="text-xl hover:font-extrabold text-black cursor-pointer"
              // onClick={scrollToMenu}
            >
              {" "}
              <p>Menu </p>
            </li>

            <li
              className="text-xl hover:font-extrabold text-black cursor-pointer"
              // onClick={scrollToServices}
            >
              {" "}
              <p>Services </p>
            </li>

            <li
              className="text-xl hover:font-extrabold text-black cursor-pointer"
              // onClick={scrollToAbout}
            >
              {" "}
              <p>About </p>
            </li>
            <li className='ml-2'>
            <button className="items-center px-7 py-2 text-white font-bold bg-blue-500 rounded-md hover:bg-blue-600 grou ">
              Login
            </button>
            </li>
            
            <li>
            <button className="items-center px-7 py-1 text-blue-500 text-xl border border-blue-500 font-bold bg-white rounded-md hover:bg-gray-100 group">
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