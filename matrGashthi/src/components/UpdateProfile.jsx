import React, { useState } from 'react';
const Update = () => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    organization: '',
    address: '',
    city: '',
    state: '',
    landmark: '',
  });
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit the data
      console.log('Form submitted:', formData);
      // You can add logic here to submit the form data to the server
    } else {
      // Form is invalid, set the errors state
      setErrors(errors);
    }
  };

  const validateForm = (formData) => {
    let errors = {};
    if (!formData.fullname.trim()) {
      errors.fullname = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }
    // Add validation for other fields here
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation using regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Update Your Profile</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="fullname" name="fullname" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization Name (optional)</label>
          <input type="text" id="organization" name="organization" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" id="address" name="address" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input type="text" id="city" name="city" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
          <input type="text" id="state" name="state" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">Landmark</label>
          <input type="text" id="landmark" name="landmark" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="document" className="block text-sm font-medium text-gray-700">Upload Organization Document (PDF, PPT, Image)</label>
          <input
            type="file"
            id="document"
            name="document"
            accept=".pdf,.ppt,.pptx,image/*"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update</button>
      </form>
    </div>
  );
};

export default Update;
