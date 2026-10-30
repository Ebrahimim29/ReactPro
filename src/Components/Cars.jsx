const Cars = ({make, model, year, color, price}) => {
    return (
        <div className="bg-amber-100 p-4">
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
            </ul>
        </div>
    );
};

export default Cars;