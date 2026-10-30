import { useState } from "react";
import Cars from "./Components/Cars";

const App = () => {

  const [text, setText] = useState("Hello");

  const ChangeText = () => {
    setText("Welcome To Site");
  }


  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-5xl mt-4">{text}</h1>
      <button className="bg-green-500 hover:bg-amber-600 mt-4 p-4 rounded-2xl shadow-2xl" onClick={ChangeText}>Change</button>

      <Cars make="Toyota" model="Camry" year={2020} color="Silver" price="$20,000"/>
      <Cars make="BMW" model="G12" year={2025} color="Blue" price="$30,000"/>
    </div>
  );
};

export default App;