import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      {/* <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was generated By{" "}
        
        . Quickly use below links to navigate through all pages.
      </p> */}
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
            LandingPage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/blogdetails" style={{ color: "#87CEFA", textDecoration: "none" }}>
            BlogDetails
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/contactus" style={{ color: "#87CEFA", textDecoration: "none" }}>
            ContactUs
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/bloggerdetails" style={{ color: "#87CEFA", textDecoration: "none" }}>
            BloggerDetails
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
