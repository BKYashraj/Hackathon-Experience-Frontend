import HeroImage from "../assets/heroimg.jpg";
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import Inovative from "../assets/innovative.png";
import Services from "../assets/services.png";
import Learning from "../assets/collaborative.png";
import Networking from "../assets/networking.png";
import Layout from "../Layouts/Layout";
function Home() {
  return (
    <Layout>
         <div>
      {/* Hero section */}
      <section
        className="flex flex-col-reverse items-center justify-center md:py-14 md:flex-row md:gap-6 bg-gradient-to-r from-gray-100 
            "
      >
        <div className="w-5/6 ml-4 text-center md:w-2/6 md:text-left">
          <div className="flex justify-center text-4xl md:justify-normal">
            <h1 className="pb-5 pt-4 font-bold bg-gradient-to-r from-black-500 to-black-400 bg-clip-text">
              A Powerful Resource to Master Hackathons{" "}
            </h1>
          </div>

          <p className="pb-5 text-[#202020]">
            Discover the Ultimate Guide to Hackathon Success at K. K. Wagh
            Institute Of Engineering Education And Research [KKWIEER]. Gain
            Exclusive Insights, Strategies, and Tips to Dominate Your Next
            Hackathon. Make Informed Decisions, Boost Your Skills, and Take
            Charge of Your Competitive Edge Today!
          </p>
          <div className="pl-10">
            <button className="flex items-center text-xl px-4 py-2 text-white font-bold border border-blue-500 bg-blue-500 rounded-md hover:bg-blue-600 grou ">
              Share Your Experience
            </button>
            
            <button className="flex items-center mt-4 px-10 py-2 text-blue-500 text-xl border border-blue-500 font-bold bg-white rounded-md hover:bg-gray-100 group">
              View Experiences
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="Hackathon"
            width={550}
            height={550}
            className=" opacity-100 md:opacity-100"
          />
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
                See how students showcased their creativity and cutting-edge solutions in their hackathon experiences!
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
                Discover how students connected with peers, tackled challenges, and shared knowledge during the hackathon.
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
                Learn how students expanded their networks and engaged with experts through their hackathon experiences.
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
