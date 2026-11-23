import { useEffect, useRef, useState } from "react";

const UseRef2 = () => {

    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-auto bg-gradient from-teal-400 to-indigo-500 p-4">
            <div className="w-full max-w-md bg-amber-500 rounded-xl shadow-xl space-y-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Input Form</h2>
                <div className="relative">
                    <input type="text"
                        ref={inputRef}
                        typeof="text"
                        value={inputValue}
                        onChange={(e)=>setInputValue(e.target.value)}
                        className="w-full px-4 py-3 text-center text-lg border-teal-300 rounded focus:ring-4 focus:ring-teal-200
                        focus:border-teal-500 outline-none transition duration-300 bg-gray-50"
                        placeholder="Please Fill Input..."/>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-teal-500"></svg>
                        </div>
                </div>

                {inputValue && (
                    <div className="mt-4 p-4 bg-teal-50 rounded border-teal-200">
                        <p className="text-teal-800 text-center">Text Input: <span className="font-bold">{inputValue}</span></p>
                    </div>
                )}

                <div className="flex justify-center space-x-4 space-x-reverse rtl gap-4">
                    <button className="px-6 py-2 bg-teal-400" onClick={()=>setInputValue("")}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UseRef2;