import React from "react";
import simplrInAction from "../assets/simplrinaction.svg";

function SeeSimplrInAction() {
  return (
    <section className="py-8 px-6  pt-3 bg-[var(--simplr-faint-blue)] ">
      <div className="container wrapper mx-auto flex flex-col justify-center">
        <h3 className="header-text mb-4">See Simplr in Action</h3>
         <p className="mb-5 p-0 text-left text-[var(--simplr-grey)]">
         Real world screenshots of how Simplr simplfies and defines text.
        </p>
        <div className="flex justify-center mt-8">
          <img src={simplrInAction} alt="see simplr in action" />
        </div>
      </div>
    </section>
  );
}

export default SeeSimplrInAction;
