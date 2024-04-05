import React from 'react';

const DummyList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Dummy item 1 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src="food1.jpg" alt="Food 1" className="w-full h-32 object-cover mb-4 rounded-lg" />
        <h2 className="text-lg font-semibold mb-2">Durga</h2>
        <p className="text-sm text-gray-600 mb-4">In NMAMIT campus</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Order Now
        </button>
      </div>

      {/* Dummy item 2 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src="food2.jpeg" alt="Food 2" className="w-full h-32 object-cover mb-4 rounded-lg" />
        <h2 className="text-lg font-semibold mb-2">Disha Restaurant</h2>
        <p className="text-sm text-gray-600 mb-4">Ujire</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Order Now
        </button>
      </div>

      {/* Dummy item 3 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src="food3.webp" alt="Food 3" className="w-full h-32 object-cover mb-4 rounded-lg" />
        <h2 className="text-lg font-semibold mb-2">Restaurant Name 3</h2>
        <p className="text-sm text-gray-600 mb-4">Some info about the restaurant</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Order Now
        </button>
      </div>

      {/* Dummy item 4 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src="food4.jpg" alt="Food 4" className="w-full h-32 object-cover mb-4 rounded-lg" />
        <h2 className="text-lg font-semibold mb-2">Restaurant Name 4</h2>
        <p className="text-sm text-gray-600 mb-4">Some info about the restaurant</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Order Now
        </button>
      </div>

      {/* Dummy item 5 */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src="food5.jpg" alt="Food 5" className="w-full h-32 object-cover mb-4 rounded-lg" />
        <h2 className="text-lg font-semibold mb-2">Restaurant Name 5</h2>
        <p className="text-sm text-gray-600 mb-4">Some info about the restaurant</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default DummyList;
