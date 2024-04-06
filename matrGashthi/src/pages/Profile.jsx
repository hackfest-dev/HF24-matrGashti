import Navbar from "../components/Navigation"
import Order from "../components/Order"
import profile from "../assets/profile.png"
import Footer from "../components/Footer"
import axios from 'axios';
import { response } from "express";



export default function Profile(){

    async function getData(){
        let data = await axios.get(`http://localhost:3001/profile/${}`, response);

    }
    return(
        <div>
            <Navbar/>
            <div className="m-20">
            <div className="flex flex-row my-5 p-5 mx-44 justify-start space-x-20 items-center border-4">
                <img src={profile} className="h-44 w-44 rounded-md"/>
                <div className="">
                    <h2>Bhavya</h2>
                    <p>8748035788</p>
                    <p>Email@gmail.com</p>
                </div>
            </div>
            <h2 className="mx-48">My Reviews</h2>
            <div className="m-10 flex flex-col space-y-10">
            <Order/>
            <Order/>
            <Order/>
            <Order/>
            <Order/>
            <Order/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}