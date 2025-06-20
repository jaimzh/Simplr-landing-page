import React from "react";

function HowItWorks() {
  return (
    <section id="how-it-works" className=" scroll-mt-20 py-8 px-6  pt-0  mb-4">
      <div className="container wrapper mx-auto flex flex-col justify-center">
        <h3 className="header-text mb-4 ">How It Works</h3>
        <p>
          Highlight text, press a key, and get instant clarity—right on the
          page. All in 3 steps
        </p>
        <div className="grid grid-cols-3 gap-6 items-start text-center my-8">
          <img
            src="/src/assets/howitworks1.svg"
            alt="Highlight any text on a webpage"
            className="w-full mx-auto mb-2"
          />
          <img
            src="/src/assets/howitworks2.svg"
            alt="Press Alt+S to simplify or Alt+D to define"
            className="w-full mx-auto mb-2"
          />
          <img
            src="/src/assets/howitworks3.svg"
            alt="Get instant results without leaving the page"
            className="w-full mx-auto mb-2"
          />
          <div className=" flex flex-col  justify-start gap-1">
            <p className="font-bold text-[var(--simplr-blue)] ">
              Highlight Text
            </p>
            <p className="text-[var(--simplr-grey)]">
              Select any text to understand from a webpage.
            </p>
          </div>
          <div className=" flex flex-col  justify-start gap-1">
            <p className="font-bold text-[var(--simplr-blue)] ">
              Press a Hotkey
            </p>
            <p className="text-[var(--simplr-grey)]">
              Use Alt+S to simplify or Alt+D to define.
            </p>
          </div>
          <div className=" flex flex-col  justify-start gap-1">
            <p className="font-bold text-[var(--simplr-blue)] ">
              Instant Results
            </p>
            <p className="text-[var(--simplr-grey)]">
              Clean popup shows simplified text or definition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
