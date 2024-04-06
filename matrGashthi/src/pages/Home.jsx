import React, { useState, useEffect } from 'react';
import food1Image from '../assets/home1.jpg';
import food2Image from '../assets/home2.jpg';
import food3Image from '../assets/home3.webp';
import leftArrowImage from '../assets/leftArrow.webp';
import rightArrowImage from '../assets/rightArrow.png';
import Navigation from "../components/Navigation"
import About from "../components/AboutHome";
import Footer from "../components/Footer";
import Dummy from "../components/Dummy2";

const MyCollection = [
  {
    imgSrc: food1Image,
    quote: "Don't waste food, someone is starving somewhere.",
  },
  {
    imgSrc: food2Image,
    quote: "Every grain of rice is a fortune. Don't waste it.",
  },
  {
    imgSrc: food3Image,
    quote: "Food is precious. Don't let it go to waste.",
  },
];

const Home = () => {
  const [index, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextPicture, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [index]);

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % MyCollection.length);
  };

  const goToPrevPicture = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + MyCollection.length) % MyCollection.length);
  };

  return (
    <div>
      <Navigation/>
      <div style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
        <img
          src={MyCollection[index].imgSrc}
          alt="Food"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: 'auto' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '36px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}> {/* Updated fontFamily */}
          <p className="text-4xl font-bold text-white">{MyCollection[index].quote}</p> {/* Updated font size and color */}
        </div>
        <img
          src={leftArrowImage}
          alt="Left Arrow"
          style={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)', cursor: 'pointer', width: '20px', height: '20px' }}
          onClick={goToPrevPicture}
        />
        <img
          src={rightArrowImage}
          alt="Right Arrow"
          style={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', cursor: 'pointer', width: '20px', height: '20px' }}
          onClick={goToNextPicture}
        />
      </div>
      <hr />
            <div className="flex justify-center flex-col mx-20  p-5 items-center mt-14">
                <Dummy/>
                <div className="flex justify-center items-center mt-10 flex-col w-full">
                <h1 className="text-6xl font-bold text-center text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}> {/* Updated fontFamily */}
                    Make an impact by donating food today
                </h1>
                <button class="relative mt-5 text-2xl overflow-hidden bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700 rounded-md text-white py-5 px-10 transition duration-300 ease-in-out" style={{ fontFamily: 'Arial, sans-serif' }}> {/* Updated fontFamily */}
                    <span class="absolute inset-0 bg-white opacity-25"></span>
                    Donate Now
                </button>
                </div>
            {/* footer */}
           
            </div>
             <About/>
             <Footer/>
    </div>
  );
};

export default Home;
