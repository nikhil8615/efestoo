import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard_third_item.css";

const slicerTabs = ["Events", "Financial Reports", "User Engagement"];

const mockData = {
  Events: [
    { date: "Mar 1", Hackathon: 250, "Coding Jam": 60, "Quiz Bow": 150 },
    { date: "Mar 3", Hackathon: 250, "Coding Jam": 60, "Quiz Bow": 150 },
    { date: "Mar 5", Hackathon: 250, "Coding Jam": 60, "Quiz Bow": 150 },
    { date: "Mar 7", Hackathon: 200, "Coding Jam": 60, "Quiz Bow": 150 },
  ],
  "Financial Reports": [
    { date: "Mar 1", Hackathon: 180, "Coding Jam": 120, "Quiz Bow": 90 },
    { date: "Mar 3", Hackathon: 100, "Coding Jam": 160, "Quiz Bow": 110 },
    { date: "Mar 5", Hackathon: 200, "Coding Jam": 100, "Quiz Bow": 130 },
    { date: "Mar 7", Hackathon: 160, "Coding Jam": 140, "Quiz Bow": 95 },
  ],
  "User Engagement": [
    { date: "Mar 1", users: 2000 },
    { date: "Mar 3", users: 3000 },
    { date: "Mar 5", users: 1800 },
    { date: "Mar 7", users: 3500 },
  ],
};

export default function Dashboard_third_item() {
  const [activeTab, setActiveTab] = useState("Events");

  const headingText = {
    Events: "1021 Impressions on this event 😊",
    "Financial Reports": "₹2,50,000 Total revenue this quarter 💰",
    "User Engagement": "+18.7% Compared to previous quarter 😊",
  };

  const handleReset = () => {
    setActiveTab("Events");
  };

  return (
    <div className="analytics-wrapper">
      <div className="analytics-navbar">
        <div className="slicer-tabs">
          {slicerTabs.map((tab) => (
            <button
              key={tab}
              className={`slicer-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="navbar-right">
          <input
            type="text"
            className="search-bar"
            placeholder="Search by event name"
          />
          <select className="dropdown">
            <option>Last 7 days</option>
            <option>Last 14 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>

      {/* Header + buttons row */}
      <div className="controls-row">
        <p className="impression-text">
          <span className="heading-dynamic">{headingText[activeTab]}</span>
        </p>

        <div className="controls-buttons">
          <button className="view-details-btn">View details</button>
          <button className="reset-btn" title="Reset" onClick={handleReset}>
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
        </div>
      </div>

      <div className="analytics-graph">
        <ResponsiveContainer width="100%" height={300}>
          {activeTab === "User Engagement" ? (
            <AreaChart
              data={mockData["User Engagement"]}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#84b6f4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#84b6f4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#84b6f4"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          ) : (
            <BarChart
              data={mockData[activeTab]}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Hackathon" stackId="a" fill="#84b6f4" />
              <Bar dataKey="Coding Jam" stackId="a" fill="#a0c4ff" />
              <Bar dataKey="Quiz Bow" stackId="a" fill="#bdb2ff" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
