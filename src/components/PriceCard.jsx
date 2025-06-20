import React from "react";
import PropTypes from "prop-types";
import tickIcon from "../assets/tick.svg";
import Button from "./Button";

function PriceCard({
  type = "Basic",
  price = "$0",

  features = ["Feature One", "Feature Two", "Feature Three"],
  buttonText = "Choose Plan",
  onButtonClick,
}) {
  return (
    <div className="bg-white rounded-2xl border-2 border-[var(--simplr-blue)]  flex flex-col items-center p-8 min-w-[280px] mx-auto shadow-[0px_5px_0px_var(--simplr-blue)]">
      <h3 className="self-start text-2xl font-bold text-[var(--simplr-blue)] mb-2">
        {type}
      </h3>
      <div className="text-5xl font-extrabold text-[var(--simplr-grey)] mb-6">
        {price}
      </div>
      <ul className="flex flex-col gap-4 w-full mb-6">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3  text-[var(--simplr-dark-blue)] text-sm "
          >
            <img src={tickIcon} alt="feature icon" className="w-6 h-6" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        text={buttonText}
        color="blue"
        addShadow={false}
        hasIcon={false}
        onClick={onButtonClick}
      />
    </div>
  );
}
PriceCard.propTypes = {
  type: PropTypes.string,
  price: PropTypes.string,

  features: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default PriceCard;
