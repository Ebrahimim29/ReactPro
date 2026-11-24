import { useEffect, useState } from "react";

const UseReducer = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                        {/* part 5 section 5 4:26 */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UseReducer;