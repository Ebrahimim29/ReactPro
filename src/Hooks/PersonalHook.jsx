import { useState } from "react";
import Users from "./Users";
import Posts from "./Posts";

const PersonalHook = () => {

    const [page, setPage] = useState("users");

    return (
        <div className="h-auto bg-gradient-to-br from-blue-200 to-indigo-200 p-6">
            <div className="max-w-4xl mx-auto bg-gray-500 rounded shadow-md overflow-hidden">
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Personal Hook</h1>
                    <div className="flex justify-center mb-8 gap-4">
                        <button 
                        className={`px-6 py-3 rounded font-bold transition-all duration-200 
                            ${page === "users" ? "bg-amber-600 text-white shadow-md" : "bg-red-400 text-gray-400 hover:bg-green-400"}`}
                        onClick={() => setPage("users")}
                        >Users</button>

                        <button 
                        className={`px-6 py-3 rounded font-medium transition-all duration-200
                        ${page === "posts" ? "bg-indigo-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                        onClick={() => setPage("posts")}
                        >Posts</button>
                    </div>

                    <div className="bg-sky-500 rounded p-4">
                            {page === "users" && <Users/>}
                            {page === "posts" && <Posts/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalHook;