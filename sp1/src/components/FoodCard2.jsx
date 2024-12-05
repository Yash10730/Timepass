import React from "react";

const FoodCard2 = ({ name, type, discount, time, image, priceOff }) => {
  return (
    <div
      style={{
        border: "2px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        width: "300px",
        height: "150px",
        backgroundColor: "#fff",
        margin: "5px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        display: "flex", // Flex container
        justifyContent: "space-between", // Space between text and image
        alignItems: "center", // Center items vertically
      }}
    >
      {/* Left Text Section */}
      <div
        style={{
          flex: 10, // Take all available space on the left
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Align text to the top
        }}
      >
        <h3
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            margin: 5, // Remove margin
          }}
        >
          Hello food
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#777",
            margin: 5, // Minimal margin between text
          }}
        >
          food2
        </p>
      </div>

      {/* Right Image Section */}
      <img
        src="https://imgs.search.brave.com/4fOpRDRw4fvIC8d3r99iDW-IBR4jCXMp4Vir5fE8QMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MzgyNjg5NC9waG90/by92YXJpb3VzLWtp/bmRzLW9mLXZlZ2Fu/LXByb3RlaW4tc291/cmNlcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NC0yZUZC/Ml9pSU5tVlFaTzJM/WVFpSGpLMUZsa3Bs/WlYwWVVneGJ1QXJI/OD0"
        alt={name}
        style={{
          width: "40%", // Limit the image width
          height: "100%", // Fill the card's height
          borderRadius: "8px",
          objectFit: "cover", // Ensure the image fits properly
          margin: "2px",
        }}
      />
    </div>
  );
};

export default FoodCard2;
