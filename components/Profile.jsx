// import React from "react";
"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";

import "./Profile.css";
import img1 from "../public/Group207.png";
import img2 from "../public/Group208.png";
import img3 from "../public/Group209.png";
import img4 from "../public/Group210.png";
import img5 from "../public/Group211.png";
import img6 from "../public/material-symbols_logout.png";
import TrendingEvents from "./TrendingEvents";
import Footer from "./Footer";

const Profile = () => {
  const ticketData = [
    {
      ticketId: "#20D41ACOD",
      amountPaid: "₹FREE",
      eventLocation: "HYDERABAD",
      eventName: "Tech Summit 2025",
      backgroundImage: "/Subtract.png",
      stampImage: "/stamp.png",
      barCodeImage: "/barcode.png",
    },
    {
      ticketId: "#35A57DB2",
      amountPaid: "₹500",
      eventLocation: "BANGALORE",
      eventName: "AI Expo 2025",
      backgroundImage: "/Subtract.png",
      stampImage: "/stamp.png",
      barCodeImage: "/barcode.png",
    },
    {
      ticketId: "#35A57DB2",
      amountPaid: "₹500",
      eventLocation: "BANGALORE",
      eventName: "AI Expo 2025",
      backgroundImage: "/Subtract.png",
      stampImage: "/stamp.png",
      barCodeImage: "/barcode.png",
    },
    // Add more tickets here
  ];

  //   const { cartItem, addTocart, removeFromCart, removeAllFromCart, food_list } =
  // useContext(StoreContext);
  const [activeSection, setActiveSection] = useState("Profile");
  const [parentSection, setParentSection] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  //   const [data, setData] = useState(accordian);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const tabs = ["Booked events", "Wishlist", "Previous events"];
  const [activeTab, setActiveTab] = useState("Booked events");
  const [visibleTickets, setVisibleTickets] = useState(2);
  const events = [1, 2, 3, 4, 5];
  const handleViewMore = () => {
    setVisibleTickets((prev) => prev + 2); // Show two more tickets on click
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (section === "Address Book" || section === "Edit Address") {
      setParentSection("Address Book");
    } else {
      setParentSection(null);
    }
  };
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setActiveSection("Order Details");
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null);
    setActiveSection("My Orders");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAddresses([...addresses, newAddress]);
    setNewAddress("");
    handleSectionClick("Address Book");
  };
  const handleDelete = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Profile":
        return (
          //   <div className="accoutss_bottom_right">
          //     <div className="accountss_right_top">
          //       <p>Profile</p>
          //     </div>
          //     <div className="accountss_right_med">
          //       <div className="accountss_right_med_img">
          //         {/* <img src={img1} alt="" /> */}
          //       </div>
          //       <div className="acountss_right_med_text">
          //         <div className="acc_name">
          //           <p>Full Name</p>
          //           <span>: Akash Shukla</span>
          //         </div>
          //         <div className="acc_number">
          //           <p>Phone Number</p>
          //           <span>: 1234567890</span>
          //         </div>
          //       </div>
          //     </div>
          //     <div className="acountss_right_bottom_form">
          //       <div className="accountss_bot_name">
          //         <input type="text" placeholder="Full Name" />
          //         <input type="text" placeholder="Email" />
          //       </div>
          //       <div className="accountss_bot_number">
          //         <input type="number" placeholder="Mobile Number" />
          //       </div>
          //       <div className="bitnn">
          //         <button>Update Profile</button>
          //       </div>
          //     </div>
          //   </div>
          <div className="profile_description">
            <div className="profile_description_top">
              <div className="profile_description_top_top">
                <img src="/Rectangle 165.png" alt="" />
                <div className="profile_description_logo">
                  <img src="/Ellipse 32.png" alt="" />
                </div>
              </div>
              <div className="profile_description_top_bot">
                <p>
                  Durga Prasad <span>|</span> Male <span>|</span> 22{" "}
                  <span>|</span> Hyderabad
                </p>
              </div>
            </div>
            <div className="profile_description_mid">
              <div className="profile_description_mid_top">
                <div className="slicer-container">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`slicer-tab ${
                        activeTab === tab ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <div className="profile_description_mid_bot">
                {ticketData.slice(0, visibleTickets).map((ticket, index) => (
                  <div key={index} className="ticketCard">
                    <div className="leftSection">
                      <Image
                        src={ticket.backgroundImage}
                        alt={`Background of the ticket with ${ticket.eventName}`}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="ticketId">
                        Ticket ID : {ticket.ticketId}
                      </div>
                      <div className="amountPaid">
                        Amount Paid {ticket.amountPaid}
                      </div>
                    </div>

                    <div className="rightSection">
                      <div className="right_section_left">
                        <div className="stampContainer">
                          <Image
                            className="stampImage"
                            src={ticket.stampImage}
                            alt="Paid Stamp"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <div className="eventInfo">
                          Event at {ticket.eventLocation}
                          <br />
                          {ticket.eventName}
                        </div>
                      </div>
                      <div className="right_section_right">
                        <div className="barCodeContainer">
                          <Image
                            src={ticket.barCodeImage}
                            alt="Paid Stamp"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {visibleTickets < ticketData.length && (
                <div className="view-more-button-container">
                  <button onClick={() => handleSectionClick("Whishlist")}>
                    View More
                  </button>
                </div>
              )}
            </div>
            <div className="profile_description_bot">
              {/* <TrendingEvents /> */}
              <div className="featured-container">
                <h3 className="featured-heading">Featured Events</h3>
                <div className="featured-scroll-wrapper">
                  <div className="featured-scroll">
                    {events.map((event, index) => (
                      <div className="event-card" key={index}>
                        <img
                          src="/Event_image.png" // Replace with actual image
                          alt="Event"
                          className="event-image"
                        />
                        <div className="event-overlay">
                          <h2>Bring your vision to life</h2>
                          <p>
                            create and manage extraordinary events effortlessly!
                          </p>
                          <button className="event-btn">Register now</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "My Orders":
        return (
          <div className="accoutss_bottom_right">
            <div className="accountss_right_top myOrders">
              <p>My Orders</p>
            </div>
            {/* <MyOrder /> */}
            {/* {selectedOrder ? (
              <OrderDetails order={selectedOrder} onBack={handleBackToOrders} />
            ) : (
              <MyOrder onOrderClick={handleOrderClick} />
            )} */}
          </div>
        );
      case "Whishlist":
        return (
          <div className="wishlist">
            <div className="wishlist_top">
              <p>My Wishlist</p>
            </div>
            <div className="wishlist_bottom">
              {/* {food_list.map((item, index) => {
                if (cartItem[item._id] > 0) {
                  return (
                    <div className="wishlist_item1">
                      <div className="slide" id="1">
                        <div className="user_info">
                          <img src={img2} alt="" />
                          <p className="para1">24k solid gold, Diamond</p>
                          <i className="fa-regular fa-heart xyz"></i>
                        </div>
                      </div>
                      <div className="user_content">
                        <h3>Diamond Solitaire Ring</h3>
                        <p>
                          Elegantly crafted Diamond Solitaire Ring that exudes
                          timeless sophistication
                        </p>
                        <div className="price">
                          <p>₹15,499</p>
                          {!cartItem[1] ? (
                            <button onClick={() => addTocart(1)}>
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
              })} */}
            </div>
          </div>
        );
      case "Address Book":
        return (
          <div className="accoutss_bottom_right">
            <div className="accountss_bot_right_top">
              <p>Address Book</p>
            </div>
            <div className="accountss_bot_right_med">
              <button onClick={() => handleSectionClick("Edit Address")}>
                Add New Address
              </button>
            </div>
            <div className="accountss_bot_right_bot">
              {addresses.length > 0 ? (
                <ul>
                  {addresses.map((address, index) => (
                    <li key={index}>
                      <div className="accountss_bot_right_slide">
                        <div className="accounts_bot_right_slide_left">
                          <div className="accountss_bot_right_slide_name">
                            <p>{address}</p>
                          </div>
                          <div className="accountss_bot_right_slide_description">
                            <p>
                              Shivam Manjhi <br />
                              Indore, 23, Mahatma Gandhi Road, Near Rajwada
                              Palace
                            </p>
                            <p>
                              Phone Number: <span>+91-1234567890</span>
                            </p>
                          </div>
                        </div>
                        <div className="accounts_bot_right_slide_right">
                          <div className="accounts_bot_right_slide_right_top">
                            <p>Default</p>
                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="accounts_bot_right_slide_right_bot">
                            <p>
                              <i
                                className="fa-solid fa-pencil"
                                onClick={() =>
                                  handleSectionClick("Edit Address")
                                }
                              ></i>{" "}
                              Edit <span>|</span>{" "}
                              <i
                                className="fa-solid fa-trash"
                                onClick={() => handleDelete(index)}
                              ></i>{" "}
                              Delete
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="noAdd">No addresses added yet.</p>
              )}
            </div>
          </div>
        );
      case "Edit Address":
        return (
          <div className="accoutss_bottom_right">
            <div className="accountss_bot_right_top">
              <p>Address Book</p>
            </div>
            <div className="accountss_bot_right_med">
              <p onClick={() => handleSectionClick("Address Book")}>
                <i className="fa-solid fa-angle-left"></i> Edit Address
              </p>
            </div>
            <div className="accountss_bot_right_bot_xyz">
              <form onSubmit={handleSubmit}>
                <div className="accountss_bot_right_bot_form">
                  <div className="form_name">
                    <p>Full Name</p>
                    <input
                      type="text"
                      placeholder="Enter Your Full Name"
                      value={newAddress}
                      onChange={(e) => setNewAddress(e.target.value)}
                    />
                  </div>
                  <div className="form_name">
                    <p>State</p>
                    <input type="text" />
                  </div>
                  <div className="form_name">
                    <p>City</p>
                    <input type="text" />
                  </div>
                  <div className="form_name">
                    <p>Street Address</p>
                    <input
                      type="text"
                      placeholder="Enter Your Street Address"
                    />
                  </div>
                  <div className="form_name">
                    <p>Zip/Postal Code</p>
                    <input type="number" />
                  </div>
                  <div className="form_name">
                    <p>Phone Number</p>
                    <input type="number" />
                  </div>
                  <div className="form_name">
                    <p>Email Address</p>
                    <input type="email" />
                  </div>
                </div>
                <button type="submit">Update Address</button>
              </form>
            </div>
          </div>
        );
      case "Support":
        return (
          <div className="accoutss_bottom_right">
            <div className="accountss_right_top support">
              <p>Suppport</p>
            </div>
            <div className="cart_med support_med">
              <div className="address support_address">
                <div className="address1">
                  <p>Shop Address</p>
                </div>
                <p className="fulladd">
                  Shivam Manjhi <br /> Indore, 23, Mahatma Gandhi Road, Near
                  Rajwada Place...
                </p>
                <div className="cart_num">
                  <p>Phone Number:</p>
                  <p>123456123</p>
                </div>
              </div>
              <div className="add_button support_button">
                <button>Request Call</button>
              </div>
            </div>
            <div className="accounts_right_support_bot">
              <p>Frequently Asked Question</p>
              {/* <div className="accounts_accoridans">
                {data.map((item, index) => {
                  return <Accordian key={item.id} {...item} />;
                })}
              </div> */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="accountsas">
        <div className="accountss_bottom">
          <div className="acc_name_grid">
            <div className="accountss_bottom_left">
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
      <Footer />
    </>
  );
};

export default Profile;
