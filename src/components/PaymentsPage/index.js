import Header from "../Header";
import SubscribeForm from "../SubscribeForm";
import "./index.css";

const PaymentsPage = () => {
  const renderLeftSection = () => (
    <div className="left-section">
      <h1 className="left-section-heading">
        Access curated courses worth
        <br />₹ <span className="old-price">18,500</span> at just{" "}
        <span className="new-price">₹ 99 </span>
        per year!
      </h1>
      <ul className="features-list">
        <li className="feature-list-item">
          <img
            src="./images/feature1.png"
            alt="feature"
            className="feature-icon"
          />
          <p className="feature-text">
            <span className="highlighted-text">100+</span> Job relevant courses
          </p>
        </li>
        <li className="feature-list-item">
          <img
            src="./images/feature2.png"
            alt="feature"
            className="feature-icon"
          />
          <p className="feature-text">
            <span className="highlighted-text">20,000+</span> Hours of content
          </p>
        </li>
        <li className="feature-list-item">
          <img
            src="./images/feature3.png"
            alt="feature"
            className="feature-icon"
          />
          <p className="feature-text">
            <span className="highlighted-text">Exclusive</span> Webinar access
          </p>
        </li>
        <li className="feature-list-item">
          <img
            src="./images/feature4.png"
            alt="feature"
            className="feature-icon"
          />
          <p className="feature-text">
            Scholarship worth <span className="highlighted-text">₹94,500</span>
          </p>
        </li>
        <li className="feature-list-item">
          <img
            src="./images/feature5.png"
            alt="feature"
            className="feature-icon"
          />
          <p className="feature-text">
            <span className="highlighted-text">Ad Free</span> Learning
            experience
          </p>
        </li>
      </ul>
    </div>
  );

  const renderFormSection = () => (
    <div className="form-section">
      <div className="progress-container">
        <div className="stage-container">
          <div className="stage-number-container">1</div>
          <p className="stage-name">Sign Up</p>
        </div>
        <div className="stage-container">
          <div className="stage-number-container">2</div>
          <p className="stage-name">Subscribe</p>
        </div>
      </div>
      <SubscribeForm />
    </div>
  );

  return (
    <div className="page">
      <Header />
      <div className="main-content">
        <div className="main-responsive-container">
          {renderLeftSection()}
          {renderFormSection()}
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
