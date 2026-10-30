import Cars from "./Components/Cars";

const App = () => {
  return (
    <div>
      <Cars make="Toyota" model="Camry" year={2020} color="Silver" price="$20,000"/>
      <Cars make="BMW" model="G12" year={2025} color="Blue" price="$30,000"/>
    </div>
  );
};

export default App;