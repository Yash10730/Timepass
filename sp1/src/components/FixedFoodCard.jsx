import React from "react";

const FixedFoodCard = () => {
  return (
    <>
      <div
        style={{
          // border: "2px solid #ddd",
          // borderRadius: "8px",
          padding: "5px",
          width: "190px",
          height: "150px",
          margin: 5,
          // backgroundColor: "#fff",
          // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          display: "flex", // Flex container
          justifyContent: "space-between", // Space between text and image
          alignItems: "center", // Center items vertically
        }}
      >
        {/* Left Text Section */}
        {/* <div
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
          Hello {name}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#777",
            margin: "4px 0", // Minimal margin between text
          }}
        >
          {type}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#000",
            fontWeight: "bold",
            margin: "4px 0",
          }}
        >
          {discount} {priceOff}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#555",
            margin: "4px 4px",
          }}
        >
          {time}
        </p>
      </div> */}

        {/* Right Image Section */}
        <img
          src="https://imgs.search.brave.com/d3_LMFRzcGzJCnC-n10GUjxxmoHJNfLAvrSHocMV25c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIvQ2hl/ZXNlLVBpenphLVBO/Ry1GcmVlLUZpbGUt/RG93bmxvYWQucG5n"
          alt={name}
          style={{
            width: "80%", // Limit the image width
            height: "100%", // Fill the card's height
            borderRadius: "8px",
            objectFit: "cover", // Ensure the image fits properly
            margin: 40,
            marginLeft: 0,
          }}
        />
        <img
          src="https://imgs.search.brave.com/d3_LMFRzcGzJCnC-n10GUjxxmoHJNfLAvrSHocMV25c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIvQ2hl/ZXNlLVBpenphLVBO/Ry1GcmVlLUZpbGUt/RG93bmxvYWQucG5n"
          alt={name}
          style={{
            width: "80%", // Limit the image width
            height: "100%", // Fill the card's height
            borderRadius: "8px",
            objectFit: "cover", // Ensure the image fits properly
            margin: 50,
          }}
        />
        <img
          src="https://imgs.search.brave.com/d3_LMFRzcGzJCnC-n10GUjxxmoHJNfLAvrSHocMV25c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIvQ2hl/ZXNlLVBpenphLVBO/Ry1GcmVlLUZpbGUt/RG93bmxvYWQucG5n"
          alt={name}
          style={{
            width: "80%", // Limit the image width
            height: "100%", // Fill the card's height
            borderRadius: "8px",
            objectFit: "cover", // Ensure the image fits properly
            margin: 50,
          }}
        />
        <img
          src="https://imgs.search.brave.com/d3_LMFRzcGzJCnC-n10GUjxxmoHJNfLAvrSHocMV25c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIvQ2hl/ZXNlLVBpenphLVBO/Ry1GcmVlLUZpbGUt/RG93bmxvYWQucG5n"
          alt={name}
          style={{
            width: "80%", // Limit the image width
            height: "100%", // Fill the card's height
            borderRadius: "8px",
            objectFit: "cover", // Ensure the image fits properly
            margin: 50,
          }}
        />
      </div>
    </>
  );
};

export default FixedFoodCard;
