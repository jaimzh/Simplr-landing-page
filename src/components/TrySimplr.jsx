import React from "react";
import Button from "./Button";

function TrySimplr() {
  return (
    <section id="try-simplr" className=" scroll-mt-20 py-8 px-6 pb-10 bg-[var(--simplr-faint-blue)]">
      <div className="container wrapper mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col gap-6 justify-center items-center text-center w-full max-w-xl mx-auto">
          <h3 className="header-text mb-2 text-[var(--simplr-blue)]">
            Ready to Make Things Simplr?
          </h3>
          <p className="mb-2 text-[var(--simplr-dark-blue)]">
            Install Simplr now and upgrade your reading experience.
          </p>
          <Button
            text="Install Chrome Extension"
            color="white"
            addShadow={true}
          />
        </div>
      </div>
    </section>
  );
}

export default TrySimplr;
