import { useEffect, useState } from "react";
import Layout from "../../../Layouts/Layout";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getHackDetails,
  updatePost,
} from "../../../Redux/Slices/HackathonSlice";

function EditHack() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    hackathonName: "",
    title: "",
    themeOrDomain: "",
    category: "",
    collegeName: "",
    mentorName: "",
    teamMembersNames: "",
    techStack: "",
    overallExperience: "",
    challenges: "",
    highlights: "",
    // winningPhoto: "",
    keyTipsForJuniors: "",
    projectDemoLink: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHackDetails = async () => {
      console.log("ID", id);
      const data = await dispatch(getHackDetails(id));

      if (data?.payload?.data?.success === false) {
        console.log(data.payload.data.message);
        return;
      }

      setFormData(data?.payload?.data?.data);
      setIsLoading(false); // Mark loading as false once data is set
    };

    fetchHackDetails();
  }, [dispatch, id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      form.append(key, value);
    }

    try {
      const apiResponse = await dispatch(updatePost({ data: form, id }));
      console.log(apiResponse);

      if (apiResponse.payload.data.success) {
        navigate("/auth/profile");
      }
    } catch (error) {
      console.error("Error updating hackathon experience:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Simple loading state
  }

  return (
    <Layout>
      <div className="max-w-7xl bg-gray-100 rounded-lg shadow-lg mx-auto my-12 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
          Update Hackathon Experience
          </h2>
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
                College Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mentor Name <span className="text-red-600">*</span>
              </label>
              <input
                name="mentorName"
                value={formData.mentorName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              >
                {/* <option value="">Select Mentor</option>
                <option value="Priya Rakibe">Priya Rakibe</option>
                <option value="Gondhalekar">Gondhalekar</option>
                <option value="Smita Patil">Smita Patil</option> */}
              </input>
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
            {/* <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Winning Photo
              </label>
              <input
                type="file"
                name="winningPhoto"
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div> */}
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
              Update Experience
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default EditHack;
