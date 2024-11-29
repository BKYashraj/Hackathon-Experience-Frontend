const TeamSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-300 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center bg-white rounded-lg shadow-xl p-8 transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Project Developer</h2>
        
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="profile.jpg" // Replace with your profile image URL
            alt="Developer"
            className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-lg"
          />
        </div>

        {/* Title and Description */}
        <h3 className="text-2xl font-semibold text-gray-800">Yashraj Pravin Desale</h3>
        <p className="text-gray-600 text-lg font-medium mt-4 px-6">
          Skilled in Full Stack development (MERN Stack) and continuously improving problem-solving skills in DSA. Believes in 'hard work with positivity' and practice Rajyoga Meditation to enhance my work efficiency, self-confidence, and mind concentration.
        </p>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bkyashrajdesale/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.339c0-3.293-4-3.047-4 0v5.339h-3v-10h3v1.568c1.396-2.586 7-2.777 7 2.476v5.956z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/BKYashraj" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.303-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.047.139 3.006.405 2.291-1.553 3.296-1.23 3.296-1.23.655 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.37.824 1.096.824 2.211v3.278c0 .322.216.694.824.577 4.765-1.586 8.203-6.083 8.203-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
