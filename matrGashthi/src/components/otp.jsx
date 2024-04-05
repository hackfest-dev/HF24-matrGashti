const OTP = () => {
    return (
      <div className="mx-auto max-w-md mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">OTP</h1>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Enter OTP"
        />
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>
      </div>
    );
  };
  
  export default OTP;
  