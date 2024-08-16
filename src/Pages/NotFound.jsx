import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate(); // programmatically navigate to the previous page

    return (
        <>
            <main className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-300">
                <h1 className="font-extrabold tracking-widest text-gray-900 text-9xl">
                    404
                </h1>
                <div className="absolute px-2 text-sm text-white bg-red-600 rounded rotate-12 shadow-md">
                    Page Not Found
                </div>
                <button className="mt-8" onClick={() => navigate(-1)}>
                    <a className="relative inline-block text-sm font-medium text-white group active:text-red-500 focus:outline-none focus:ring">
                        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-red-500 group-hover:translate-y-0 group-hover:translate-x-0 rounded-md" />

                        <span
                            className="relative block px-8 py-3 bg-red-500 border border-current rounded-md"
                        >
                            Go Back
                        </span>
                    </a>
                </button>
            </main>
        </>
    )
}

export default NotFound;
