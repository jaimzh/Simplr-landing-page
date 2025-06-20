import { motion } from "framer-motion";
import PropTypes from "prop-types";
import flashIcon from "../assets/flash.svg";
import keyboardIcon from "../assets/keyboard.svg";
import noteIcon from "../assets/note.svg";
import bookSavedIcon from "../assets/book-saved.svg";
import chromeBlueIcon from "../assets/chrome-blue.svg";
import aiIcon from "../assets/ai.svg";

const iconMap = {
  "flash.svg": flashIcon,
  "keyboard.svg": keyboardIcon,
  "note.svg": noteIcon,
  "book-saved.svg": bookSavedIcon,
  "chrome-blue.svg": chromeBlueIcon,
  "ai.svg": aiIcon,
};

function BenefitCard({
  icon = "flash.svg",
  title = "hello",
  description = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) {
  const iconPath = iconMap[icon] || flashIcon;

  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.02, rotate: 0 }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
      className="flex flex-col items-start mx-auto p-6 justify-center md:gap-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-[var(--simplr-blue)] drop-shadow-[3px_5px_0px_var(--simplr-blue)]
      h-[140px] w-[90vw] max-w-[400px] sm:w-[340px] sm:h-[191px] md:w-[295px] md:h-[191px] lg:max-w-[350px] lg:min-h-[191px]"
    >
      <div className="flex flex-row items-center justify-center gap-4 mb-3.5">
        <img src={iconPath} alt={title} />
        <h6 className="text-[var(--simplr-blue)] font-bold">{title}</h6>
      </div>

      <p className="text-[var(--simplr-grey)] text-sm text-center">
        {description}
      </p>
    </motion.div>
  );
}

BenefitCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default BenefitCard;
