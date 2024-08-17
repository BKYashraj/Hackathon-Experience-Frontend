import { FaTools } from "react-icons/fa"
import { Link } from "react-router-dom"
import Layout from "../../Layouts/Layout"

function ViewResearchPage() {
  return (
    <Layout>
    
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <div className="text-center mb-8">
        <FaTools className="text-6xl text-yellow-500 mb-4" />
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Page Under Construction
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We are working hard to bring this page to you soon. Stay tuned!
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Go Back to Home
        </Link>
      </div>
      <div className="relative w-full max-w-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-30 rounded-lg"></div>
        <div className="relative z-10 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Whats Coming?</h2>
          <p className="text-gray-600">
            We are busy improving our website and working on new features to provide you with a better experience. Check back later to see the latest updates and improvements!
          </p>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default ViewResearchPage