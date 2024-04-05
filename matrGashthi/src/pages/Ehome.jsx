import Navbar from "../components/Navigation";
import Footer from "../components/Footer";

export default function Ehome(){
    return(
        <>
            <Navbar/>
            <div className="flex justify-center flex-col items-center mt-10">
                {/* dummy list  */}
                <h1>Donate food now</h1>
                <button class="relative overflow-hidden bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700 rounded-md text-white py-2 px-4 transition duration-300 ease-in-out">
                <span class="absolute inset-0 bg-white opacity-25"></span>
                Donate
            </button>
            {/* footer */}
           
            </div>
             <Footer/>
        </>
    )
}