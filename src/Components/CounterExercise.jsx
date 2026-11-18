import { useEffect, useState } from "react";

const CounterExercise = () => {

    const [count, setCount] = useState(0);
    const [notification, setNotification] = useState(null)

    useEffect(() => {
        if (count % 10 === 0 && count !== 0) {
            setNotification(`تبریک شما به عدد ${count} رسیدید`)
            setTimeout(() => setNotification(null), 3000);
        }
    }, [count]);

    return (
        <div className={`h-auto bg-gradient-to-br from-red-700 to-indigo-700 flex
        flex-col items-center justify-center p-4 transition-all duration-500`}>
            <div className={`bg-indigo-500/30 backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-md w-full text-center
                relative overflow-hidden border border-white/20`}>
                <div className={`absolute -top-10 -left-10 w-40 h-40 bg-blue-400 opacity-10 rounded-full`}></div>
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-red-400 opacity-10 rounded-full`}></div>

                <h1 className="text-4xl font-bold text-white mb-6 tracking-wider">Counter Exercise</h1>

                <div className={`bg-amber-700/80 backdrop-blur-md rounded-lg p-10 mb-8 border border-white/40`}>
                    <div className="relative">
                        <span className="block text-8xl font-bold text-white transition-all duration-300 transform"
                            style={{ textShadow: "0 4px 10px rgba(0,0,0,0.4)" }}>
                            {count}
                        </span>
                        {count !== 0 && (
                            <span className={`absolute -top-2 -right-2 bg-green-400 px-2 py-1 rounded-full text-sm font-bold
                                text-white shadow-lg`}>
                                {count % 2 === 0 ? 'Even' : 'Odd'}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                    <button
                        onClick={() => setCount(count - 1)}
                        className={`bg-red-700 hover:bg-amber-400 text-white bg-opacity-90 font-bold py-3 px-8 rounded-full
                        hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50`}
                    >
                        -
                    </button>
                    <button
                        onClick={() => setCount(count + 1)}
                        className={`bg-green-700 hover:bg-amber-400 text-white bg-opacity-90 font-bold py-3 px-8 rounded-full
                        hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50`}
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => setCount(0)}
                    className='mt-4 text-white hover:text-opacity-80 text-sm underline transition-colors'
                >
                    Reset
                </button>
            </div>

            {notification && (
                <div className={`fixed bottom-4 right-4 bg-blue-400 text-white rounded-lg shadow-xl p-4
                transition-all transform animate-bounce`}>
                    {notification}
                </div>

            )}

        </div>
    );
};

export default CounterExercise;