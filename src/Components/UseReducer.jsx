import { useEffect, useReducer, useState } from "react";

const initialState = {
    data: null,
    loading: true,
    error: null
}

const dataReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {loading: true, data: null, error: null};
        case "FETCH_SUCCESS":
            return {loading: false, data: action.payload, error: null};
        case "FETCH_ERROR":
            return {loading: false, data: null, error: error.payload};
        default:
            return state;
}
}

const UseReducer = () => {

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const [state, dispatch] = useReducer(dataReducer, initialState)

    useEffect(()=>{
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=>{
            setData(data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            
            setError("خطا در گرفتن دیتا");
            setLoading(false);
        })
    }, []);

    if (loading) return(
        <div className="h-auto flex items-center justify-center bg-gradient from-blue-50 to-indigo-300">
            <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-full h-16 w-16 bg-indigo-400 mb-4">
                </div>
                <p className="text-indigo-600 font-semibold text-xl">در حال دریافت اطلاعات ...</p>
            </div>
        </div>
    )      
    
    if (error) return (
        <div className="h-auto flex items-center justify-center bg-red-50">
            <div className="text-center p-8 bg-amber-500 shadow-lg border-2 border-red-400">
                <p className="text-red-600 text-lg font-medium">{error}</p>
            </div>
        </div>
    )

    return (
        <div className="h-auto bg-gradient from-blue-400 to-gray-600 p-6">
            <h1 className="text-3xl font-bold text-indigo-700 text-center mb-8">لیست کاربران</h1>
            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.map((user) => (
                    <div key={user.id} className="bg-amber-300 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow
                    duration-300 border border-gray-100">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-500 py-4 px-6">
                            <h2 className="text-xl font-semibold text-white">{user.name}</h2>
                            <p className="text-indigo-100">{user.username}</p>
                        </div>
                        <div className="p-6 space-y-3">
                            <div className="flex items-center text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2"></svg>
                                <span>{user.email}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <span>{user.phone}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <span>{user.website}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UseReducer;