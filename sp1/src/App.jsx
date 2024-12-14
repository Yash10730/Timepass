import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Otp from "./pages/Otp.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Minimenu from "./components/Minimenu.jsx";
import Cart from "./pages/Cart.jsx";

const App = () => {
  const foodItems = [
    {
      name: "Chicken Rice",
      type: "North Indian",
      discount: "40%",
      time: "30-35 min",
      image: "https://via.placeholder.com/220x140", // Replace with actual image URL
      priceOff: 80,
    },
    {
      name: "Paneer Butter Masala",
      type: "North Indian",
      discount: "30%",
      time: "20-25 min",
      image: "https://via.placeholder.com/220x140",
      priceOff: 50,
    },
    {
      name: "Veg Biryani",
      type: "South Indian",
      discount: "20%",
      time: "25-30 min",
      image: "https://via.placeholder.com/220x140",
      priceOff: 30,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set Home as default */}
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurant-menu" element={<RestaurantMenu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/minimenu" element={<Minimenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;