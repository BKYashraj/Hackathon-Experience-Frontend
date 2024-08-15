import HeroImage from "../assets/heroimg.jpg";

function hackathon() {
  return (
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

      
    </div>
  )
}

export default hackathon