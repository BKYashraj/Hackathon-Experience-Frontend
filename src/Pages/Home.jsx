// import HeroImage from "../assets/heroimg.jpg";
import Heroimage from "../assets/heroImg.png";
import HackathonImage from "../assets/hackathon2.png";
import { Link } from "react-router-dom";
import Layout from "../Layouts/Layout";
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import Inovative from "../assets/innovative.png";
import Services from "../assets/serviceHome.png";
import Learning from "../assets/collaborative.png";
import Networking from "../assets/networking.png";
import paper from "../assets/paper2.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getAllPosts,
  // getSelfHackDetails,
} from "../Redux/Slices/HackathonSlice";
import HackPost from "../Components/Hackathon Post/HackPost";
import TeamSection from "../Components/TeamSection";
function Home() {
  const dispatch = useDispatch();

  // const { hackathonsData } = useSelector((state)=>state.hackathons)
  // const hackathonsData = useSelector(
  //   (state) => state.hackathons.hackathonsData
  // );

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await dispatch(getAllPosts());
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();

    // Set up an interval to periodically fetch posts
    const intervalId = setInterval(fetchPosts, 5 * 60 * 1000); // every 5 minutes

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <div>
          {/* Hero section */}
          <section
            className="flex flex-col-reverse items-center justify-center md:pt-16 pt-6 md:pb-28 md:flex-row md:gap-6 bg-gradient-to-r from-white-100 
            "
          >
            <div className="w-5/6 ml-4 text-center md:w-2/6 md:text-left">
              <div className="flex justify-center text-4xl md:justify-normal">
                <h1 className="pb-5 pt-4 font-bold bg-gradient-to-r from-black-500 to-black-400 bg-clip-text">
                A Powerful Resource to Master Hackathon and Research Experience{" "}
                </h1>
              </div>

              <p className="pb-5 text-lg text-[#202020]">
                Unlock your creativity and academic skills with support for both
                hackathons and research. Learn from top performers and share
                your hackathon journey, while showcasing your research and
                contributing to a growing knowledge base. Join a vibrant
                community of innovators, inspire others, and elevate your
                skills. Start sharing today and be part of something greater!
              </p>
              <div className="pl-8 justify-center">
                <Link to="/Hackathon">
                  <button className="px-9 py-2 mr-4 text-xl my-4  text-white font-bold bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600">
                    Explore Hackathons
                  </button>
                </Link>
                <Link to="/research">
                  <button className="px-4 py-2 text-xl text-blue-500 font-bold bg-white border border-blue-500 rounded-md hover:bg-gray-100">
                    Explore Research Papers
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <img
                src={Heroimage}
                alt="Hackathon"
                width={550}
                height={550}
                className=" opacity-100 md:opacity-100"
              />
            </div>
          </section>
        </div>
        {/* <section className="flex flex-col items-center justify-center md:flex-row md:gap-100 md:pt-32 pt-6 md:pb-48 md:w-full">
      <div className="w-5/6 text-center md:w-4/6 md:px-16 md:text-left ">
        <h1 className="text-4xl font-bold text-black">
          Empowering Innovation & Knowledge Sharing
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Share your Hackathon Experiences and Publish Research Papers with
          the Academic Community at K. K. Wagh Institute Of Engineering
          Education And Research [KKWIEER].
        </p>
        <div className="mt-8 flex justify-center md:justify-start ">
          <Link to="/Hackathon">
            <button className="px-4 py-2 mr-4 text-xl text-white font-bold bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600">
              Explore Hackathons
            </button>
          </Link>
          <Link to="/research">
            <button className="px-4 py-2 text-xl text-blue-500 font-bold bg-white border border-blue-500 rounded-md hover:bg-gray-100">
            Explore Research Papers
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <img src={Heroimage} alt="Innovation" className="w-full md:w-4/5" />
      </div>
    </section> */}

        {/* {hackathonsData.map((product) => <div key={product._id}>{product.hackathonName}</div>)} */}
        <section className="bg-gray-100">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 bg-gray-100 py-8">
            {/* <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6 relative">
              Highlighting Top Hackathon Achievements
            </h2>
            <p className="text-center text-lg text-gray-700 mb-8">
              Showcase your hackathon success and inspire others by sharing your
              achievements. Join our community and let your experience shine as
              a top highlight. Your story could be the next to inspire!
            </p>
            {hackathonsData.length > 0 ? (
              <div className="space-y-8">
                {hackathonsData
                  .slice(-3)
                  .reverse()
                  .map((hackathon) => (
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
                          </p> */}
                          {/* <p className="text-lg font-medium text-gray-800 mb-2">
                  <strong>Theme/Domain:</strong> {hackathon.themeOrDomain}
                </p>
                <p className="text-lg font-medium text-gray-800 mb-2">
                  <strong>Category:</strong> {hackathon.category}
                </p> */}
                          {/* <p className="text-lg font-medium text-gray-800 mb-2">
                            <strong>Experience:</strong>{" "}
                            {hackathon.overallExperience}
                          </p>
                          <p className="text-lg font-medium text-gray-800 mb-2">
                            <strong>Mentor Name:</strong> {hackathon.mentorName}
                          </p>
                          <p className="text-lg font-medium text-gray-800 mb-4">
                            <strong>Team Members:</strong>{" "}
                            {hackathon.teamMembersNames}
                          </p>
                          {hackathon.projectDemoLink && (
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
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No hackathon details available.
              </p>
            )} */}

            <HackPost/>

            <div className="flex justify-center content-center pt-6">
              <Link to="/hackPage">
              <button className="bg-blue-500 justify-center hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full">
                View All Hackathon Experiences
              </button>
              </Link>
            </div>


          </div>
        </section>

        <TeamSection />

        {/* Services Section */}
        <section className="pb-12 pt-16">
          <div className="container mx-auto flex flex-col md:flex-row gap-8">
            {/* Hackathon Experience Section */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg">
              <img
                src={HackathonImage}
                alt="Hackathon"
                className="w-2/4 rounded-lg mb-6"
              />
              <h2 className="text-3xl font-extrabold text-black mb-4">
                Hackathon Experiences
              </h2>
              <p className="text-lg text-gray-700 mb-6 text-center">
                Discover the ultimate guide to hackathon success. Gain exclusive
                insights, strategies, and tips to dominate your next hackathon.
              </p>
              <Link to="/hackathonPost">
                <button className="flex items-center text-xl px-4 py-2 text-white font-bold border border-blue-500 bg-blue-500 rounded-md hover:bg-blue-600 mb-4">
                  Share Your Experience
                </button>
              </Link>

              <Link to="/hackPage">
                <button className="flex items-center text-xl px-4 py-2 text-blue-500 border border-blue-500 font-bold bg-white rounded-md hover:bg-gray-100">
                  View Experiences
                </button>
              </Link>
            </div>

            {/* Research Paper Section */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow-lg">
              <img
                src={paper}
                alt="Research Paper"
                className="w-2/4 rounded-lg mb-6"
              />
              <h2 className="text-3xl font-extrabold text-black mb-4">
                Research Papers
              </h2>
              <p className="text-lg text-gray-700 mb-6 text-center">
                Publish your research papers and share your knowledge with the
                academic community. Contribute to innovation and academic
                excellence.
              </p>
              <Link to={"/researchPost"}>
                <button className="flex items-center text-xl px-4 py-2 text-white font-bold border border-blue-500 bg-blue-500 rounded-md hover:bg-blue-600 mb-4">
                  Share Your Research
                </button>
              </Link>
              <Link to={"/researchPage"}>
                <button className="flex items-center text-xl px-4 py-2 text-blue-500 border border-blue-500 font-bold bg-white rounded-md hover:bg-gray-100">
                  View Research
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
                    Gear Up for Your Next Challenge
                  </h2>
                  <p className=" leading-relaxed text-lg text-black">
                    With Hackathon Insights and Research Excellence, Prepare to
                    Conquer Challenges and Showcase Your Skills!
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

export default Home;
