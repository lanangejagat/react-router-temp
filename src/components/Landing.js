import React from 'react';
import '../App.css';
import { FaTemperatureLow } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <div className="icontemp">
      <Link to="/temp" >
      <FaTemperatureLow size="13em" />
      </Link>
      <Link to="/temp" >
      <FaTemperatureLow size="13em" />
      </Link>
      
     
    </div>
  );
}

export default Landing;