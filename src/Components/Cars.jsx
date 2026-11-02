const Cars = ({make, model, year, color, price, handleDelete}) => {

    const handleChange = (e) => {
        console.log(e.target.value);        
    }

    return (
        <div className="bg-amber-100 w-[60%] mt-4">
            <h2 className="mb-4">Car Information</h2>
            <ul>
                <li>
                    <strong>Make:</strong>{make}
                </li>
                <li>
                    <strong>Model:</strong>{model}
                </li>
                <li>
                    <strong>Year:</strong>{year}
                </li>
                <li>
                    <strong>Color:</strong>{color}
                </li>
                <li>
                    <strong>Price:</strong>{price}
                </li>
                <li>
                    <button 
                    onClick={handleDelete}
                    className="bg-red-500 p-1 hover:bg-amber-400 rounded">Delete</button>
                </li>
                <li>
                    <input type="text" 
                    onChange={handleChange}
                    className="bg-green-400 mt-1 rounded" placeholder="Fill In Box"/>
                </li>
            </ul>
        </div>
    );
};

export default Cars;