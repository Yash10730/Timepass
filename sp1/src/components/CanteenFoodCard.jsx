import React from "react";

const CanteenFoodCard = ({ name, type, discount, time, image, priceOff }) => {
  return (
    <div
      style={{
        border: "2px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        margin: "10px auto", // Center the card
        height: "270px",
      }}
      className="food-card"
    >
      <img
        src="https://imgs.search.brave.com/4fOpRDRw4fvIC8d3r99iDW-IBR4jCXMp4Vir5fE8QMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MzgyNjg5NC9waG90/by92YXJpb3VzLWtp/bmRzLW9mLXZlZ2Fu/LXByb3RlaW4tc291/cmNlcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NC0yZUZC/Ml9pSU5tVlFaTzJM/WVFpSGpLMUZsa3Bs/WlYwWVVneGJ1QXJI/OD0"
        alt={name}
        style={{
          borderRadius: "8px",
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
      />
      <div style={{ marginTop: "10px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>{name}</h3>
        <p style={{ fontSize: "14px", color: "#777", margin: 0 }}>{type}</p>
        <p
          style={{
            fontSize: "14px",
            color: "#000",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          {discount} {priceOff}
        </p>
        <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>{time}</p>
      </div>
    </div>
  );
};

export default CanteenFoodCard;
