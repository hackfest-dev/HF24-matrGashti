import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import Dummy from "../components/dummylist";
import About from "../components/about_us";

export default function Ehome(){
    return(
        <>
            <Navbar/>
            <div className="flex justify-center flex-col mx-20  p-5 items-center mt-10">
                <Dummy/>
                <div className="flex justify-center items-center mt-10 flex-col w-full">
                <h1 className="text-6xl font-bold">Make an impact by donating food today</h1>
                <button class="relative mt-5 overflow-hidden bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700 rounded-md text-white py-3 px-5 transition duration-300 ease-in-out">
                <span class="absolute inset-0 bg-white opacity-25"></span>
                Donate
            </button>
                </div>
            </div>
             <About/>
             <Footer/>
        </>
    )
}