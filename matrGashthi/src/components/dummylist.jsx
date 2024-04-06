import React from 'react';
import food1Image from '../assets/food1.jpg';
import food2Image from '../assets/food2.jpeg';
import food3Image from '../assets/food3.webp';
import food4Image from '../assets/food4.jpg';
import food5Image from '../assets/food5.jpg';

const DummyList = () => {
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
  
        {/* Dummy item 2 */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex">
          <div>
            <img src={food2Image} alt="Food 2" className="w-80 h-32 object-cover mb-4 rounded-lg" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold mb-2">Disha Restaurant</h2>
            <p className="text-sm text-gray-600 mb-4">Ujire</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Order Now
            </button>
          </div>
        </div>
  
        {/* Dummy item 3 */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex">
          <div>
            <img src={food3Image} alt="Food 3" className="w-80 h-32 object-cover mb-4 rounded-lg" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold mb-2">Restaurant Name 3</h2>
            <p className="text-sm text-gray-600 mb-4">Some info about the restaurant</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Order Now
            </button>
          </div>
        </div>
  
        {/* Dummy item 4 */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex">
          <div>
            <img src={food4Image} alt="Food 4" className="w-80 h-32 object-cover mb-4 rounded-lg" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold mb-2">Restaurant Name 4</h2>
            <p className="text-sm text-gray-600 mb-4">Some info about the restaurant</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Order Now
            </button>
          </div>
        </div>
  
        {/* Dummy item 5 */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex">
          <div>
            <img src={food5Image} alt="Food 5" className="w-80 h-32 object-cover mb-4 rounded-lg" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold mb-2">Restaurant Name 5</h2>
            <p className="text-sm text-gray-600 mb-4">Some info about the restaurant</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Order Now
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default DummyList;
