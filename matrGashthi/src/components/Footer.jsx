import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="bg-red-400 py-10 mt-10  w-full">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-white">
            <h1 className="text-xl font-semibold">ReCuisine</h1>
            <p className="text-sm">Let's reduce food wastage together</p>
          </div>
          <div className="flex space-x-8">
            <a href="/About" className="text-white text-sm hover:text-gray-200">About</a>
            <a href="/Food" className="text-white text-sm hover:text-gray-200">Food</a>
            <a href="/Donate" className="text-white text-sm hover:text-gray-200">Donate</a>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-white text-lg hover:text-gray-200" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-white text-lg hover:text-gray-200" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-lg hover:text-gray-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
