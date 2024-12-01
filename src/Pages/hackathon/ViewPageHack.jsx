import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layouts/Layout";
import { Link } from "react-router-dom";
import { searchDetails } from "../../Redux/Slices/SearchSlice";
import { getAllPosts } from "../../Redux/Slices/HackathonSlice";

function ViewPageHack() {
  const dispatch = useDispatch();

  const hackathonsData = useSelector(
    (state) => state.hackathons.hackathonsData
  );

  const searchResults = useSelector((state) => state.search.searchData);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const [expandedExperience, setExpandedExperience] = useState({});

  const handleToggle = (id) => {
    setExpandedExperience((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Search Functionality

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    dispatch(searchDetails(e.target.value));
  };

  return (
    <Layout>
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 bg-gray-100 py-8">
          {/* Search and Filters UI */}
          <div className="mb-6">
            <div className="flex flex-col gap-4">
              {/* Common Search */}
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Search by Hackathon Name or Title"
                  onChange={handleSearchChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              {/* Dropdown Filters */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex w-full gap-4">
                  <select
                    name="college"
                    onChange={handleSearchChange}
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
                  >
                    <option value="">College</option>
                    <option value="">All</option>
                    <option value="K. K. Wagh Institute of Engineering Education & Research">
                      KKWIEER
                    </option>
                    <option value="NDMVPS's Karmaveer Adv. Baburao Ganpatrao Thakare College of Engineering Nashik">NDMVPS</option>
                    <option value="Vishwakarma Institute of Technology (VIT)">VIT Pune</option>
                    <option value="Indian institute of information technology ,Lucknow">IIIT Lucknow</option>
                  </select>
                  <select
                    name="mentor"
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
                    onChange={handleSearchChange}
                  >
                    <option value="">Mentor</option>
                    <option value="Prof. Chaitali Patil">Prof. Chaitali Patil</option>
                    <option value="Prof. Priya Rakibe">Prof. Priya Rakibe</option>
                    {/* <option value="">Prof. Kushal Birla</option>
                    <option value="">Prof Seema Gondhalekar</option>
                    <option value="">Prof Shweta Jadhav</option> */}
                  </select>
                </div>
                {/* Row 2 of dropdowns */}
                <div className="flex w-full gap-4">
                  <select
                    name="category"
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
                    onChange={handleSearchChange}
                  >
                    <option value="">Category</option>
                    <option value="">All</option>
                    <option value="Software">Software</option>
                    <option value="Hardware">Hardware</option>
                  </select>
                  <select
                    name="theme"
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
                    onChange={handleSearchChange}
                  >
                    <option value="">Theme</option>
                    <option value="">All</option>
                    <option value="GenerativeAI">GenerativeAI</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Decentralized finance">Decentralized finance</option>
                    <option value="Health Care Tech">Health Care Technology</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Display Hackathon Posts */}
          {searchResults.length > 0 ? (
            <div className="space-y-8">
              {searchResults
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
                            className="w-dvw h-64 object-contain rounded-t-lg md:rounded-none md:rounded-l-lg"
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
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          ) : hackathonsData.length > 0 ? (
            <div className="space-y-8">
              {hackathonsData.map((hackathon) => {
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
                          className="w-dvw h-64 object-contain rounded-t-lg md:rounded-none md:rounded-l-lg"
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
                        </p>
                        <p className="text-lg font-medium text-gray-800 mb-2">
                          <strong>College Name:</strong> {hackathon.collegeName}
                        </p>
                        <p className="text-lg font-medium text-gray-800 mb-2">
                          <strong>Mentor Name:</strong> {hackathon.mentorName}
                        </p>
                        <p className="text-lg font-medium text-gray-800 mb-4">
                          <strong>Team Members:</strong>{" "}
                          {hackathon.teamMembersNames}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No hackathons found.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default ViewPageHack;
