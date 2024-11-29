import Layout from "../../Layouts/Layout";
import IconPatchCheck from "../../Components/Icons/IconPatchCheck";
import Inovative from "../../assets/innovative.png";
import Services from "../../assets/Hackathon/service.png";
import Learning from "../../assets/collaborative.png";
import Networking from "../../assets/networking.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../Redux/Slices/HackathonSlice";
import HackPost from "../../Components/Hackathon Post/HackPost";
function Hackathon() {
  const dispatch = useDispatch();

  // const { hackathonsData } = useSelector((state)=>state.hackathons)
  // const hackathonsData = useSelector(
  //   (state) => state.hackathons.hackathonsData
  // );

  useEffect(() => {
    dispatch(getAllPosts());
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
                A Powerful Resource to Master Hackathons{" "}
              </h1>
            </div>

            <p className="pb-5 text-lg text-[#202020]">
              Discover the Ultimate Guide to Hackathon Success. Gain Exclusive
              Insights, Proven Strategies, and Expert Tips to Dominate Your Next
              Hackathon. Share Your Experiences, Boost Your Skills, and Take
              Charge of Your Competitive Edge Today!
            </p>
            <div className="flex gap-6  p-6 flex-row justify-center items-center">
              <Link to="/hackathonPost">
                <button className="flex items-center text-xl px-4 py-2 text-white font-bold border border-blue-500 bg-blue-500 rounded-md hover:bg-blue-600">
                  Share Your Experience
                </button>
              </Link>

              <Link to="/hackPage">
                <button className="flex items-center px-10 py-2 text-blue-500 text-xl border border-blue-500 font-bold bg-white rounded-md hover:bg-gray-100">
                  View Experiences
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
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 bg-gray-100 py-8">
            
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
                    Gear Up for Your Next Hackathon
                  </h2>
                  <p className=" leading-relaxed text-lg text-black">
                    With Hackathon Insights, Get Ready to Conquer Challenges and
                    Showcase Your Skills!
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

export default Hackathon;
