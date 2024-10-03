import { useSelector } from "react-redux";
import profile from "../../assets/Auth/userProfile.png";
import Layout from "../../Layouts/Layout";
import SelfHackData from "./Hackathon CRUD/SelfHackData";
import SelfResearchData from "./Research CRUD/SelfResearchData";

const UserProfile = () => {
  // Demo user data
  const user = useSelector((state) => state.auth);

  

  // const handleEditPost = (id) => {
  //   // Handle edit post action here
  //   console.log(`Editing post with id ${id}`);
  // };

  return (
    <Layout>
      <div className="container mx-auto p-4 sm:p-6 md:p-8 bg-white min-h-screen">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">My&nbsp;</h1>
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400">Profile</h1>
        </div>

        {/* Profile Section */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <img
              src={user.photoURL || profile}
              alt="User Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-gray-200 object-cover shadow-lg"
            />
            <div className="flex-1 pt-2 text-center sm:text-left">
              <h1 className="text-3xl sm:text-2xl font-extrabold text-gray-800">Name : {user.name || user.data.firstName}</h1>
              <p className="text-gray-600 mt-2">
                <span className="text-2xl font-bold text-black">Email: </span><span className="text-xl text-black font-medium">{user.email || user.data.email}</span> 
              </p>
              <p className="text-gray-600 mt-1">
                <span className="text-2xl font-bold text-black">Role:</span> <span className="text-xl text-black font-medium">{user.role}</span>
              </p>
            </div>
          </div>
        </div>

        <SelfHackData/>
        <SelfResearchData/>

        
      </div>
    </Layout>
  );
};

export default UserProfile;
