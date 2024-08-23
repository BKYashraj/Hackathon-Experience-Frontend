import { useState } from "react";
import Layout from "../../Layouts/Layout";
import { addPost } from "../../Redux/Slices/HackathonSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

function HackathonPost() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    hackathonName: "",
    title: "",
    themeOrDomain: "",
    category: "",
    mentorName: "",
    teamMembersNames: "",
    techStack: "",
    overallExperience: "",
    challenges: "",
    highlights: "",
    winningPhoto: "",
    keyTipsForJuniors: "",
    projectDemoLink: "",
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
    
    // Append each field to FormData
    for (const [key, value] of Object.entries(formData)) {
      form.append(key, value);
    }

    // Append file to FormData if it exists
    if (winningPhoto) {
      form.append("winningPhoto", winningPhoto);
    }

    // Dispatch the action with the form data
    try {
      const apiResponse = await dispatch(addPost(form));
      console.log(apiResponse);

      if (apiResponse.payload.data.success) {
        navigate("/auth/profile");
        confetti({
          particleCount: 400, // Adjust the number of confetti pieces
          angle: 90, // Direction of the confetti
          spread: 360, // Spread in a circle
          origin: { y: 0.6 }, // Starting point
          size: 2, // Size of the confetti pieces
          scalar: 1.5, // Scale the size
        });
      }
    } catch (error) {
      console.error("Error adding hackathon experience:", error);
    }
  }


  return (
    <Layout>
      <div className="max-w-7xl bg-gray-100 rounded-lg shadow-lg mx-auto my-12 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">Share Your Hackathon Journey</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Hackathon Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="hackathonName"
                value={formData.hackathonName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Project Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Theme/Domain <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="themeOrDomain"
                value={formData.themeOrDomain}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Category <span className="text-red-600">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Category</option>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
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
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Team Members Names <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="teamMembersNames"
                value={formData.teamMembersNames}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Tech Stack
              </label>
              <input
                type="text"
                name="techStack"
                value={formData.techStack}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
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
                Challenges Faced <span className="text-red-600">*</span>
              </label>
              <textarea
                name="challenges"
                value={formData.challenges}
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
                Project Demo Link
              </label>
              <input
                type="text"
                name="projectDemoLink"
                value={formData.projectDemoLink}
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

export default HackathonPost;
