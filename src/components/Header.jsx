import { useState, useRef, useEffect } from "react";

import Lenis from "@studio-freight/lenis";
import logo from "../assets/logo.svg";

export default function Header() {
  const lenis = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  const navItems = [
    { label: "Benefits", href: "#benefits" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Reviews", href: "#reviews" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
    { label: "Try Simplr", href: "#try-simplr" },
  ];

  // This handles the scrolling to section thingy
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      lenis.current.scrollTo(el, { offset: -80 }); // Smooth scroll to the section with an offset to equivalent of scroll mt 20
      setIsOpen(false); // close mobile menu
    }
  };

  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container wrapper mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex">
          <img src={logo} alt="Simplr Logo" className="h-8 w-auto" />
          <div className="hidden md:block text-xl font-bold text-[var(--simplr-blue)] ml-2">
            Simplr
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.label.toLowerCase());
              }}
              className="text-[var(--simplr-dark-blue)] hover:text-[var(--simplr-blue)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger hamburger animation svg thingy*/}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block h-0.5 w-6 bg-[var(--simplr-blue)] mb-1.5 transition-all duration-100 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-[var(--simplr-blue)] mb-1.5 transition-all duration-100 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-[var(--simplr-blue)] transition-all duration-100 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Slide-in */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden flex flex-col pt-20 px-8 gap-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* X/Close Icon inside menu */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Close navigation menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--simplr-blue)] mb-1.5 transition-all duration-300 rotate-45 translate-y-2`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-[var(--simplr-blue)] mb-1.5 transition-all duration-300 opacity-0`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-[var(--simplr-blue)] transition-all duration-300 -rotate-45 -translate-y-2`}
          ></span>
        </button>
        <div className="mt-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.label.toLowerCase().replace(/ /g, "-"));
              }}
              className="text-[var(--simplr-dark-blue)] hover:text-[var(--simplr-blue)] text-lg font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(25, 26, 35, 0.32)" }}
          aria-label="Close menu overlay"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}
