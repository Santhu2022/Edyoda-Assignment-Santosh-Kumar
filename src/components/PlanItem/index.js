import "./index.css";

const PlanItem = (props) => {
  const { planDetails, isSelected, updateSelectedPlan, id } = props;
  const { months, totalAmount, perMonth } = planDetails;
  const planItemClass = isSelected ? "plan-item selected-plan" : "plan-item";
  const statusImage = isSelected
    ? "./images/selected-plan.png"
    : "./images/non-selected-plan.png";
  return (
    <li className={planItemClass} onClick={() => updateSelectedPlan(id)}>
      <div>
        <img
          src={statusImage}
          alt="plan status"
          className="plan-status-image"
        />
      </div>
      <div>
        <p className="plan-name">{months} Months Subscription</p>
      </div>
      <div className="prices-container">
        <p className="total-price-text">
          Total <span className="total-price">₹{totalAmount}</span>
        </p>
        <p className="per-month-price-text">
          <span className="per-month-price">₹{perMonth} </span>/mo
        </p>
      </div>
    </li>
  );
};

export default PlanItem;
