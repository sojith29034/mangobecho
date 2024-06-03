import React, {useState} from "react";

const ProductCard = ({image, name, price}) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 12));
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    const handleChange = (event) => {
        const value = Math.max(1, Math.min(12, parseInt(event.target.value) || 0));
        setQuantity(value);
    };
    return (
        <div className="w-64 max-w-64 bg-blue-300 rounded-lg shadow-md p-4 flex flex-col justify-between">
            <img className="object-cover w-full h-48 rounded-lg border-2 border-black" src={image} alt={name} />
            <div className="flex flex-col justify-between pt-4">
                <h5 className="text-xl font-bold tracking-wide">{name}</h5>
                {/* <p className="text-gray-600 text-sm mt-2">{color}</p> */}
                <p className="text-lg text-gray-600 font-bold mt-auto">₹{price}</p>
            </div>

            <div className="relative flex items-center">
                <button type="button" id="decrement-button" onClick={handleDecrement}
                className="absolute left-0 bg-blue-100 dark:bg-blue-700 dark:hover:bg-blue-600 dark:border-blue-600 hover:bg-blue-200 border border-blue-300 rounded-s-lg p-3 h-11 focus:ring-blue-100 dark:focus:ring-blue-700 focus:ring-2 focus:outline-none rounded-full">
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" d="M1 1h16"/>
                    </svg>
                </button>

                <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="12" aria-describedby="helper-text-explanation" 
                className="bg-blue-50 border-x-0 border-blue-300 h-11 text-center text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-blue-800 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none rounded-full" 
                placeholder="999" value={quantity} onChange={handleChange} required />

                <button type="button" id="increment-button" onClick={handleIncrement}
                className="absolute right-0 bg-blue-100 dark:bg-blue-700 dark:hover:bg-blue-600 dark:border-blue-600 hover:bg-blue-200 border border-blue-300 rounded-e-lg p-3 h-11 focus:ring-blue-100 dark:focus:ring-blue-700 focus:ring-2 focus:outline-none rounded-full">
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" d="M9 1v16M1 9h16"/>
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default ProductCard