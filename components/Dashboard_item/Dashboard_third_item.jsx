import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
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
    { date: "Mar 1", users: 2300 },
    { date: "Mar 3", users: 3200 },
    { date: "Mar 5", users: 1800 },
    { date: "Mar 7", users: 3700 },
  ],
};

export default function Dashboard_third_item() {
  const [activeTab, setActiveTab] = useState("Events");

  const resetGraph = () => {
    setActiveTab("Events");
  };

  const renderChart = () => {
    if (activeTab === "User Engagement") {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData["User Engagement"]}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#84b6f4" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#84b6f4" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              content={({ active, payload, label }) =>
                active && payload?.length ? (
                  <div className="custom-tooltip">
                    <p>{`Date: ${label}`}</p>
                    <p>{`+${payload[0].value} Active Users`}</p>
                  </div>
                ) : null
              }
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorUsers)"
              dot={{ stroke: "#3b82f6", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      );
    }

    const colors = {
      Events: ["#84b6f4", "#a0c4ff", "#bdb2ff"],
      "Financial Reports": ["#caffbf", "#9bf6ff", "#ffd6a5"],
    };

    const [c1, c2, c3] = colors[activeTab];

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={mockData[activeTab]}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Hackathon" stackId="a" fill={c1} />
          <Bar dataKey="Coding Jam" stackId="a" fill={c2} />
          <Bar dataKey="Quiz Bow" stackId="a" fill={c3} />
        </BarChart>
      </ResponsiveContainer>
    );
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

      <div className="controls-row">
        <p className="impression-text">
          <span className="impressions-count">+18.7%</span> Compared to previous
          quarter 😊
        </p>

        <div className="controls-buttons">
          <button className="view-details-btn">View details</button>
          <button className="reset-btn" onClick={resetGraph} title="Reset">
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
        </div>
      </div>

      <div className="analytics-graph">{renderChart()}</div>
    </div>
  );
}
