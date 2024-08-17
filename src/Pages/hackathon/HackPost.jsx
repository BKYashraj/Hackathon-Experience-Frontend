// // import { Link } from 'react-router-dom';

// function HackathonDetails({ hackathonsData }) {
//   return (
//     <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
//       <h2 className="text-xl font-bold text-gray-900 sm:text-2xl text-center">
//         Hackathon Details
//       </h2>
//       {hackathonsData.length > 0 ? (
//         <div className="mt-6 space-y-6">
//           {hackathonsData.map((hackathon) => (
//             <div
//               key={hackathon._id}
//               className="flex flex-col md:flex-row bg-gradient-to-r from-amber-50 to-orange-300 p-4 rounded-lg shadow-sm border"
//             >
//               <div className="flex-none w-full md:w-1/3">
//                 <img
//                   className="w-full h-40 object-cover rounded-md"
//                   src={hackathon.winningPhoto || 'default-image-url.jpg'}
//                   alt={hackathon.hackathonName}
//                 />
//               </div>
//               <div className="flex-1 w-full md:w-2/3 md:pl-6">
//                 <h3 className="text-lg font-bold text-gray-900">{hackathon.hackathonName}</h3>
//                 <p className="text-base font-medium text-gray-700 mt-1">
//                   <strong>Title:</strong> {hackathon.title}
//                 </p>
//                 <p className="text-base font-medium text-gray-700 mt-1">
//                   <strong>Theme/Domain:</strong> {hackathon.themeOrDomain}
//                 </p>
//                 <p className="text-base font-medium text-gray-700 mt-1">
//                   <strong>Category:</strong> {hackathon.category}
//                 </p>
//                 <p className="text-base font-medium text-gray-700 mt-1">
//                   <strong>Mentor Name:</strong> {hackathon.mentorName}
//                 </p>
//                 <p className="text-base font-medium text-gray-700 mt-1">
//                   <strong>Team Members:</strong> {hackathon.teamMembersNames}
//                 </p>
//                 <p className="text-base font-medium text-gray-700 mt-1">
//                   <strong>Tech Stack:</strong> {hackathon.techStack.join(', ')}
//                 </p>
//                 <p className="text-base font-medium text-gray-700 mt-1">
//                   <strong>Overall Experience:</strong> {hackathon.overallExperience}
//                 </p>
//                 <p className="text-base font-medium text-gray-700 mt-1">
//                   <strong>Challenges:</strong> {hackathon.challenges}
//                 </p>
//                 <p className="text-base font-medium text-gray-700 mt-1">
//                   <strong>Key Tips for Juniors:</strong> {hackathon.keyTipsForJuniors}
//                 </p>
//                 {hackathon.projectDemoLink && (
//                   <p className="mt-2">
//                     <a
//                       href={hackathon.projectDemoLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:underline"
//                     >
//                       View Project Demo
//                     </a>
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">No hackathon details available.</p>
//       )}
//     </div>
//   );
// }

// export default HackathonDetails;