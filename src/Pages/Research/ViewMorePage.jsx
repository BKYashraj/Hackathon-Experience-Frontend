import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllResearch } from "../../Redux/Slices/ReseacrchSlice";
import Layout from "../../Layouts/Layout";
import { Link } from "react-router-dom";
import PDF from "../../assets/PDF/PDF.png";

function ViewPageHack() {
  const dispatch = useDispatch();
  const ResearchData = useSelector((state) => state.Research.ResearchData);

  useEffect(() => {
    dispatch(getAllResearch());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ResearchData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(ResearchData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Layout>
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 bg-gray-100 py-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6 relative">
            Highlighting Top Research Achievements
          </h2>
          <p className="text-center text-lg text-gray-700 mb-8">
            Showcase your research success and inspire others by sharing your
            achievements. Join our community and let your experience shine as
            a top highlight. Your story could be the next to inspire!
          </p>
          {ResearchData.length > 0 ? (
            <div className="space-y-8">
              {currentItems.map((hackathon) => (
                <div
                  key={hackathon._id}
                  className="flex flex-col md:flex-row items-center bg-white p-3 rounded-lg shadow-lg border border-gray-200 relative"
                >
                  <div className="absolute top-0 left-0 bg-blue-100 text-black text-sm font-bold px-4 py-2 rounded-br-lg">
                    Research Experience
                  </div>

                  {/* Main Hackathon Link (without PDF image) */}
                  <Link to={`/ReserachPaper/${hackathon._id}`} className="block md:flex bg-white">
                    <div className="flex flex-none items-center w-full md:w-1/3">
                      <img
                        className="w-dvw h-72 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={hackathon.winningPhoto || "default-image-url.jpg"}
                        alt={hackathon.hackathonName}
                      />
                    </div>
                    <div className="flex flex-col w-full md:w-2/3 md:pl-6 sm:pt-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:underline">
                        {hackathon.JournalName} Publication
                      </h3>
                      <p className="text-lg font-medium text-gray-800 mb-2">
                        <strong>Title:</strong> {hackathon.PaperTitle}
                      </p>
                      <p className="text-lg font-medium text-gray-800 mb-2">
                        <strong>Theme/Domain:</strong> {hackathon.Domain}
                      </p>
                      <p className="text-lg font-medium text-gray-800 mb-2">
                        <strong>Experience:</strong> {hackathon.Experience}
                      </p>
                      <p className="text-lg font-medium text-gray-800 mb-2">
                        <strong>Mentor Name:</strong> {hackathon.mentorName}
                      </p>
                      <p className="text-lg font-medium text-gray-800 mb-4">
                        <strong>Team Members:</strong> {hackathon.AuthorsNames}
                      </p>
                    </div>
                  </Link>

                  {/* Separate PDF Download Image */}
                  {hackathon.PaperLink && (
                    <div className="mt-4 md:ml-6 flex-shrink-0">
                      <a
                        href={hackathon.PaperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border border-gray-300 rounded-md hover:bg-gray-100 p-2"
                      >
                        <img
                          src={PDF}
                          alt="PDF"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                        <span className="text-red-500 hidden md:inline">Download</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No Research details available.</p>
          )}

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700 text-white"
              } font-bold py-2 px-4 rounded`}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700 text-white"
              } font-bold py-2 px-4 rounded`}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ViewPageHack;
