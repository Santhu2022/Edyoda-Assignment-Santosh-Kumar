import { useState } from "react";
import PlanItem from "../PlanItem";
import "./index.css";

const plans = [
  {
    id: 0,
    months: 12,
    totalAmount: 179,
    perMonth: 15,
    isRecommended: true,
  },
  {
    id: 1,
    months: 6,
    totalAmount: 149,
    perMonth: 25,
    isRecommended: false,
  },
  {
    id: 2,
    months: 3,
    totalAmount: 99,
    perMonth: 33,
    isRecommended: false,
  },
];

const SubscribeForm = () => {
  const [selectedPlanId, updateSelectedPlan] = useState(0);

  const renderExpiredPlanItem = () => (
    <li className="disabled-plan-item">
      <div className="offer-expired-tag">Offer expired</div>
      <div className="plan-item-details">
        <div>
          <img
            src="./images/disabled-plan.png"
            alt="plan status"
            className="plan-status-image"
          />
        </div>
        <div>
          <p className="plan-name disabled-plan-name">12 Months Subscription</p>
        </div>

        <div className="prices-container">
          <p className="total-price-text disabled-plan-name">
            Total <span className="total-price">₹99</span>
          </p>
          <p className="per-month-price-text">
            <span className="per-month-price disabled-plan-name">₹8 </span>/mo
          </p>
        </div>
      </div>
    </li>
  );

  return (
    <form className="form">
      <p className="form-header">Select your subscription plan</p>
      <ul className="plans-list">
        {renderExpiredPlanItem()}
        {plans.map((eachPlan) => (
          <PlanItem
            key={eachPlan.id}
            planDetails={eachPlan}
            updateSelectedPlan={updateSelectedPlan}
            isSelected={eachPlan.id === selectedPlanId}
          />
        ))}
      </ul>
      <div className="summary-container">
        <div className="summary-text-container">
          <p className="fee-text">Subscription Fee</p>
          <p className="fee">₹18,500</p>
        </div>
        <div className="alert-container">
          <div className="alert-header">
            <p className="offer-name">Limited time offer</p>
            <p className="fee minus-fee">
              -₹{18500 - plans[selectedPlanId].totalAmount}
            </p>
          </div>
          <div className="alert-body">
            <img
              src="./images/offer-clock-icon.png"
              alt="alert"
              className="offer-alert-image"
            />
            <p className="offer-validity">Offer valid till 25th March 2023</p>
          </div>
        </div>
        <div className="summary-text-container">
          <p className="gst-text">
            <span className="total-text">Total</span> (Incl. of 18% GST)
          </p>
          <p className="total-payable-amount">
            ₹{plans[selectedPlanId].totalAmount}
          </p>
        </div>
      </div>
      <div className="button-container">
        <button className="cancel-btn" type="button">
          CANCEL
        </button>
        <button type="button" className="proceed-btn">
          PROCEED TO PAY
        </button>
      </div>
      <div className="payment-gateway-container">
        <img
          src="./images/razorpay-icon.png"
          alt="razorpay"
          className="razorpay-icon"
        />
      </div>
    </form>
  );
};

export default SubscribeForm;
