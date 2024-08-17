import { useState, useEffect } from "react";
import Layout from "../../Layouts/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { getHackDetails } from "../../Redux/Slices/HackathonSlice";
import { useDispatch } from "react-redux";

function HackInside() {
  const { hackId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hackathonsData, setHackathonsData] = useState({});

  useEffect(() => {
    async function fetchHackDetails() {
      try {
        const action = await dispatch(getHackDetails(hackId));
        if (getHackDetails.fulfilled.match(action)) {
          setHackathonsData(action.payload.data.data);
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
                  {hackathonsData?.hackathonName} Experience
                </h3>
                <p className="text-xl font-medium text-gray-800 mb-6">
                  <strong>Title:</strong> {hackathonsData?.title}
                </p>
                <p className="text-xl font-medium text-gray-800 mb-6">
                  <strong>Theme/Domain:</strong> {hackathonsData?.themeOrDomain}
                </p>
                <p className="text-xl font-medium text-gray-800 mb-6">
                  <strong>Category:</strong> {hackathonsData?.category}
                </p>
                <p className="text-xl font-medium text-gray-800 mb-6">
                  <strong>Tech Stack:</strong> {hackathonsData?.techStack}
                </p>
                <p className="text-xl font-medium text-gray-800 mb-6">
                  <strong>Team Members:</strong> {hackathonsData?.teamMembersNames}
                </p>
                <p className="text-xl font-medium text-gray-800 mb-6">
                  <strong>Mentor Name:</strong> {hackathonsData?.mentorName}
                </p>
              </div>
            </div>

            <p className="text-xl font-medium text-gray-800 mb-4">
              <strong>Experience:</strong> {hackathonsData?.overallExperience}
            </p>
            
            <p className="text-xl font-medium text-gray-800 mb-4">
              <strong>Challenges Faced:</strong> {hackathonsData?.challenges}
            </p>
            <p className="text-xl font-medium text-gray-800 mb-4">
              <strong>Key Tips for Juniors:</strong>{" "}
              {hackathonsData?.keyTipsForJuniors}
            </p>

            <div className="text-xl font-medium text-gray-800 mb-2">
              <strong>Project Demo Link:</strong>{" "}
              {hackathonsData?.projectDemoLink ? (
                <a
                  href={hackathonsData.projectDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-lg"
                >
                  {hackathonsData?.hackathonName}
                </a>
              ) : (
                <span>No demo link available.</span>
              )}
            </div>
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
  );
}

export default HackInside;
