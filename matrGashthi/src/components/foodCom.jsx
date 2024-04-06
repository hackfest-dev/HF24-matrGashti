import React from 'react';
import food1Image from '../assets/food1.jpg';

const FoodList = (props) => {
    return (
        <div className='mx-2'>
            {/* Dummy item 1 */}
            <div className="bg-white justify-left items-center shadow-md rounded-lg p-4 mb-4 flex">
                <div>
                    <img src={food1Image} alt="Food 1" className="w-80 h-32 object-cover rounded-lg" />
                </div>
                <div className="ml-4">
                    <h2 className="text-lg font-semibold mb-2">{props.description}</h2>
                    {/* <p className="text-sm text-gray-600 mb-4"></p> */}
                    {
                        props.items.map((data, index) => {
                            <div key={index}>
                                <p className="text-sm text-gray-600 mb-4">{data.name}</p>
                                <p className="text-sm text-gray-600 mb-4">{data.quantity}</p>
                            </div>
                    })
                    }
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FoodList;
