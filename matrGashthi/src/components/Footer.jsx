export default function Footer() {
    return (
      <div className="bg-red-400 py-10">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-white">
              <h1 className="text-xl font-semibold">ReCuisine</h1>
              <p className="text-sm">Let's reduce food wastage together</p>
            </div>
            <div className="flex space-x-8">
              <a href="/" className="text-white text-sm hover:text-gray-200">About</a>
              <a href="/" className="text-white text-sm hover:text-gray-200">Food</a>
              <a href="/" className="text-white text-sm hover:text-gray-200">Donate</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  