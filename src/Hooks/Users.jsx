import { useEffect, useState } from "react";

const Users = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(!res.ok) throw new Error("Error in Get Data ...")
            return res.json();
        })
        .then((data)=>{
            setData(data);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false)
        })
    }, [])

    if(loading) return <div className="flex justify-center items-center h-auto">
        <span className="text-blue-600 font-medium text-lg">در حال دریافت اطلاعات...</span>
    </div>

    if(error) return <div className="bg-red-400 text-red-900 p-4 rounded-lg text-center">
        خطا : {error}
    </div>

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">لیست کاربران</h2>
            <ul className="bg-gray-500 rounded-xl shadow-md divide-y divide-amber-500">
                {data.map((user)=>(
                    <li key={user.id} className="p-4 hover:bg-blue-300 transition-colors duration-150">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <div className="flex items-center space-x-3 space-x-reverse">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-gray-500 font-bold">
                                    {user.name.charAt(0)}
                                </div>
                                <div className="font-medium text-gray-900">{user.name}</div>
                            </div>
                            <div className="mt-2 sm:mt-0">
                                <a href={`mailto:${user.email}`} className="text-blue-600 hover:text-blue-800 hover:underline text-sm flex items-center">
                                    {user.email}
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;