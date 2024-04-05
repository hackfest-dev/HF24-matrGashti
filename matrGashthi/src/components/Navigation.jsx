export default function Navbar(){
    return(
       <div className="h-20 p-10 w-full bg-red-400 flex justify-between items-center">
    <a className="text-3xl text-white" href="/">ReCuisine</a>
    <div className="flex items-center">
       
        <button className="block lg:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <button className="relative overflow-hidden bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700 rounded-md text-white py-2 px-4 transition duration-300 ease-in-out">
                <span className="absolute inset-0 bg-white opacity-25"></span>
                Food
            </button>
            <button className="relative overflow-hidden bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700 rounded-md text-white py-2 px-4 transition duration-300 ease-in-out">
                <span className="absolute inset-0 bg-white opacity-25"></span>
                Donate
            </button>
            <button className="relative overflow-hidden bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700 rounded-md text-white py-2 px-4 transition duration-300 ease-in-out">
                <span className="absolute inset-0 bg-white opacity-25"></span>
                About
            </button>
        </div>
    </div>
</div>

    )
}