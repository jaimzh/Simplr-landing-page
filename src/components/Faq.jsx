import React from "react";
import Accordion from "./Accordion";
import faqIcon from "../assets/faq.svg";

function Faq() {
  const items = [
    {
      title: "What is Simplr?",
      content:
        "Simplr is a Chrome extension that helps you understand any text instantly.",
    },
    {
      title: "How do I use Simplr?",
      content:
        "Highlight text and use the hotkeys to get instant definitions or simplifications.",
    },
    {
      title: "Is Simplr free?",
      content: "Yes, there is a free plan with unlimited use!",
    },
  ];

  return (
    <section
      id="faqs"
      className=" scroll-mt-20 py-8 px-6 pb-10 bg-[var(--simplr-faint-blue)] "
    >
      <div className="container wrapper mx-auto flex flex-col justify-center">
        <h3 className="header-text mb-4">FAQs</h3>
        <div className="flex flex-row gap-6 justify-between items-center w-full max-w-5xl mx-auto">
          <img className="hidden sm:block md:w-[30%]" src={faqIcon} alt="faq" />

          <div className="flex-col flex w-full">
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
