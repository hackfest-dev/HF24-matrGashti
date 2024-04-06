import React from 'react';
import food1Image from '../assets/food1.jpg';
const FoodList = () => {
    return (
        <div className='mx-80'>
        {/* Dummy item 1 */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex">
          <div>
            <img src={food1Image} alt="Food 1" className="w-80 h-32 object-cover mb-4 rounded-lg" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold mb-2">Durga</h2>
            <p className="text-sm text-gray-600 mb-4">In NMAMIT campus</p>
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Order Now
            </button>
          </div>
        </div>
        </div>
    );
}
export default FoodList;
  