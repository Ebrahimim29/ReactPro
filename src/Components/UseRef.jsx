import { useRef, useState } from "react";

const UseRef = () => {

    const [count, setCount] = useState(0)
    let countvalue = useRef(0);

    const handleClick = () => {
        countvalue.current += 2;
        setCount(countvalue.current + 1);
    }

    return (
        <div className="flex flex-col items-center justify-center h-auto bg-gradient-to-r from-purple-600 to-pink-500">
            <div className="p-8 bg-white rounded shadow-lg flex flex-col items-center space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Counter App</h2>
                <div className="flex items-center justify-center w-36 h-36 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500">
                    <span className="text-5xl font-bold text-white">{count}</span>
                </div>

                <button className="px-6 py-3 bg-amber-400 text-white font-bold rounded-lg shadow-md focus:ring-blue-300 hover:shadow-lg transform
                hover:scale-105 transition duration-300 ease-in-out focus:outline-none"
                onClick={handleClick}>
                    Add
                </button>

                <p className="text-gray-600 text-center">برای افزایش عدد شمارنده کلیک کنید</p>


            </div>
            
        </div>
    );
};

export default UseRef;