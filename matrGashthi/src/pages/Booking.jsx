import React, { useState } from 'react';
import Navbar from "../components/Navigation";
import AddItem from "../components/AddItem";

export default function Booking() {
    

    return (
        <>
            <Navbar />
            <div className="w-full flex justify-center items-center">
                <div>
                    <div>
                        <form>
                            <button onClick={handleOnClick} type='button' className='py-1 px-3 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 mt-1'>Review</button>
                        </form>
                    </div>
                </div>
                <div>
                    {[...Array(itemCount)].map((_, index) => (
                        <AddItem key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}
