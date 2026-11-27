import { useEffect, useReducer } from "react";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, data: null, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch(() =>
        dispatch({ type: "FETCH_ERROR", payload: "خطا در گرفتن دیتا" })
      );
  }, []);

  if (state.loading)
    return (
      <div className="h-auto flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-300">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-full h-16 w-16 bg-indigo-400 mb-4"></div>
          <p className="text-indigo-600 font-semibold text-xl">
            در حال دریافت اطلاعات ...
          </p>
        </div>
      </div>
    );

  if (state.error)
    return (
      <div className="h-auto flex items-center justify-center bg-red-50">
        <div className="text-center p-8 bg-amber-500 shadow-lg border-2 border-red-400">
          <p className="text-red-600 text-lg font-medium">{state.error}</p>
        </div>
      </div>
    );

  return (
    <div className="h-auto bg-gradient-to-r from-blue-400 to-gray-600 p-6">
      <h1 className="text-3xl font-bold text-indigo-700 text-center mb-8">
        لیست کاربران
      </h1>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {state.data.map((user) => (
          <div
            key={user.id}
            className="bg-amber-300 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-500 py-4 px-6">
              <h2 className="text-xl font-semibold text-white">{user.name}</h2>
              <p className="text-indigo-100">{user.username}</p>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
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