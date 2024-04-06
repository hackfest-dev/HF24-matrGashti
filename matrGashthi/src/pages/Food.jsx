// import Navbar from '../components/Navigation';
// import { useState } from 'react';
// import FoodCom from '../components/foodCom';
// export default function Food() {
//     const [data, setData] = useState(0);

//     function handleChange(e) {
//         const value = e.target.value;
//         // Ensure the entered value is within the specified range
//         if (value >= 0 && value <= 5) { // changed max to 5 for testing purposes
//             setData(value);
//         }
//     }

//     function handleSubmit(e) {
//         e.preventDefault(); // Prevents the default form submission behavior
//         // Here you can add any additional logic you want to perform when the form is submitted
//         console.log('Form submitted with value:', data);
//     }

//     return (
//         <>
//             <Navbar />
//             <div className="flex justify-center items-center min-h-96">
//                 <div className="bg-gray-100 p-8 rounded-lg shadow-md">
//                     <h1 className="text-2xl font-bold mb-4">Food Delivery Distance</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-4">
//                             <label htmlFor='radius' className="block text-gray-700">Enter the distance in Kilometers</label>
//                             <input name='radius' type='number' min="0" max="5" onChange={handleChange} value={data} className="form-input mt-1 block w-full" />
//                         </div>
//                         <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
//                     </form>
//                 </div>
//             </div>
//             <FoodCom/>
//         </>
//     )
// }


import React, { useState } from 'react';
import Navbar from '../components/Navigation';
import FoodCom from '../components/foodCom';
import Footer from '../components/Footer'; // Import your FoodCom component

export default function Food() {
    const [data, setData] = useState(0);
    const [showFoodCom, setShowFoodCom] = useState(false); // State to control visibility of FoodCom components

    function handleChange(e) {
        const value = e.target.value;
        // Ensure the entered value is within the specified range
        if (value >= 0 && value <= 5) {
            setData(value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevents the default form submission behavior
        setShowFoodCom(true); // Show FoodCom components when form is submitted
    }

    // Array to hold FoodCom components
    const foodComArray = Array.from({ length: 5 }, (_, index) => <FoodCom key={index} />);

    return (
        <>
            <Navbar/>
            <div className="flex justify-center items-center flex-grow min-h-96">
                <div className="bg-gray-100 p-8 rounded-lg shadow-md  w-full max-w-lg">
                    <h1 className="text-2xl font-bold mb-4">Food Delivery Distance</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor='radius' className="block text-gray-700">Enter the distance in Kilometers</label>
                            <input name='radius' type='number' min="0" max="5" onChange={handleChange} value={data} className="form-input mt-1 block w-full" />
                        </div>
                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
                </div>
            </div>
            {/* Display FoodCom components below the form */}
            {showFoodCom && (
                <div className="mt-8 flex flex-wrap justify-center items-center">
                    {foodComArray.map((foodCom, index) => (
                        <div key={index} className="mb-4">
                            {foodCom}
                        </div>
                    ))}
                </div>
            )}
            <Footer/>
        </>
    );
}
