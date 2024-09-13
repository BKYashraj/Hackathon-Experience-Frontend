import { useState } from "react";
import Layout from "../../Layouts/Layout";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost2 } from "../../Redux/Slices/ReseacrchSlice";

// import { Link } from 'react-router-dom';
// import { FaTools } from 'react-icons/fa';

function ResearchPost() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    PaperTitle: "",
    Domain: "",
    Abstract: "",
    AuthorsNames: "",
    mentorName: "",
    InstituteName: "",
    JournalName: "",
    overallExperience: "",
    keyTipsForJuniors: "",
    Conclusion: "",
    winningPhoto: "",
    PaperLink: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const [winningPhoto, setWinningPhoto] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
  
    // Create a new FormData object
    const form = new FormData();
    
    // Append each field from formData to FormData
    for (const [key, value] of Object.entries(formData)) {
      form.append(key, value);
    }
  
    // Append file to FormData if it exists
    if (winningPhoto) {
      form.append("winningPhoto", winningPhoto);
    }
  
    // Dispatch the action with the form data
    try {
      const apiResponse = await dispatch(addPost2(form)); // Ensure addPost2 is the correct action
      console.log('API Response:', apiResponse);
  
      // Check if payload exists and contains success status
      if (apiResponse.payload.success) {
        navigate("/auth/profile");
        
        // Confetti celebration
        confetti({
          particleCount: 400, // Adjust the number of confetti pieces
          angle: 90, // Direction of the confetti
          spread: 360, // Spread in a circle
          origin: { y: 0.6 }, // Starting point
          size: 2, // Size of the confetti pieces
          scalar: 1.5, // Scale the size
        });
      } else {
        console.error("Unexpected response structure:", apiResponse);
      }
    } catch (error) {
      console.error("Error adding research post:", error);
    }
  }
  
  

  return (
    <Layout>
      <div className="max-w-7xl bg-gray-100 rounded-lg shadow-lg mx-auto my-12 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Share Your Research Work
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Paper Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="PaperTitle"
                value={formData.PaperTitle}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Domain <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="Domain"
                value={formData.Domain}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Abstract <span className="text-red-600">*</span>
              </label>
              <textarea
                name="Abstract"
                value={formData.Abstract}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Overall Experience <span className="text-red-600">*</span>
              </label>
              <textarea
                name="overallExperience"
                value={formData.overallExperience}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Authors' Names <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="AuthorsNames"
                value={formData.AuthorsNames}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mentor Name <span className="text-red-600">*</span>
              </label>
              <select
                name="mentorName"
                value={formData.mentorName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Mentor</option>
                <option value="Priya Rakibe">Priya Rakibe</option>
                <option value="Gondhalekar">Gondhalekar</option>
                <option value="Smita Patil">Smita Patil</option>
              </select>
            </div> */}
             <div>
              <label className="block text-gray-700 font-semibold mb-2">
              mentor Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="mentorName"
                value={formData.mentorName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Institute Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="InstituteName"
                value={formData.InstituteName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Journal Name
              </label>
              <input
                type="text"
                name="JournalName"
                value={formData.JournalName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Conclusion <span className="text-red-600">*</span>
              </label>
              <textarea
                name="Conclusion"
                value={formData.Conclusion}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Key Tips for Juniors <span className="text-red-600">*</span>
              </label>
              <textarea
                name="keyTipsForJuniors"
                value={formData.keyTipsForJuniors}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Winning Photo
              </label>
              <input
                type="file"
                name="winningPhoto"
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Paper Link (Google Drive)
              </label>
              <input
                type="text"
                name="PaperLink"
                value={formData.PaperLink}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-200"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default ResearchPost;
