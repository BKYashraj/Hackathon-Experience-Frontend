import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../Redux/Slices/HackathonSlice";
import Layout from "../../Layouts/Layout";
import { Link } from "react-router-dom";

function ViewPageHack() {
  const dispatch = useDispatch();

  // const { hackathonsData } = useSelector((state)=>state.hackathons)
  const hackathonsData = useSelector(
    (state) => state.hackathons.hackathonsData
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  // Calculate the indices for slicing the array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currsentItem = hackathonsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(hackathonsData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [expandedExperience, setExpandedExperience] = useState({});

  const handleToggle = (id) => {
    setExpandedExperience((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <Layout>
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 bg-gray-100 py-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6 relative">
            Highlighting Top Hackathon Achievements
          </h2>
          <p className="text-center text-lg text-gray-700 mb-8">
            Showcase your hackathon success and inspire others by sharing your
            achievements. Join our community and let your experience shine as a
            top highlight. Your story could be the next to inspire!
          </p>
          {currsentItem.length > 0 ? (
            <div className="space-y-8">
              {currsentItem
                .slice(-3)
                .reverse()
                .map((hackathon) => {
                  const experienceText = hackathon.overallExperience || "";
                  const first20Words = experienceText
                    .split(" ")
                    .slice(0, 32)
                    .join(" ");
                  const isExpanded = expandedExperience[hackathon._id];
                  const displayText = isExpanded
                    ? experienceText
                    : `${first20Words}...`;

                  return (
                    <div
                      key={hackathon._id}
                      className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg border border-gray-200 relative"
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
                            className="w-dvw h-64 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                            src={
                              hackathon.winningPhoto || "default-image-url.jpg"
                            }
                            alt={hackathon.hackathonName}
                          />
                        </div>
                        <div className="flex flex-col w-full md:w-2/3 md:pl-6 sm:pt-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-4 hover:underline hover:decoration-2">
                            {hackathon.hackathonName} Experience
                          </h3>

                          <p className="text-lg font-medium text-gray-800 mb-2">
                            <strong>Title:</strong> {hackathon.title}
                          </p>
                          {/* <p className="text-lg font-medium text-gray-800 mb-2">
                  <strong>Theme/Domain:</strong> {hackathon.themeOrDomain}
                </p>
                <p className="text-lg font-medium text-gray-800 mb-2">
                  <strong>Category:</strong> {hackathon.category}
                </p> */}
                          <p className="text-lg font-medium text-gray-800 mb-2">
                            <strong>Experience:</strong> {displayText}
                            {!isExpanded && (
                              <button
                                onClick={() => handleToggle(hackathon._id)}
                                className="text-blue-500 ml-2"
                              >
                                Read More
                              </button>
                            )}
                            {isExpanded && (
                              <button
                                onClick={() => handleToggle(hackathon._id)}
                                className="text-blue-500 ml-2"
                              >
                                Show Less
                              </button>
                            )}
                            {/* <strong>Experience:</strong>{" "}
                          {hackathon.overallExperience} */}
                          </p>
                          <p className="text-lg font-medium text-gray-800 mb-2">
                            <strong>College Name:</strong>{" "}
                            {hackathon.collegeName}
                          </p>
                          <p className="text-lg font-medium text-gray-800 mb-2">
                            <strong>Mentor Name:</strong> {hackathon.mentorName}
                          </p>
                          <p className="text-lg font-medium text-gray-800 mb-4">
                            <strong>Team Members:</strong>{" "}
                            {hackathon.teamMembersNames}
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
                    </div>
                  );
                })}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No hackathon details available.
            </p>
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
