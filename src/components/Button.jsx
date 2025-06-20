import React, { useState } from "react";
import PropTypes from "prop-types";
import chromeIcon from "../assets/chrome-icon.svg";

function Button({
  text,
  color = "blue",
  shadowColor = "var(--simplr-blue)",
  addShadow = false,
  hasIcon = true,
  icon = chromeIcon,
  onClick,
}) {
  const [pressed, setPressed] = useState(false);

  const base = "px-6 py-4 rounded-full font-semibold transition duration-200 ";
  const colors = {
    blue: "bg-[var(--simplr-blue)] hover:bg-[var(--simplr-blue-dark)] text-white",
    red: "bg-red-600 hover:bg-red-700 ",
    white:
      "bg-white hover:bg-[var(--simplr-blue)] hover:outline text-[var(--simplr-blue)]  hover:text-white ",
  };

  // Inline style for cartoon shadow
  let style = {};
  if (addShadow) {
    style.filter = pressed
      ? `drop-shadow(2px 4px 0px ${shadowColor})`
      : `drop-shadow(3px 8px 0px ${shadowColor})`;
  }

  const finalClass = `${base} ${colors[color]}`;

  const handleClick =
    onClick ||
    (() =>
      window.open(
        "https://chromewebstore.google.com/detail/lfpmflkfdkokmglemcpmfdllkefbefih?utm_source=item-share-cb",
        "_blank"
      ));

  return (
    <button
      className={finalClass}
      style={style}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={handleClick}
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        {hasIcon && <img src={icon} alt="icon" className="w-5 h-5" />}
        <p>{text}</p>
      </div>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  shadowColor: PropTypes.string,
  color: PropTypes.string,
  addShadow: PropTypes.bool,
  hasIcon: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "blue",
  addShadow: false,
  hasIcon: true,
  icon: chromeIcon,
};

export default Button;
