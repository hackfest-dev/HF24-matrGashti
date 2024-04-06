import React, { useState } from 'react';
import Navbar from "../components/Navigation";
import AddItem from "../components/AddItem";
import Dummy from "../components/Dummy";
import { useParams } from 'react-router-dom';

export default function Booking() {
    const { restaurantId } = useParams();
    // State to manage selected food items
    const [selectedFoods, setSelectedFoods] = useState([]);
    // State to track if the "Add item" button has been clicked
    const [addItemClicked, setAddItemClicked] = useState(false);

    // Function to add a new AddItem component
    function addNewItem() {
        setSelectedFoods([...selectedFoods, '']); // Adding a new item to the array
        // Set addItemClicked to true after the first click
        setAddItemClicked(true);
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
            <div className="w-full flex justify-center items-start p-10 flex-wrap border-8">
                <div className='flex justify-start items-center flex-col basis-3/5 border-8 min-h-screen p-10'>
                    {/* Render AddItem components based on selectedFoods array */}
                    <div className='flex flex-row space-x-10'>
                        <button type='button' onClick={addNewItem} className='py-1 px-3 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>Add item</button>
                    {/* Show submit button adjacent to "Add item" button after it's clicked for the first time */}
                    {addItemClicked && <button type='submit' className='py-1 px-3 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-75'>Submit</button>}
                    </div>
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

                <div className='basis-2/5 h-screen overflow-y-auto border-8 p-5 min-h-44'>
                    <h2 className='text-center text-xl sticky'>Present Items</h2>
                    <Dummy/>   
                </div>
            </div>
        </>
    );
}
