import { useState } from "react";
import Layout from "../../Layouts/Layout";

function ResearchPost() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Layout>
      <div className="max-w-4xl bg-gray-100 rounded-lg shadow-lg mx-auto my-12 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">Share Your Research Work</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Paper Title <span className="text-red-600">*</span>
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
                Domain Name <span className="text-red-600">*</span>
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