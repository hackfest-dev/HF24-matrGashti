import profile from '../assets/images.jpg'
export default function Order(){
    return(
        <>
    <div className="flex border-8 p-3 mx-28">
        <div className="mr-4">
            <img src={profile} alt="Restaurant" className="w-20 h-20" />
        </div>
        <div className="flex-grow px-3 mx-1">
            {/* orderID */}
            <h1 className="text-xl font-bold">Restaurant Name</h1>
            <p className="text-sm">OrderID001</p>
            <button type='submit' className='py-1 px-3 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 mt-1'>Review</button>
        </div>
    </div>
</>
    )
}