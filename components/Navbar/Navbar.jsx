// components/Navbar.js
import React, { useState } from "react";
import styled from "styled-components";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faTv,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Switch from "../Switch";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="search-container">
        <input type="text" placeholder="Search here" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faTv} />
        <button className="create-button">
          <FontAwesomeIcon icon={faPlus} /> Create event
        </button>
        <Switch />
      </div>
    </div>
  );
};

export default Navbar;
