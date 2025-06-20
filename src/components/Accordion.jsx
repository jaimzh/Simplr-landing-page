import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

// Accordion receives an array of items: [{title, content}]
function Accordion({ items, defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const contentRefs = useRef([]);

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl  bg-white border-2  border-[var(--simplr-blue)] shadow-[0px_5px_0px_var(--simplr-blue)] overflow-clip">
      {items.map((item, idx) => (
        <div key={item.title}>
          <button
            className={`w-full  flex flex-row items-center text-left px-5 py-4 font-semibold text-[var(--simplr-blue)] bg-white hover:bg-[var(--simplr-light-blue)] focus:outline-none transition-all duration-200 ease-out outline-1 border-[var(--simplr-blue) ] ${
              openIndex === idx ? "bg-[var(--simplr-light-blue)]" : ""
            }`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="flex-1 text-left">{item.title}</span>
            <span
              className={`ml-3 text-xl w-5 flex-shrink-0 flex items-center justify-center transition-all duration-200 ease-out ${
                openIndex === idx ? "transform rotate-180" : ""
              }`}
            >
              {openIndex === idx ? "−" : "+"}
            </span>
          </button>
          <div
            ref={(el) => (contentRefs.current[idx] = el)}
            className="overflow-hidden transition-all duration-200 ease-out border-b border-t border-[var(--simplr-blue)] last:border-b-0"
            style={{
              maxHeight:
                openIndex === idx
                  ? `${contentRefs.current[idx]?.scrollHeight || 0}px`
                  : "0px",
            }}
          >
            <div
              className={`px-5 py-4 text-[var(--simplr-dark-blue)] transition-opacity duration-200 ${
                openIndex === idx ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultOpen: PropTypes.number,
};

export default Accordion;
