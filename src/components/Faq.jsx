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
        "Highlight text and use the hotkeys (Alt+S and Alt+D) to get instant definitions or simplifications.",
    },
     {
      title: "Can i customize the keyboard shortcuts?",
      content: "Nope, not yet but we are working on it! For now, you can use Alt+S to simplify and Alt+D to define.",
    },
    {
      title: "Is Simplr free?",
      content: "YES! for now it is completely free to use.",
    },
    {
      title: "Does It work offline?",
      content: "Nope, Simplr Uses AI That Runs In The Cloud, So You'll Need An Internet Connection.",
    },
    
  ];

  return (
    <section
      id="faqs"
      className=" scroll-mt-20 py-8 px-6 pb-10  "
    >
       
      <div className="container wrapper mx-auto flex flex-col justify-center">
        <h3 className="header-text mb-4">FAQs</h3>
        <p className="mb-2 text-[var(--simplr-dark-blue)]">
        Have questions? We have answers! Check out the FAQs to learn more.
        </p >
        <div className=" mt-8 flex flex-row gap-6 justify-between items-center w-full max-w-5xl mx-auto">
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
