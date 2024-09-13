import { useState, useEffect } from "react";
import Layout from "../../Layouts/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getresearchDetails } from "../../Redux/Slices/ReseacrchSlice";
import PDF from "../../assets/PDF/PDF.png";
function InsideResearch() {
  
  const { hackId } = useParams();
  console.log("yash",hackId)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hackathonsData,  setResearchData] = useState({});

  useEffect(() => {
    async function fetchHackDetails() {
      try {
        const action = await dispatch(getresearchDetails(hackId));
        if (getresearchDetails.fulfilled.match(action)) {
          setResearchData(action.payload.data.data);
        }
      } catch (error) {
        console.error("Error fetching hackathon details:", error);
      }
    }

    fetchHackDetails();
  }, [dispatch, hackId]);
  
  return (
    <Layout>
      <section className="bg-gray-100 overflow-hidden text-gray-600 body-font">
        <div className="container items-center px-5 py-10 mx-auto flex flex-col">
          
          <div className="w-full lg:w-3/3 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row mb-8">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-8">
                <img
                  alt="hackathon"
                  className="object-cover w-full h-full rounded-lg shadow-md"
                  src={hackathonsData?.winningPhoto || "default-image-url.jpg"}
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-extrabold text-gray-900 mt-2 mb-7 border-b-2 border-gray-200 pb-2">
                  {hackathonsData?.JournalName} Publication
                </h3>
                <p className="text-xl font-medium text-gray-800 mb-6">
                  <strong>Title:</strong> {hackathonsData?.PaperTitle}
                </p>
                <p className="text-xl font-medium text-gray-800 mb-6">
                  <strong>Domain:</strong> {hackathonsData?.Domain}
                </p>
                
               
                <p className="text-xl font-medium text-gray-800 mb-6">
                  <strong>Author Name:</strong> {hackathonsData?.AuthorsNames}
                </p>
                <p className="text-xl font-medium text-gray-800 mb-6">
                  <strong>Mentor Name:</strong> {hackathonsData?.mentorName}
                </p>

{/* Separate PDF Download Image */}
{hackathonsData.PaperLink && (
                    <div className="mt-4 md:ml-6  flex ">
                      <a
                        href={hackathonsData.PaperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border border-gray-300 rounded-md hover:bg-gray-100 p-2"
                      >
                        <img
                          src={PDF}
                          alt="PDF"
                          width={40} // Set a consistent width
                          height={40} // Set a consistent height
                          className="object-cover" // Ensure the image maintains aspect ratio
                        />
                        <span className="text-red-500 hidden md:inline">Download</span>
                      </a>
                    </div>
                  )}


              </div>
            </div>

            <p className="text-xl font-medium text-gray-800 mb-4">
              <strong>Experience:</strong> {hackathonsData?.overallExperience}
            </p>
            
            
            <p className="text-xl font-medium text-gray-800 mb-4">
              <strong>Key Tips for Juniors:</strong>{" "}
              {hackathonsData?.keyTipsForJuniors}
            </p>
            <p className="text-xl font-medium text-gray-800 mb-6">
                  <strong>Abstract:</strong> {hackathonsData?.Abstract}
                </p>
            <p className="text-xl font-medium text-gray-800 mb-4">
              <strong>Conclusion:</strong>{" "}
              {hackathonsData?.Conclusion}
            </p>
           

          </div>
           
          <div className="p-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mb-6 hover:bg-blue-700"
          >
            Back
          </button>
          </div>
          
        </div>
        
      </section>
    </Layout>
  )
}

export default InsideResearch