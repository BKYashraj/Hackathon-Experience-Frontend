// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getSelfResearchDetails } from "../../../Redux/Slices/ResearchSlice";

// function SelfResearchData() {
//   const dispatch = useDispatch();

//   const ResearchData = useSelector((state) => state.Research.SelfResearchData);
//   const [localResearchData, setLocalResearchData] = useState([]);

//   // Fetch self research details on mount
//   useEffect(() => {
//     dispatch(getSelfResearchDetails());
//   }, [dispatch]);

//   // Update local state when ResearchData changes
//   useEffect(() => {
//     if (ResearchData?.length > 0) {
//       setLocalResearchData(ResearchData); // Assuming no sorting needed for research data
//     }
//   }, [ResearchData]);

//   return (
//     <section className="bg-gray-100">
//       <div className="max-w-14xl px-4 bg-gray-100 py-8">
//         <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6 relative">
//           Your Research Experience Posts
//         </h2>
//         {localResearchData?.length > 0 ? (
//           <div className="space-y-8">
//             {localResearchData.map((research) => (
//               <div
//                 key={research._id}
//                 className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-lg border border-gray-200 relative"
//               >
//                 <div className="absolute top-0 left-0 bg-blue-100 text-black text-sm font-bold px-4 py-2 rounded-br-lg">
//                   Research Experience
//                 </div>
//                 <Link
//                   to={`/researchPage/${research._id}`}
//                   className="block md:flex bg-white"
//                 >
//                   <div className="flex flex-none items-center w-full md:w-1/3">
//                     <img
//                       className="w-full h-64 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
//                       src={research.winningPhoto || "default-image-url.jpg"}
//                       alt={research.researchName}
//                     />
//                   </div>
//                   <div className="flex flex-col w-full md:w-2/3 md:pl-6 sm:pt-4">
//                     <h3 className="text-xl font-bold text-gray-900 mb-4 hover:underline hover:decoration-2">
//                       {research.researchName} Experience
//                     </h3>
//                     <p className="text-lg font-medium text-gray-800 mb-2">
//                       <strong>Title:</strong> {research.title}
//                     </p>
//                     <p className="text-lg font-medium text-gray-800 mb-2">
//                       <strong>Experience:</strong> {research.overallExperience}
//                     </p>
//                     <p className="text-lg font-medium text-gray-800 mb-2">
//                       <strong>Mentor Name:</strong> {research.mentorName}
//                     </p>
//                     <p className="text-lg font-medium text-gray-800 mb-4">
//                       <strong>Team Members:</strong> {research.teamMembersNames}
//                     </p>
//                     {research.projectDemoLink && (
//                       <p>
//                         <a
//                           href={research.projectDemoLink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-600 hover:underline text-lg"
//                         >
//                           View Project Demo
//                         </a>
//                       </p>
//                     )}
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">
//             You cannot create a research experience post yet. Please add your experience to get started!
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default SelfResearchData;

function SelfResearchData() {
  return (
    <div>SelfResearchData</div>
  )
}

export default SelfResearchData
