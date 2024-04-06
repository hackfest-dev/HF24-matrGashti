import React, { useState } from 'react';
import Navbar from "../components/Navigation";
import AddItem from "../components/AddItem";

export default function Booking() {
    // State to manage selected food items
    const [selectedFoods, setSelectedFoods] = useState([]);

    // Function to add a new AddItem component
    function addNewItem() {
        setSelectedFoods([...selectedFoods, '']); // Adding a new item to the array
    }

    // Function to handle changing selected food item at index
    function handleChange(index, value) {
        const newSelectedFoods = [...selectedFoods];
        newSelectedFoods[index] = value;
        setSelectedFoods(newSelectedFoods);
    }

    return (
        <>
            <Navbar />
            <div className="w-full flex justify-center items-center border-8 p-10 min-h-96">
                <div className='flex justify-center items-center flex-col'>
                    {/* Render AddItem components based on selectedFoods array */}
                    
                    <button type='button' onClick={addNewItem} className='py-1 px-3 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 mt-5'>Add item</button>
                    <div className='flex flex-col'>
                    {selectedFoods.map((food, index) => (
                        <AddItem 
                            key={index} 
                            selectedFood={food}
                            onChange={(value) => handleChange(index, value)} 
                        />
                    ))}
                    </div>
                </div>

                <div>

                </div>
            </div>
        </>
    );
}
