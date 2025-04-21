import "./Dashboard_second_item.css";

export default function Dashboard_second_item() {
  return (
    <div className="quickstart-wrapper">
      <div className="card_second">
        <h3>Start from scratch</h3>
        <p>
          Create and manage events effortlessly — from titles to timings, we’ve
          got everything you need.
        </p>
        <button className="cta-button">Create event</button>
      </div>

      <div className="card_second">
        <h3>Boost your brand with Efestoo Sponsorship</h3>
        <p>
          Boost your brand visibility by sponsoring events and connecting with
          thousands through Efestoo’s sponsorship opportunities.
        </p>
        <div className="actions">
          <button className="cta-button">Explore Sponsorships</button>
          <span className="text-link">Become a Sponsor!</span>
        </div>
      </div>
    </div>
  );
}
