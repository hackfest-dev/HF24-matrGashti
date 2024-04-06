import Navbar from "../components/Navigation";
import Order from "../components/Order";
import profile from "../assets/profile.png";
import Footer from "../components/Footer";

export default function Profile() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-8 md:flex md:items-center md:space-x-8">
                    <img src={profile} className="h-40 w-40 rounded-full md:h-56 md:w-56 mx-auto md:mx-0" alt="Profile" />
                    <div className="mt-6 md:mt-0">
                        <h2 className="text-2xl font-bold text-gray-800">Bhavya</h2>
                        <p className="text-gray-600">8748035788</p>
                        <p className="text-gray-600">Email@gmail.com</p>
                        <div className="mt-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold my-8 text-center">My Reviews</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Render your Order components here */}
                    <Order />
                    <Order />
                    <Order />
                    <Order />
                    <Order />
                    <Order />
                </div>
            </div>
            <Footer />
        </div>
    );
}
