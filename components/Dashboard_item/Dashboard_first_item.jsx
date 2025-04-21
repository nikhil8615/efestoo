// components/Dashboard.js
import "./Dashboard_first_item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faUsers,
  faChartLine,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard_first_item() {
  return (
    <div className="dashboard_first-wrapper">
      <div className="dashboard_first-header">
        <img src="/Group207.png" alt="icon" className="dashboard-icon" />
        <div>
          <h4>Dash Board</h4>
          <span>Welcome back Organizer</span>
        </div>
      </div>

      <div className="cards_first-container">
        <div className="card_first">
          <div className="card_first-header">
            <span>Analytics</span>
            <FontAwesomeIcon icon={faChartBar} />
          </div>
          <h3>1278</h3>
        </div>

        <div className="card_first">
          <div className="card_first-header">
            <div>
              <span>Total Registers</span>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className="dropdown">
              <span>This Month</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <h3>1278</h3>
        </div>

        <div className="card_first">
          <div className="card_first-header">
            <span>Revenue</span>
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <h3>1278</h3>
        </div>
      </div>
    </div>
  );
}
