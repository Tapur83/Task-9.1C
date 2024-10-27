import React from "react";
import {Link, useNavigate} from "react-router-dom"
import './NavigationBar.css'
import { auth } from "./firebase"; 
import { signOut } from "firebase/auth";

function NavigationBar() {

  const navigator = useNavigate();

  const handleSignOut = async () => {
      try {
          await signOut(auth);
          navigator("/"); 
      } catch (error) {
          console.error("Error signing out:", error.message);
      }
  };


  return (
    <nav className="navbar-container">
      <div className="navbar-top">DEV@Deakin</div>
      <input 
        type="text"
        className="navbar-input"
        placeholder="Search"
      />
      <div className="link">
        <button className="button">About</button>
        <Link to="/login">
          <button className="button">Log In</button>
        </Link>
        <button className="post" onClick={handleSignOut}>Sign Out</button>
      </div>
    </nav>
  );
}

export default NavigationBar;



