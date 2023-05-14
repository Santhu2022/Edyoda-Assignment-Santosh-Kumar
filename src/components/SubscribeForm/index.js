import { useState } from "react";
import PlanItem from "../PlanItem";
import "./index.css";

const plans = [
  {
    months: 12,
    totalAmount: 179,
    perMonth: 15,
    isExpired: false,
    isRecommended: true,
  },
  {
    months: 6,
    totalAmount: 149,
    perMonth: 25,
    isExpired: false,
    isRecommended: false,
  },
  {
    months: 3,
    totalAmount: 99,
    perMonth: 33,
    isExpired: false,
    isRecommended: false,
  },
];

const SubscribeForm = () => {
  const [selectedPlanId, updateSelectedPlan] = useState(0);

  const renderExpiredPlanItem = () => (
    <li className="plan-item disabled-plan">
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
    </li>
  );

  return (
    <form className="form">
      <p className="form-header">Select your subscription plan</p>
      <ul className="plans-list">
        {renderExpiredPlanItem()}
        {plans.map((eachPlan, index) => (
          <PlanItem
            key={index}
            planDetails={eachPlan}
            updateSelectedPlan={updateSelectedPlan}
            isSelected={index === selectedPlanId}
            id={index}
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
          <p className="fee-text"><span></span></p>
          <p className="fee">₹18,500</p>
        </div>
      </div>
    </form>
  );
};

export default SubscribeForm;
