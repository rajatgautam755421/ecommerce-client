import React from "react";
import "./Home.css";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Image__main__home">
      <div className="image-title">
        <h3>Student Management System(ABC school)</h3>
      </div>
      <Link to="/class">
        <button
          style={{ position: "relative", marginTop: "80px" }}
          className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          View Classes
        </button>
      </Link>
    </div>
  );
};

export default Home;
