import React, { useState } from "react";
import FoodCard from "../components/Foodcard.jsx";
import FoodCard2 from "../components/FoodCard2.jsx";
import Navbar from "../components/Navbar.jsx";
import FixedFoodCard from "../components/FixedFoodCard.jsx";
import CanteenFoodCard from "../components/CanteenFoodCard.jsx";

const FoodOrderPage = () => {
  // Dummy food items
  const foodItems = [
    {
      id: 1,
      name: "Chicken Rice",
      category: "North Indian",
      discount: "40% OFF",
      time: "30-35 min",
      distance: "1.2 km",
      image: "https://imgs.search.brave.com/4fOpRDRw4fvIC8d3r99iDW-IBR4jCXMp4Vir5fE8QMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MzgyNjg5NC9waG90/by92YXJpb3VzLWtp/bmRzLW9mLXZlZ2Fu/LXByb3RlaW4tc291/cmNlcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NC0yZUZC/Ml9pSU5tVlFaTzJM/WVFpSGpLMUZsa3Bs/WlYwWVVneGJ1QXJI/OD0",
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      category: "North Indian",
      discount: "30% OFF",
      time: "20-25 min",
      distance: "2.0 km",
      image: "https://imgs.search.brave.com/4fOpRDRw4fvIC8d3r99iDW-IBR4jCXMp4Vir5fE8QMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MzgyNjg5NC9waG90/by92YXJpb3VzLWtp/bmRzLW9mLXZlZ2Fu/LXByb3RlaW4tc291/cmNlcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NC0yZUZC/Ml9pSU5tVlFaTzJM/WVFpSGpLMUZsa3Bs/WlYwWVVneGJ1QXJI/OD0",
    },
    {
      id: 3,
      name: "Veg Biryani",
      category: "South Indian",
      discount: "20% OFF",
      time: "25-30 min",
      distance: "1.8 km",
      image: "https://imgs.search.brave.com/4fOpRDRw4fvIC8d3r99iDW-IBR4jCXMp4Vir5fE8QMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MzgyNjg5NC9waG90/by92YXJpb3VzLWtp/bmRzLW9mLXZlZ2Fu/LXByb3RlaW4tc291/cmNlcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NC0yZUZC/Ml9pSU5tVlFaTzJM/WVFpSGpLMUZsa3Bs/WlYwWVVneGJ1QXJI/OD0",
    },
    {
      id: 4,
      name: "Veg Biryani",
      category: "South Indian",
      discount: "20% OFF",
      time: "25-30 min",
      distance: "1.8 km",
      image: "https://imgs.search.brave.com/4fOpRDRw4fvIC8d3r99iDW-IBR4jCXMp4Vir5fE8QMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MzgyNjg5NC9waG90/by92YXJpb3VzLWtp/bmRzLW9mLXZlZ2Fu/LXByb3RlaW4tc291/cmNlcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NC0yZUZC/Ml9pSU5tVlFaTzJM/WVFpSGpLMUZsa3Bs/WlYwWVVneGJ1QXJI/OD0",
    },
    {
      id: 5,
      name: "Veg Biryani",
      category: "South Indian",
      discount: "20% OFF",
      time: "25-30 min",
      distance: "1.8 km",
      image: "https://imgs.search.brave.com/4fOpRDRw4fvIC8d3r99iDW-IBR4jCXMp4Vir5fE8QMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MzgyNjg5NC9waG90/by92YXJpb3VzLWtp/bmRzLW9mLXZlZ2Fu/LXByb3RlaW4tc291/cmNlcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NC0yZUZC/Ml9pSU5tVlFaTzJM/WVFpSGpLMUZsa3Bs/WlYwWVVneGJ1QXJI/OD0",
    },
    {
      id: 6,
      name: "Veg Biryani",
      category: "South Indian",
      discount: "20% OFF",
      time: "25-30 min",
      distance: "1.8 km",
      image: "https://imgs.search.brave.com/4fOpRDRw4fvIC8d3r99iDW-IBR4jCXMp4Vir5fE8QMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MzgyNjg5NC9waG90/by92YXJpb3VzLWtp/bmRzLW9mLXZlZ2Fu/LXByb3RlaW4tc291/cmNlcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NC0yZUZC/Ml9pSU5tVlFaTzJM/WVFpSGpLMUZsa3Bs/WlYwWVVneGJ1QXJI/OD0",
    },
  ];

  const [recommended, setRecommended] = useState(true);

  // Filtered items based on the active tab
  const filteredItems = recommended
    ? foodItems.slice(0, 6) // Dummy logic for "Recommended"
    : foodItems;

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <Navbar className="fixed bottom-0 left-0 w-full bg-gray-800 text-white flex justify-around py-4 shadow-md z-10"></Navbar>
      {/* Search Bar */}
      <div className="bg-red-500 text-white px-4 py-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">Hostel</p>
            <p>NC-4 Tower</p>
          </div>
        </div>
        <div className="flex items-center bg-white rounded-full p-2 mt-3">
          <input
            type="text"
            placeholder="Search for 'Pizza'"
            className="flex-grow outline-none px-2"
          />
          <img
            className="w-5"
            src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
            alt=""
          />
          <button className="text-red-500 px-2">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Promotions */}
      <div
        className="flex space-x-20 overflow-x-auto p-4"
        style={{
          gap: "15px",
          whiteSpace: "nowrap", // Prevent wrapping
          scrollbarWidth: "none", // Thin scrollbar
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
        }}
      >
        <div
          className="flex-shrink-0"
          style={{
            minWidth: "220px", // Set a minimum width for each card
            maxWidth: "220px", // Ensure it doesn't expand
          }}
        >
          <FoodCard2 />
        </div>
        <div
          className="flex-shrink-0"
          style={{
            minWidth: "220px", // Set a minimum width for each card
            maxWidth: "220px", // Ensure it doesn't expand
          }}
        >
          <FoodCard2 />
        </div>
        <div
          className="flex-shrink-0"
          style={{
            minWidth: "220px", // Set a minimum width for each card
            maxWidth: "220px", // Ensure it doesn't expand
          }}
        >
          <FoodCard2 />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 flex justify-around mt-4">
        <button
          onClick={() => setRecommended(true)}
          className={`font-semibold ${
            recommended ? "border-b-2 border-red-500" : "text-gray-500"
          }`}
        >
          Recommended
        </button>
        <button
          onClick={() => setRecommended(false)}
          className={`font-semibold ${
            !recommended ? "border-b-2 border-red-500" : "text-gray-500"
          }`}
        >
          Favourites
        </button>
      </div>

      {/* Food Items */}
      <div
        className="p-4 space-y-4 overflow-x-auto"
        style={{
          whiteSpace: "nowrap", // Prevent wrapping of child elements horizontally
          scrollbarWidth: "none", // Optional: Thinner scrollbar
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
        }}
      >
        {/* First Layer */}
        <div className="flex space-x-4">
          {filteredItems
            .slice(0, Math.ceil(filteredItems.length / 2))
            .map((item) => (
              <div
                key={item.id}
                className="min-w-[220px]"
                style={{
                  flex: "0 0 auto", // Ensures cards don’t shrink or grow
                }}
              >
                <FoodCard
                  name={item.name}
                  type={item.category}
                  discount={item.discount}
                  time={item.time}
                  image={item.image}
                  priceOff={item.priceOff}
                />
              </div>
            ))}
        </div>

        {/* Second Layer */}
        <div className="flex space-x-4">
          {filteredItems
            .slice(Math.ceil(filteredItems.length / 2))
            .map((item) => (
              <div
                key={item.id}
                className="min-w-[220px]"
                style={{
                  flex: "0 0 auto", // Ensures cards don’t shrink or grow
                }}
              >
                <FoodCard
                  name={item.name}
                  type={item.category}
                  discount={item.discount}
                  time={item.time}
                  image={item.image}
                  priceOff={item.priceOff}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex items-center justify-center mb-1">
        {/* Line before the text */}
        <div className="border-t border-gray-300 w-full"></div>

        {/* Text in the center */}
        <div className="px-4 bg-gray-100 text-gray-500 whitespace-nowrap text-center">
          WHAT'S ON YOUR MIND
        </div>

        {/* Line after the text */}
        <div className="border-t border-gray-300 w-full"></div>
      </div>

      <div
        className="p-4 space-y-0 overflow-x-auto"
        style={{
          whiteSpace: "nowrap", // Prevent wrapping of child elements horizontally
          scrollbarWidth: "none", // Optional: Thinner scrollbar
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
        }}
      >
        <FixedFoodCard></FixedFoodCard>
        <FixedFoodCard></FixedFoodCard>
        <div className="relative flex items-center justify-center mb-1">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="absolute bg-gray-100 px-4 text-gray-500">
            All Canteens
          </span>
        </div>
      </div>
      <div
        className="p-4 space-y-4 overflow-x-auto"
        style={{
          whiteSpace: "nowrap", // Prevent wrapping of child elements horizontally
          scrollbarWidth: "none", // Optional: Thinner scrollbar
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
        }}
      >
        {/* First Layer */}
        <div>
          {filteredItems
            .slice(0, Math.ceil(filteredItems.length / 2))
            .map((item) => (
              <div
                key={item.id}
                className="min-w-[220px]"
                style={{
                  flex: "0 0 auto", // Ensures cards don’t shrink or grow
                }}
              >
                <CanteenFoodCard
                  name={item.name}
                  type={item.category}
                  discount={item.discount}
                  time={item.time}
                  image={item.image}
                  priceOff={item.priceOff}
                />
              </div>
            ))}
        </div>

        {/* Second Layer */}
        <div>
          {filteredItems
            .slice(Math.ceil(filteredItems.length / 2))
            .map((item) => (
              <div
                key={item.id}
                className="min-w-[220px]"
                style={{
                  flex: "0 0 auto", // Ensures cards don’t shrink or grow
                }}
              >
                <CanteenFoodCard
                  name={item.name}
                  type={item.category}
                  discount={item.discount}
                  time={item.time}
                  image={item.image}
                  priceOff={item.priceOff}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FoodOrderPage;
