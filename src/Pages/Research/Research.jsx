import Layout from "../../Layouts/Layout";
import IconPatchCheck from "../../Components/Icons/IconPatchCheck";
import Inovative from "../../assets/innovative.png";
import Services from "../../assets/research/service.png";
import PDF from "../../assets/PDF/PDF.png";
import Learning from "../../assets/collaborative.png";
import Networking from "../../assets/networking.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllResearch } from "../../Redux/Slices/ReseacrchSlice";
import { useDispatch, useSelector } from "react-redux";
function Research() {
  const dispatch = useDispatch();

    const [expandedExperience, setExpandedExperience] = useState({});
  
    const handleToggle = (id) => {
      setExpandedExperience((prev) => ({
        ...prev,
        [id]: !prev[id]
      }));
    };

  // const { ResearchData } = useSelector((state)=>state.Research)
  const ResearchData = useSelector((state) => state.Research.ResearchData);

  useEffect(() => {
    dispatch(getAllResearch());
  }, []);

  return (
    <Layout>
      <div>
        {/* Hero section */}
        <section
          className="flex flex-col-reverse items-center justify-center md:py-14 md:flex-row md:gap-6 bg-white-50
          "
        >
          <div className="w-5/6 text-center justify-center md:w-3/6 ">
            <div className="flex justify-center text-5xl md:justify-normal">
              <h1 className="pb-5 pt-4 font-bold bg-gradient-to-r from-black-500 to-black-400 bg-clip-text">
                A Powerful Unlock Your Research Potential{" "}
              </h1>
            </div>

            <p className="pb-5 text-lg text-[#202020]">
              Explore the Comprehensive Guide to Research Paper Excellence. Gain
              Exclusive Insights, Proven Strategies, and Expert Tips to Elevate
              Your Research Paper. Make Informed Decisions, Enhance Your Writing
              Skills, and Propel Your Academic Journey Forward. Start Uploading
              and Sharing Your Research Achievements Today!
            </p>
            <div className="flex gap-6 p-6 flex-row justify-center items-center">
              <Link to={"/researchPost"}>
                <button className="flex items-center text-xl px-4 py-2 text-white font-bold border border-blue-500 bg-blue-500 rounded-md hover:bg-blue-600">
                  Share Your Research
                </button>
              </Link>
              <Link to={"/researchPage"}>
                <button className="flex items-center px-10 py-2 text-blue-500 text-xl border border-blue-500 font-bold bg-white rounded-md hover:bg-gray-100">
                  View Research
                </button>
              </Link>
            </div>
          </div>

          {/* <div>
        <img
          src={HeroImage}
          alt="Hackathon"
          width={550}
          height={550}
          className=" opacity-100 md:opacity-100"
        />
      </div> */}
        </section>

        <section className="bg-gray-100">
  <div className="max-w-screen-xl px-4 mx-auto py-8">
    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
      Highlighting Top Research Achievements
    </h2>
    <p className="text-center text-lg text-gray-700 mb-8">
      Showcase your research success and inspire others by sharing your
      achievements. Join our community and let your experience shine as
      a top highlight. Your story could be the next to inspire!
    </p>

    {ResearchData.length > 0 ? (
          <div className="space-y-8">
            {ResearchData.slice(-3).reverse().map((hackathon) => {
              const experienceText = hackathon.overallExperience || '';
              const first20Words = experienceText.split(' ').slice(0, 32).join(' ');
              const isExpanded = expandedExperience[hackathon._id];
              const displayText = isExpanded ? experienceText : `${first20Words}...`;

              return (
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
                          width={40} // Set a consistent width
                          height={40} // Set a consistent height
                          className="object-cover" // Ensure the image maintains aspect ratio
                        />
                        <span className="text-red-500 hidden md:inline">Download</span>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500">No Research details available.</p>
        )}


    <div className="flex justify-center pt-6">
      <Link to="/researchPage">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full">
          View All Research Experiences
        </button>
      </Link>
    </div>
  </div>
</section>


        {/* Services section */}
        <section className="py-4 mt-6 ">
          <div className="container flex flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
              <img
                src={Services}
                width={500}
                className="rounded-lg"
                alt="Cooking"
              />
            </div>
            <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div>
                  <h2 className="mb-2 text-5xl font-extrabold title-font text-black p-3">
                    Gear Up for Your Next Research Paper
                  </h2>
                  <p className=" leading-relaxed text-lg text-black">
                    With Research Paper Insights, Get Ready to Share Your
                    Findings and Showcase Your Achievements!
                  </p>
                </div>
              </div>

              <div className="w-full p-1">
                <div className="flex items-center h-full p-2 text-2xl rounded">
                  <IconPatchCheck className="text-blue-500 w-10 h-10 mr-4" />
                  <span className="font-bold text-blue-500 title-font">
                    Share Your Innovation
                  </span>
                </div>
              </div>
              <div className="w-full p-1">
                <div className="flex items-center h-full p-2 text-2xl rounded">
                  <IconPatchCheck className="text-blue-500 w-10 h-10 mr-4" />
                  <span className="text-blue-500 font-bold title-font">
                    Document Your Journey
                  </span>
                </div>
              </div>
              <div className="w-full p-1">
                <div className="flex items-center h-full p-2 text-2xl rounded">
                  <IconPatchCheck className="text-blue-500 w-10 h-10 mr-4" />
                  <span className="text-blue-500 font-bold title-font">
                    Genuine and Detailed Insights
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-4 mx-auto">
            <div className="flex justify-center py-4">
              <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
            </div>

            <div className="flex flex-wrap space-y-6 md:space-y-0">
              <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                  <img src={Inovative} />
                </div>
                <div className="flex-grow">
                  <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                    Innovative Projects
                  </h2>
                  <p className="text-base leading-relaxed">
                    See how students showcased their creativity and cutting-edge
                    solutions in their hackathon experiences!
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                  <img src={Learning} />
                </div>
                <div className="flex-grow">
                  <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                    Collaborative Learning
                  </h2>
                  <p className="text-base leading-relaxed">
                    Discover how students connected with peers, tackled
                    challenges, and shared knowledge during the hackathon.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5">
                  <img src={Networking} />
                </div>
                <div className="flex-grow">
                  <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                    Networking Opportunities
                  </h2>
                  <p className="text-base leading-relaxed">
                    Learn how students expanded their networks and engaged with
                    experts through their hackathon experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Research;
