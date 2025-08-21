import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react"; // for eye icon toggle



const Faculty_Registration_Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dept: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (formData.password.length < 6) {
    alert("Password must be at least 6 characters long");
    return; 
  }

    console.log("Faculty Data:", formData);
  
    setFormData({ name: "", email: "", password: "", dept: "" });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Faculty Registration
        </h2>

        {/* Faculty Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Faculty Name</label>
          <input
            type="text"
            name="name"
            placeholder="Faculty Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Faculty Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Password with Eye Icon */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
                minLength={6}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-black"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Department */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Department</label>
          <select
            name="dept"
            value={formData.dept}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          >
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="CSE-DS">CSE-DS</option>
            <option value="CSIT">CSIT</option>
            <option value="AIML">AIML</option>
            <option value="CSE-CYBER">CSE-CYBER</option>
            <option value="ECE">ECE</option>
            <option value="ME">ME</option>
            <option value="Civil">Civil</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="FCA">FCA</option>


          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add Faculty
        </button>
      </form>
    </div>
  );
};

export default Faculty_Registration_Form;
