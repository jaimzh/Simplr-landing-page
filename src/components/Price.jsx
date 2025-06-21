import React from "react";
import PriceCard from "./PriceCard";

function Price() {
  return (
    <section id="pricing" className="py-8 px-6 bg-[var(--simplr-light-blue)] mb-4">
      <div className="container wrapper mx-auto flex flex-col justify-center">
        <h3 className="header-text mb-4">Plans & Pricing </h3>
        <p className="mb-2 text-[var(--simplr-grey]">
          Yes, it’s all free. We  just really wanted a pricing table.
        </p >
        <div className="mt-8 flex flex-col md:flex-row gap-8 md:gap-2 items-center justify-center">
          <PriceCard
            type="Basic"
            price="$0"
            features={["Instant Definitions", "Smart Simplification", "Works Everywhere"]}
            buttonText="Get Started"
          />
          <PriceCard
            type="Pro"
            price="$0.0"
            features={[
              "Everything in Basic",
              "Slightly Faster (Probably)",
              "Feels more powerful",
            ]}
            buttonText="Get Started"
          />
          <PriceCard
            type="Premium"
            price="$0.00"
            features={["Everything in Pro", "Boosts your confidence", "Bragging rights included"]}
            buttonText="Get Started"
          />
        </div>
      </div>
    </section>
  );
}

export default Price;
