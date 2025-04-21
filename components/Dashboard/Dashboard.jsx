// import React from "react";
"use client";
import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";

import Layout from "../Navbar/Navbar";
import Navbar from "../Navbar/Navbar";
import Dashboard_first_item from "../Dashboard_item/Dashboard_first_item";
import Dashboard_second_item from "../Dashboard_item/Dashboard_second_item";
import Dashboard_third_item from "../Dashboard_item/Dashboard_third_item";
// import { FaBell } from "react-icons/fa";
// import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaHeart } from "react-icons/fa";

// import "./Profile.css";

// import TrendingEvents from "./TrendingEvents";
// import Footer from "./Footer";

const Dashboard = () => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [activeTabSlicer, setActiveTabSlicer] = useState("unread");
  //   const messages = activeTabSlicer === "unread" ? unreadMessages : readMessages;
  const [activeSection, setActiveSection] = useState("Profile");
  const [parentSection, setParentSection] = useState(null);

  //   const [data, setData] = useState(accordian);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const tabs = ["Booked Event", "Whishlist", "Previous Event"];
  const [activeTab, setActiveTab] = useState("Booked Event");
  const [visibleTickets, setVisibleTickets] = useState(2);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showChatBox, setShowChatBox] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSectionClick_message = (section) => {
    if (section === "Message") {
      setShowMessage(!showMessage); // Toggle message visibility
    } else {
      setActiveSection(section);
      setShowMessage(false); // Hide message when switching to another section
    }
  };

  const events = [1, 2, 3, 4, 5];
  const [date, setDate] = useState(new Date());

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (section === "Address Book") {
      setParentSection("Address Book");
    } else {
      setParentSection(null);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Profile":
        return (
          <div className="profile_description">
            <Dashboard_first_item />
            <Dashboard_second_item />
            <Dashboard_third_item />
          </div>
        );
      case "My Orders":
        return <div className="profile_information"></div>;
      case "Whishlist":
        return <div className="calendarEvents"></div>;
      case "Address Book":
        return <div className="profile_information"></div>;

      case "Support":
        return <div className="profile_information"></div>;
      case "Message":
        return <></>;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="accountsas">
        {/* <div className="hamburger-icon" onClick={toggleSidebar}>
          {sidebarOpen ? "✖" : "☰"}
        </div> */}
        <div className="accountss_bottom">
          <div className="acc_name_grid">
            <div
              className={`accountss_bottom_left ${sidebarOpen ? "open" : ""}`}
            >
              <div className="accounts_bottom_left_left">
                <img src="/image1.png" className="profile_logo" alt="" />
                <div
                  className={`accountss_left_profile ${
                    activeSection === "Profile" ? "active" : ""
                  }`}
                  onClick={() => handleSectionClick("Profile")}
                >
                  <p>
                    <img
                      src={
                        activeSection === "Profile"
                          ? "/Group207.png"
                          : "/Group207_selected.png"
                      }
                      alt=""
                    />
                  </p>
                  {showMessage && (
                    <div className="message-box">Message Content Here</div>
                  )}
                </div>
                <div
                  className={`accountss_left_profile ${
                    activeSection === "My Orders" ? "active" : ""
                  }`}
                  onClick={() => handleSectionClick("My Orders")}
                >
                  <p>
                    <img
                      src={
                        activeSection === "My Orders"
                          ? "/Group208_selected.png"
                          : "/Group208.png"
                      }
                      alt=""
                    />
                  </p>
                </div>
                <div
                  className={`accountss_left_profile ${
                    activeSection === "Whishlist" ? "active" : ""
                  }`}
                  onClick={() => handleSectionClick("Whishlist")}
                >
                  <p>
                    <img
                      src={
                        activeSection === "Whishlist"
                          ? "/Group209_selected.png"
                          : "/Group209.png"
                      }
                      alt=""
                    />
                  </p>
                </div>
                <div
                  className={`accountss_left_profile ${
                    activeSection === "Address Book" ? "active" : ""
                  }`}
                  onClick={() => handleSectionClick("Address Book")}
                >
                  <p>
                    <img
                      src={
                        activeSection === "Address Book"
                          ? "/Group210_selected.png"
                          : "/Group210.png"
                      }
                      alt=""
                    />
                  </p>
                </div>
                <div
                  className={`accountss_left_profile ${
                    activeSection === "Support" ? "active" : ""
                  }`}
                  onClick={() => handleSectionClick("Support")}
                >
                  <p>
                    <img
                      src={
                        activeSection === "Support"
                          ? "/Group211_selected.png"
                          : "/Group211.png"
                      }
                      alt=""
                    />
                  </p>
                </div>
                <div
                  className={`accountss_left_profile ${
                    activeSection === "Message" ? "active" : ""
                  }`}
                  onClick={() => handleSectionClick_message("Message")}
                >
                  <p>
                    <img
                      src={
                        activeSection === "Message"
                          ? "/Group212_selected.png"
                          : "/Group212.png"
                      }
                      alt=""
                    />
                  </p>
                </div>
              </div>
              <div className="logout_profile">
                <img src="/material-symbols_logout.png" alt="" />
              </div>
            </div>
            {renderSection()}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
