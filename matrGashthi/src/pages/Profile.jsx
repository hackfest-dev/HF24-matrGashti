import Navbar from "../components/Navigation"
export default function Profile(){
    return(
        <>
            <Navbar/>
            <div className="m-20">
            <div className="flex flex-row m-10 p-5 justify-between items-center">
                <img src="" className="h-10 w-10 rounded-md"/>
                <div className="">
                    <h2>Bhavya</h2>
                    <p>8748035788</p>
                </div>
            </div>
        </div>
        </>
    )
}