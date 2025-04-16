// import React from "react";
"use client";
import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
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
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    eventName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can connect this to a backend API or service
  };
  const unreadMessages = [
    {
      id: 1,
      title: "2 days left for registration!!",
      text: "Join the english club to learn about the infinite world of vocabularies you can explore wi...",
    },
    {
      id: 2,
      title: "2 days left for registration!!",
      text: "Join the english club to learn about the infinite world of vocabularies you can explore wi...",
    },
    {
      id: 3,
      title: "2 days left for registration!!",
      text: "Join the english club to learn about the infinite world of vocabularies you can explore wi...",
    },
  ];
  const readMessages = [
    {
      id: 4,
      title: "Thanks for joining!",
      text: "We’re glad to have you in our English club. Stay tuned for upcoming activities.",
    },
    {
      id: 5,
      title: "Orientation Completed",
      text: "Here's a recap of the session and materials you might need going forward.",
    },
  ];
  const events_upcoming = [
    {
      date: "18",
      month: "April",
      title: "IIT Hyderabad",
      subtitle: "English vocabulary event",
      desc: "Join the english club to learn about the infinite world of vocnite worl...",
    },
    {
      date: "27",
      month: "April",
      title: "IIT Hyderabad",
      subtitle: "English vocabulary event",
      desc: "Join the english club to learn about the infinite world of vocnite worl...",
    },
    {
      date: "18",
      month: "April",
      title: "IIT Hyderabad",
      subtitle: "English vocabulary event",
      desc: "Join the english club to learn about the infinite world of vocnite worl...",
    },
  ];
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
  const [activeTabSlicer, setActiveTabSlicer] = useState("unread");
  const messages = activeTabSlicer === "unread" ? unreadMessages : readMessages;
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
  const [date, setDate] = useState(new Date());
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
          // <div className="accoutss_bottom_right">
          //   <div className="accountss_right_top myOrders">
          //     <p>My Orders</p>
          //   </div>
          //   {/* <MyOrder /> */}
          //   {/* {selectedOrder ? (
          //     <OrderDetails order={selectedOrder} onBack={handleBackToOrders} />
          //   ) : (
          //     <MyOrder onOrderClick={handleOrderClick} />
          //   )} */}
          // </div>
          <div className="profile_information">
            <div className="profile_information_top">
              <img src="/Rectangle 165.png" alt="" />
              <div className="profile_information_top_button">
                <button>Change Cover</button>
              </div>
            </div>
            <div className="profile_information_bot">
              <div className="profile-card">
                <div className="profile-img-wrapper">
                  <img
                    src="/Ellipse 32.png"
                    alt="Profile"
                    className="profile-img"
                  />
                  <div className="camera-icon">📷</div>
                </div>

                <div className="profile-info">
                  <h3>Durga Prasad</h3>
                  <p>IIT Hyderabad</p>
                </div>
                <span className="border_bottom"></span>

                <div className="countdown">
                  <p>Next event in:</p>
                  <div className="timer">
                    <div>
                      <h2>04</h2>
                      <span>days</span>
                    </div>
                    <div>
                      <h2>:12</h2>
                      <span>hours</span>
                    </div>
                    <div>
                      <h2>:6</h2>
                      <span>min</span>
                    </div>
                  </div>
                </div>

                <div className="stats">
                  <div className="stat-row">
                    <span>Events registered</span>
                    <span className="stat-value">05</span>
                  </div>
                  <div className="stat-row">
                    <span>Events attended</span>
                    <span className="stat-value">03</span>
                  </div>
                  <div className="stat-row">
                    <span>Wishlisted</span>
                    <span className="stat-value">09</span>
                  </div>
                </div>
              </div>
              <div className="profile_card_information">
                <div className="profile_card_information_personal">
                  <div className="profile_card_information_personal_top">
                    <h1>Personal Information</h1>
                    <p>Edit</p>
                  </div>
                  <div className="profile_card_information_personal_bot">
                    <form className="user-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label>
                            First name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Durgaprasad" />
                        </div>
                        <div className="form-group">
                          <label>
                            Last name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Padakanty" />
                        </div>
                        <div className="form-group">
                          <label>
                            Age <span className="required">*</span>
                          </label>
                          <input type="number" placeholder="22" />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>
                            Email address (Entered while login){" "}
                            <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="Durgaprasad1234@gmail.com"
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            Phone no. <span className="required">*</span>
                          </label>
                          <input type="tel" placeholder="9392837553" />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>
                            City name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Hyderabad" />
                        </div>
                        <div className="form-group">
                          <label>
                            Pincode <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="500068" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="profile_card_information_college">
                  <div className="profile_card_information_college_top">
                    <h1>College Info</h1>
                    <p>Edit</p>
                  </div>
                  <div className="profile_card_information_college_bot">
                    <form action="">
                      <div className="formSection">
                        <div className="formSection_top">
                          <div className="fieldGroup">
                            <label className="label" htmlFor="university">
                              University name
                            </label>
                            <input
                              className="input"
                              type="text"
                              id="university"
                            />
                          </div>
                        </div>

                        <div className="formSection_bot">
                          <div className="fieldGroup">
                            <label className="label" htmlFor="course">
                              Course name
                            </label>
                            <input className="input" type="text" id="course" />
                          </div>

                          <div className="fieldGroup">
                            <label className="label" htmlFor="year">
                              Year
                            </label>
                            <input className="input" type="text" id="year" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Whishlist":
        return (
          <div className="calendarEvents">
            <div className="calendarSection">
              <h3>Your calendar</h3>
              <div className="calendarBox">
                <Calendar
                  onChange={setDate}
                  value={date}
                  tileClassName={({ date }) => {
                    const day = date.getDate();
                    return day === 18 || day === 27 ? "dotDay" : null;
                  }}
                />
              </div>
            </div>

            <div className="eventsSection">
              <h3>Upcoming events</h3>
              {events_upcoming.map((event, index) => (
                <div className="eventCard" key={index}>
                  <div className="eventDateBox">
                    <span className="eventMonth">{event.month}</span>
                    <span className="eventDate">{event.date}</span>
                  </div>
                  <div className="eventContent">
                    <h4>{event.title}</h4>
                    <p className="eventSubtitle">{event.subtitle}</p>
                    <p className="eventDesc">
                      {event.desc} <span className="eventView">view</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Address Book":
        return (
          <div className="profile_information">
            <div className="profile_information_top">
              <img src="/Rectangle 165.png" alt="" />
              <div className="profile_information_top_button">
                <button>Change Cover</button>
              </div>
            </div>
            <div className="profile_information_bot">
              <div className="profile-card">
                <div className="profile-img-wrapper">
                  <img
                    src="/Ellipse 32.png"
                    alt="Profile"
                    className="profile-img"
                  />
                  <div className="camera-icon">📷</div>
                </div>

                <div className="profile-info">
                  <h3>Durga Prasad</h3>
                  <p>IIT Hyderabad</p>
                </div>
                <span className="border_bottom"></span>

                <div className="countdown">
                  <p>Next event in:</p>
                  <div className="timer">
                    <div>
                      <h2>04</h2>
                      <span>days</span>
                    </div>
                    <div>
                      <h2>:12</h2>
                      <span>hours</span>
                    </div>
                    <div>
                      <h2>:6</h2>
                      <span>min</span>
                    </div>
                  </div>
                </div>

                <div className="stats">
                  <div className="stat-row">
                    <span>Events registered</span>
                    <span className="stat-value">05</span>
                  </div>
                  <div className="stat-row">
                    <span>Events attended</span>
                    <span className="stat-value">03</span>
                  </div>
                  <div className="stat-row">
                    <span>Wishlisted</span>
                    <span className="stat-value">09</span>
                  </div>
                </div>
              </div>
              <div className="profile_card_information">
                {/* <div className="profile_card_information_personal">
                  <div className="profile_card_information_personal_top">
                    <h1>Personal Information</h1>
                    <p>Edit</p>
                  </div>
                  <div className="profile_card_information_personal_bot">
                    <form className="user-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label>
                            First name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Durgaprasad" />
                        </div>
                        <div className="form-group">
                          <label>
                            Last name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Padakanty" />
                        </div>
                        <div className="form-group">
                          <label>
                            Age <span className="required">*</span>
                          </label>
                          <input type="number" placeholder="22" />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>
                            Email address (Entered while login){" "}
                            <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="Durgaprasad1234@gmail.com"
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            Phone no. <span className="required">*</span>
                          </label>
                          <input type="tel" placeholder="9392837553" />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>
                            City name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Hyderabad" />
                        </div>
                        <div className="form-group">
                          <label>
                            Pincode <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="500068" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="profile_card_information_college">
                  <div className="profile_card_information_college_top">
                    <h1>College Info</h1>
                    <p>Edit</p>
                  </div>
                  <div className="profile_card_information_college_bot">
                    <form action="">
                      <div className="formSection">
                        <div className="formSection_top">
                          <div className="fieldGroup">
                            <label className="label" htmlFor="university">
                              University name
                            </label>
                            <input
                              className="input"
                              type="text"
                              id="university"
                            />
                          </div>
                        </div>

                        <div className="formSection_bot">
                          <div className="fieldGroup">
                            <label className="label" htmlFor="course">
                              Course name
                            </label>
                            <input className="input" type="text" id="course" />
                          </div>

                          <div className="fieldGroup">
                            <label className="label" htmlFor="year">
                              Year
                            </label>
                            <input className="input" type="text" id="year" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}
                <div className="message-container">
                  <div className="tabs">
                    <button
                      className={activeTabSlicer === "unread" ? "active" : ""}
                      onClick={() => setActiveTabSlicer("unread")}
                    >
                      Unread
                    </button>
                    <button
                      className={activeTabSlicer === "read" ? "active" : ""}
                      onClick={() => setActiveTabSlicer("read")}
                    >
                      Read
                    </button>
                  </div>

                  <div className="message-list">
                    {messages.map((msg) => (
                      <div className="message-card" key={msg.id}>
                        <img
                          src="/image_message.png"
                          alt="logo"
                          className="message-logo"
                        />
                        <div className="message-content">
                          <h4>{msg.title}</h4>
                          <p>{msg.text}</p>
                        </div>
                        <a href="#" className="view-link">
                          view
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Support":
        return (
          // <div className="accoutss_bottom_right">
          //   <div className="accountss_right_top support">
          //     <p>Suppport</p>
          //   </div>
          //   <div className="cart_med support_med">
          //     <div className="address support_address">
          //       <div className="address1">
          //         <p>Shop Address</p>
          //       </div>
          //       <p className="fulladd">
          //         Shivam Manjhi <br /> Indore, 23, Mahatma Gandhi Road, Near
          //         Rajwada Place...
          //       </p>
          //       <div className="cart_num">
          //         <p>Phone Number:</p>
          //         <p>123456123</p>
          //       </div>
          //     </div>
          //     <div className="add_button support_button">
          //       <button>Request Call</button>
          //     </div>
          //   </div>
          //   <div className="accounts_right_support_bot">
          //     <p>Frequently Asked Question</p>
          //     {/* <div className="accounts_accoridans">
          //       {data.map((item, index) => {
          //         return <Accordian key={item.id} {...item} />;
          //       })}
          //     </div> */}
          //   </div>
          // </div>
          <div className="profile_information">
            <div className="profile_information_top">
              <img src="/Rectangle 165.png" alt="" />
              <div className="profile_information_top_button">
                <button>Change Cover</button>
              </div>
            </div>
            <div className="profile_information_bot">
              <div className="profile-card">
                <div className="profile-img-wrapper">
                  <img
                    src="/Ellipse 32.png"
                    alt="Profile"
                    className="profile-img"
                  />
                  <div className="camera-icon">📷</div>
                </div>

                <div className="profile-info">
                  <h3>Durga Prasad</h3>
                  <p>IIT Hyderabad</p>
                </div>
                <span className="border_bottom"></span>

                <div className="countdown">
                  <p>Next event in:</p>
                  <div className="timer">
                    <div>
                      <h2>04</h2>
                      <span>days</span>
                    </div>
                    <div>
                      <h2>:12</h2>
                      <span>hours</span>
                    </div>
                    <div>
                      <h2>:6</h2>
                      <span>min</span>
                    </div>
                  </div>
                </div>

                <div className="stats">
                  <div className="stat-row">
                    <span>Events registered</span>
                    <span className="stat-value">05</span>
                  </div>
                  <div className="stat-row">
                    <span>Events attended</span>
                    <span className="stat-value">03</span>
                  </div>
                  <div className="stat-row">
                    <span>Wishlisted</span>
                    <span className="stat-value">09</span>
                  </div>
                </div>
              </div>
              <div className="profile_card_information">
                {/* <div className="profile_card_information_personal">
                  <div className="profile_card_information_personal_top">
                    <h1>Personal Information</h1>
                    <p>Edit</p>
                  </div>
                  <div className="profile_card_information_personal_bot">
                    <form className="user-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label>
                            First name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Durgaprasad" />
                        </div>
                        <div className="form-group">
                          <label>
                            Last name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Padakanty" />
                        </div>
                        <div className="form-group">
                          <label>
                            Age <span className="required">*</span>
                          </label>
                          <input type="number" placeholder="22" />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>
                            Email address (Entered while login){" "}
                            <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="Durgaprasad1234@gmail.com"
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            Phone no. <span className="required">*</span>
                          </label>
                          <input type="tel" placeholder="9392837553" />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>
                            City name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Hyderabad" />
                        </div>
                        <div className="form-group">
                          <label>
                            Pincode <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="500068" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="profile_card_information_college">
                  <div className="profile_card_information_college_top">
                    <h1>College Info</h1>
                    <p>Edit</p>
                  </div>
                  <div className="profile_card_information_college_bot">
                    <form action="">
                      <div className="formSection">
                        <div className="formSection_top">
                          <div className="fieldGroup">
                            <label className="label" htmlFor="university">
                              University name
                            </label>
                            <input
                              className="input"
                              type="text"
                              id="university"
                            />
                          </div>
                        </div>

                        <div className="formSection_bot">
                          <div className="fieldGroup">
                            <label className="label" htmlFor="course">
                              Course name
                            </label>
                            <input className="input" type="text" id="course" />
                          </div>

                          <div className="fieldGroup">
                            <label className="label" htmlFor="year">
                              Year
                            </label>
                            <input className="input" type="text" id="year" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}
                <div className="contact-form-wrapper">
                  <h2 className="contact-form-heading">
                    Have an issue? Contact us
                  </h2>
                  <p className="contact-form-subtext">
                    Raise your voice so our team can help resolve your query.
                  </p>

                  <form className="contact-form" onSubmit={handleSubmitMessage}>
                    <div className="form-row-top">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="input-fullname"
                        required
                      />

                      <input
                        type="text"
                        name="organization"
                        placeholder="School/ Organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="input-organization"
                        required
                      />
                    </div>

                    <div className="form-row-middle">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-Mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-email"
                        required
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Ph. no:"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-phone"
                        required
                      />
                    </div>

                    <input
                      type="text"
                      name="eventName"
                      placeholder="Event name"
                      value={formData.eventName}
                      onChange={handleChange}
                      className="input-event"
                      required
                    />

                    <textarea
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      className="textarea-message"
                      rows={4}
                      required
                    ></textarea>

                    <button type="submit" className="submit-btn">
                      Send
                    </button>
                  </form>
                </div>
              </div>
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
      {/* <Footer /> */}
    </>
  );
};

export default Profile;
