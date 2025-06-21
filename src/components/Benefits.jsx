import { section } from "motion/react-client";
import React from "react";
import BenefitCard from "./BenefitCard";

function Benefits() {
  return (
    <section id="benefits" className=" scroll-mt-20 py-8  bg-[var(--simplr-faint-blue)] mb-4">
      <div className="container wrapper mx-auto flex flex-col justify-center ">
        <h3 className=" header-text mb-4">Benefits</h3>
        <p className="mb-5 p-0 text-left text-[var(--simplr-grey)]">
          Discover how Simplr makes understanding easire. Explore the key benefits and features designed to help you learn faster and more efficiently.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full ">
            <BenefitCard
              icon={"flash.svg"}
              title="Instant Results"
              description="Get simplifications and definitions in under 3 seconds. No waiting, no loading screens."
            />

            <BenefitCard
              title="Two Simple Hotkeys"
              description="Alt+S to simplify or Alt+D to define. It's that simple and fast."
              icon={"keyboard.svg"}
            />
           <BenefitCard
              title="Perfect for Learning"
              description="Great for students, researchers, and anyone who loves to read and learn new things."
              icon={"book-saved.svg"}
            />
            <BenefitCard
              title="Works on any site"
              description="Wikipedia, news sites, research papers, social media - Simplr works everywhere you browse."
              icon={"chrome-blue.svg"}
            />
            <BenefitCard
              title="Definition + Simplification"
              description="Get both detailed definitions and simplified explanations in one place."
              icon={"note.svg"}
            />
            <BenefitCard
              title="Powered by AI"
              description="Advanced AI technology provides accurate and contextual explanations."
              icon={"ai.svg"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
