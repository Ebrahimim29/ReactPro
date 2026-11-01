import { useState } from "react";
import Cars from "./Components/Cars";

const App = () => {

  const cars = [
    {make:"Toyota",model:"Camry",year:2020,color:"Silver",price:"$30000"},
    {make:"Bmw",model:"Ix6",year:2025,color:"Blue",price:"$15000"},
    {make:"Benz",model:"S500",year:2008,color:"Black",price:"$45000"},
    {make:"Mazeratti",model:"Coopeh",year:2012,color:"Red",price:"$40000"}
  ]

  const [text, setText] = useState("Hello");

  const ChangeText = () => {
    setText("Welcome To Site");
  }


  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-5xl mt-4">{text}</h1>
      <button className="bg-green-500 hover:bg-amber-600 mt-4 p-4 rounded-2xl shadow-2xl" onClick={ChangeText}>Change</button>

      {cars.map((car)=>(
        <Cars key={car.name} 
        make={car.make} model={car.model} year={car.year} color={car.color} price={car.price}/>
      ))}
    </div>
  );
};

export default App;