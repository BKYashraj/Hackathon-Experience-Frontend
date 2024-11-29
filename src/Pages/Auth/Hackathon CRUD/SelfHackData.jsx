import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletehack, getSelfHackDetails } from "../../../Redux/Slices/HackathonSlice";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
function SelfHackData() {
  const dispatch = useDispatch();
  
  const hackathonsData = useSelector((state) => state.hackathons.SelfHackathonData);
  
  const [localHackathonsData, setLocalHackathonsData] = useState([]);

  // Fetch self hackathon details on mount
  useEffect(() => {
    dispatch(getSelfHackDetails());
  }, [dispatch]);

  // Update local state when hackathonsData changes, also apply sorting
  useEffect(() => {
    if (hackathonsData?.length > 0) {
      setLocalHackathonsData(
        [...hackathonsData].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
  }, [hackathonsData]);

  // Handle delete operation
  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this post?")) {
  //     try {
  //       const result = await dispatch(deletehack(id));
  //       if (result.meta.requestStatus === 'fulfilled') {
  //         setLocalHackathonsData((prevData) =>
  //           prevData.filter((hackathon) => hackathon._id !== id)
  //         );
  //         console.log("Deleted successfully");
  //       } else {
  //         console.error("Failed to delete the post.");
  //       }
  //     } catch (error) {
  //       console.error("An error occurred while deleting the post:", error);
  //     }
  //   }
  // };

  const handleDelete = async (id) => {
    // Show a confirmation dialog using SweetAlert2
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
      try {
        // Dispatch the delete action
        const result = await dispatch(deletehack(id));
  
        if (result.meta.requestStatus === 'fulfilled') {
          // Remove the item from the local state
          setLocalHackathonsData((prevData) =>
            prevData.filter((hackathon) => hackathon._id !== id)
          );
  
          // Show success popup
          Swal.fire({
            title: 'Deleted!',
            text: 'Your hackathon post has been deleted.',
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
      } catch (error) {
        // Show error popup in case of an exception
        Swal.fire({
          title: 'Error!',
          text: 'An unexpected error occurred. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        console.error("An error occurred while deleting the post:", error);
      }
    }
  };

  return (
    <section className="bg-gray-100">
      <div className="max-w-14xl px-4 bg-gray-100 py-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6 relative">
          Your Hackathon Experience Posts
        </h2>
        {localHackathonsData?.length > 0 ? (
          <div className="space-y-8">
            {localHackathonsData.map((hackathon) => (
              <div
                key={hackathon._id}
                className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-lg border border-gray-200 relative"
              >
                <div className="absolute top-0 left-0 bg-blue-100 text-black text-sm font-bold px-4 py-2 rounded-br-lg">
                  Hackathon Experience
                </div>
                <Link
                  to={`/hackPage/${hackathon._id}`}
                  className="block md:flex bg-white"
                >
                  <div className="flex flex-none items-center w-full md:w-1/3">
                    <img
                      className="w-full h-64 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                      src={hackathon.winningPhoto || "default-image-url.jpg"}
                      alt={hackathon.hackathonName}
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-2/3 md:pl-6 sm:pt-4">
                    <h3 className="text-xl -2 font-bold text-gray-900 mb-4 hover:underline hover:decoration-2">
                      {hackathon.hackathonName} Experience
                    </h3>
                    <p className="text-lg font-medium text-gray-800 mb-2">
                      <strong>Title:</strong> {hackathon.title}
                    </p>
                    <p className="text-lg font-medium text-gray-800 mb-2">
                      <strong>Experience:</strong> {hackathon.overallExperience}
                    </p>
                    <p className="text-lg font-medium text-gray-800 mb-2">
                      <strong>College Name:</strong> {hackathon.collegeName}
                    </p>
                    <p className="text-lg font-medium text-gray-800 mb-2">
                      <strong>Mentor Name:</strong> {hackathon.mentorName}
                    </p>
                    <p className="text-lg font-medium text-gray-800 mb-4">
                      <strong>Team Members:</strong> {hackathon.teamMembersNames}
                    </p>
                    {/* {hackathon.projectDemoLink && (
                      <p>
                        <a
                          href={hackathon.projectDemoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-lg"
                        >
                          View Project Demo
                        </a>
                      </p>
                    )} */}
                  </div>
                </Link>
                <div className="mt-4 flex flex-col space-x-4 space-y-4 items-center ">
                  <Link
                    to={`/hackathon/edit/${hackathon._id}`}
                    className="inline-flex items-center py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 ml-4 px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(hackathon._id)}
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
            You cannot create a hackathon experience post yet. Please add your experience to get started!
          </p>
        )}
      </div>
    </section>
  );
}

export default SelfHackData;
