import React from 'react';
import food1Image from '../assets/food1.jpg';
import food2Image from '../assets/food2.jpeg';
import food3Image from '../assets/food3.webp';
import food4Image from '../assets/food4.jpg';
import food5Image from '../assets/food5.jpg';

const DummyList = () => {
    return (
    <>
       <h1 className='text-7xl font-bold text-center mb-10'>Food available around me</h1>
      <div className='flex flex-wrap space-x-10 justify-around items-between'>
        {/* Dummy item 1 */}
       
        <div className="bg-white max-w-[500px] ml-10 shadow-md rounded-lg p-4 mb-4 flex">
          <div>
            <img src={food1Image} alt="Food 1" className="w-80 h-32 object-cover mb-4 rounded-lg" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold mb-2">Durga</h2>
            <p className="text-sm text-gray-600 mb-4">In NMAMIT campus</p>
            
          </div>
        </div>
  
        {/* Dummy item 2 */}
        <div className="bg-white max-w-[500px] shadow-md rounded-lg p-4 mb-4 flex">
          <div>
            <img src={food2Image} alt="Food 2" className="w-80 h-32 object-cover mb-4 rounded-lg" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold mb-2">Disha Restaurant</h2>
            <p className="text-sm text-gray-600 mb-4">Ujire</p>
           
          </div>
        </div>
  
        {/* Dummy item 3 */}
        <div className="bg-white max-w-[500px] shadow-md rounded-lg p-4 mb-4 flex">
          <div>
            <img src={food3Image} alt="Food 3" className="w-80 h-32 object-cover mb-4 rounded-lg" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold mb-2">Restaurant Name 3</h2>
            <p className="text-sm text-gray-600 mb-4">Some info about the restaurant</p>
         
          </div>
        </div>
  
        {/* Dummy item 4 */}
        <div className="bg-white max-w-[500px] shadow-md rounded-lg p-4 mb-4 flex">
          <div>
            <img src={food4Image} alt="Food 4" className="w-80 h-32 object-cover mb-4 rounded-lg" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold mb-2">Restaurant Name 4</h2>
            <p className="text-sm text-gray-600 mb-4">Some info about the restaurant</p>
        
          </div>
        </div>
  
        {/* Dummy item 5 */}
        <div className="bg-white max-w-[500px] shadow-md rounded-lg p-4 mb-4 flex">
          <div>
            <img src={food5Image} alt="Food 5" className="w-80 h-32 object-cover mb-4 rounded-lg" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold mb-2">Restaurant Name 5</h2>
            <p className="text-sm text-gray-600 mb-4">Some info about the restaurant</p>
        
          </div>
        </div>
      </div>
      </>
    );
  };
  

export default DummyList;
