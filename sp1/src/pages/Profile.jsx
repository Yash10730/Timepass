import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    hostelName: "",
    roomNo: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    console.log("Updated User Details:", user);
    alert("Changes saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-8 lg:px-16 py-8">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button className="text-black text-2xl">&larr;</button>
        <h1 className="text-center w-full text-xl font-bold">User Profile</h1>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center items-center mb-6">
        <div className="relative">
          <img
            src="https://avatar.iran.liara.run/public/boy" // Placeholder avatar
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full object-cover wrapped-image"
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

      {/* Form */}
      <form className="space-y-4">
        {/* Name */}
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

        {/* Mobile No */}
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

        {/* Hostel Name */}
        <div className="space-y-1">
          <label
            htmlFor="hostelName"
            className="text font-bold text-gray-700"
          >
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
            <option value="NC-1">NC-1</option>
            <option value="NC-2">NC-2</option>
            <option value="NC-3">NC-3</option>
            <option value="NC-4">NC-4</option>
            <option value="NC-5">NC-5</option>
            <option value="NC-6">NC-6</option>
            <option value="Zakir-A">Zakir-A</option>
            <option value="Zakir-B">Zakir-B</option>
            <option value="Zakir-C">Zakir-C</option>
            <option value="Zakir-D">Zakir-D</option>
          </select>
        </div>

        {/* Room No */}
        <div className="space-y-1">
          <label htmlFor="roomNo" className="text font-bold text-gray-700">
            Room No.
          </label>
          <input
            id="roomNo"
            type="text"
            name="roomNo"
            value={user.roomNo}
            onChange={handleInputChange}
            placeholder="516"
            className="w-full border border-gray-300 rounded-lg p-4"
          />
        </div>

        {/* Country/Region */}
        <div className="space-y-1">
          <label
            htmlFor="country"
            className="text font-bold text-gray-700"
          >
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
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
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
