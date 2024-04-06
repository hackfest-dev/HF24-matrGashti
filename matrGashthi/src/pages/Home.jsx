import React, { useState, useEffect } from 'react';
import food1Image from '../assets/home1.jpg';
import food2Image from '../assets/home2.jpg';
import food3Image from '../assets/home3.webp';
import leftArrowImage from '../assets/leftArrow.webp';
import rightArrowImage from '../assets/rightArrow.png';
import Navigation from "../components/Navigation"

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
      <div>
        <Navigation/>
      </div>
      <div style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
        <img
          src={MyCollection[index].imgSrc}
          alt="Food"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: 'auto' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '36px', fontWeight: 'bold' }}>
          <p>{MyCollection[index].quote}</p>
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
    </div>
  );
};

export default Home;
