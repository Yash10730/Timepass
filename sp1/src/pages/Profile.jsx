import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    hostelName: "",
    roomNo: "",
    country: "",
  });

  const [isModalOpen, setModalOpen] = useState(false);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Function to handle saving changes
  const handleSaveChanges = () => {
    console.log("Updated User Details:", user);
    alert("Changes saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-8 lg:px-16 py-8">
      {/* Header */}
      <div className="flex items-center mb-6">
        <NavLink
        to="/home"
        className="flex flex-col items-center text-gray-800 hover:text-black"
        activeClassName="text-black"
      >
        <button className="text-black text-2xl">&larr;</button>
        </NavLink>
        <h1 className="text-center w-full text-xl font-bold">User Profile</h1>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center items-center mb-6">
        <div className="relative">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full object-cover cursor-pointer"
            onClick={() => setModalOpen(true)} // Open modal on click
          />
          <div className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1">
            <img
              src="https://img.icons8.com/?size=100&id=7oEDRZeazDGp&format=png&color=000000"
              alt="Camera Icon"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>

      {/* Modal for Viewing Profile Picture */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              alt="Profile Avatar Large"
              className="w-96 h-96 rounded-lg object-cover"
            />
            <button
              onClick={() => setModalOpen(false)} // Close modal on click
              className="absolute top-2 right-2 bg-white text-black font-bold p-2 rounded-full hover:bg-gray-200 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Profile Form */}
      <form className="space-y-4">
        {/* Name Field */}
        <div className="space-y-1">
          <label htmlFor="name" className="text font-bold text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={user.name}
            placeholder="Scooby Doo"
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-4"
          />
        </div>

        {/* Mobile Number Field */}
        <div className="space-y-1">
          <label htmlFor="mobile" className="text font-bold text-gray-700">
            Mobile No.
          </label>
          <input
            id="mobile"
            type="text"
            name="mobile"
            value={user.mobile}
            placeholder="+91"
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-4"
          />
        </div>

        {/* Hostel Name Field */}
        <div className="space-y-1">
          <label htmlFor="hostelName" className="text font-bold text-gray-700">
            Hostel Name
          </label>
          <select
            id="hostelName"
            name="hostelName"
            value={user.hostelName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-4"
          >
            <option value="" disabled>
              Select Hostel
            </option>
            {[
              "NC-1",
              "NC-2",
              "NC-3",
              "NC-4",
              "NC-5",
              "NC-6",
              "Zakir-A",
              "Zakir-B",
              "Zakir-C",
              "Zakir-D",
            ].map((hostel) => (
              <option key={hostel} value={hostel}>
                {hostel}
              </option>
            ))}
          </select>
        </div>

        {/* Room Number Field */}
        <div className="space-y-1">
          <label htmlFor="roomNo" className="text font-bold text-gray-700">
            Room No.
          </label>
          <input
            id="roomNo"
            type="text"
            name="roomNo"
            value={user.roomNo}
            placeholder="516"
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-4"
          />
        </div>

        {/* Country Field */}
        <div className="space-y-1">
          <label htmlFor="country" className="text font-bold text-gray-700">
            Country/Region
          </label>
          <select
            id="country"
            name="country"
            value={user.country}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-4"
          >
            <option value="" disabled>
              Select Country
            </option>
            {["India", "USA", "Canada"].map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Save Changes Button */}
        <button
          type="button"
          onClick={handleSaveChanges}
          className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
