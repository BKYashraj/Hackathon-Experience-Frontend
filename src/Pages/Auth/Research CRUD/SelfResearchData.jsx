import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSelfResearchDetails, deletePaper } from "../../../Redux/Slices/ReseacrchSlice";
import Swal from 'sweetalert2';

function SelfResearchData() {
  const dispatch = useDispatch();

  const ResearchData = useSelector((state) => state.Research.SelfResearchData);
  const [localResearchData, setLocalResearchData] = useState([]);

  // Fetch self research details on mount
  useEffect(() => {
    dispatch(getSelfResearchDetails());
  }, [dispatch]);

  // Update local state when ResearchData changes
  useEffect(() => {
    if (ResearchData?.length > 0) {
      setLocalResearchData(
        [...ResearchData].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
  }, [ResearchData]);


  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to undo this action!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    });
  
    if (confirmation.isConfirmed) {
      const result = await dispatch(deletePaper(id));
      console.log("Delete action result:", result);
  
      if (result.meta.requestStatus === 'fulfilled') {
        // Remove the item from the local state
        setLocalResearchData((prevData) =>
          prevData.filter((research) => research._id !== id)
        );
  
        // Show success popup
        Swal.fire({
          title: 'Deleted!',
          text: 'Your research post has been deleted.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      } else {
        // Show error popup in case of failure
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete the post. Please try again.',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      }
    }
  };
  


  // const handleDelete = async (id) => {
  //   console.log("Attempting to delete paper with id:", id);
  //   const result = await dispatch(deletePaper(id));
    
  //   console.log("Delete action result:", result);
    
  //   if (result.meta.requestStatus === 'fulfilled') {
  //     setLocalResearchData((prevData) =>
  //       prevData.filter((research) => research._id !== id)
  //     );
  //     console.log("Deleted successfully, updated local state.");
  //   } else {
  //     console.log("Failed to delete the paper.");
  //   }
  // };

  return (
    <section className="bg-gray-100">
      <div className="max-w-14xl px-4 bg-gray-100 py-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6 relative">
          Your Research Experience Posts
        </h2>
        {localResearchData?.length > 0 ? (
          <div className="space-y-8">
            {localResearchData.map((research) => (
              <div
                key={research._id}
                className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-lg border border-gray-200 relative"
              >
                <div className="absolute top-0 left-0 bg-blue-100 text-black text-sm font-bold px-4 py-2 rounded-br-lg">
                  Research Experience
                </div>
                <Link
                  to={`/ReserachPaper/${research._id}`}
                  className="block md:flex bg-white"
                >
                   <div className="flex flex-none items-center w-full md:w-1/3">
                      <img
                        className="w-dvw h-72 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={research.winningPhoto || "default-image-url.jpg"}
                        alt={research.hackathonName}
                      />
                    </div>
                    <div className="flex flex-col w-full md:w-2/3  md:pl-6 sm:pt-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:underline">
                        {research.JournalName} Publication
                      </h3>
                      <p className="text-lg font-medium text-gray-800 mb-2">
                        <strong>Title:</strong> {research.PaperTitle}
                      </p>
                      <p className="text-lg font-medium text-gray-800 mb-2">
                        <strong>Experience:</strong> {research.overallExperience}
                      </p>
                      
                      <p className="text-lg font-medium text-gray-800 mb-2">
                        <strong>Mentor Name:</strong> {research.mentorName}
                      </p>
                      <p className="text-lg font-medium text-gray-800 mb-4">
                        <strong>Team Members:</strong> {research.AuthorsNames}
                      </p>
                    </div>
                </Link>

                <div className="mt-4 flex flex-col space-x-4 space-y-4 items-center ">
                  <Link
                    // to={`/hackathon/edit/${hackathon._id}`}
                    className="inline-flex items-center py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 ml-4 px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(research._id)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
                  >
                    Delete
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            You cannot create a research experience post yet. Please add your experience to get started!
          </p>
        )}
      </div>
    </section>
  );
}

export default SelfResearchData;

