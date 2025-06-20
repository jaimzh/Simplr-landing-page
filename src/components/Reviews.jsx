import React, { useState, useRef } from "react";
import ReviewCard from "./ReviewCard";

function Reviews() {
  const reviewData = [
    {
      profileImg: "https://placehold.co/100x100/A0C4FF/001B4B?text=JH",
      name: "Creative Person",
      title: "Developer",
      review: "“This is probably the greatest extension ever, I said it!”",
      stars: 5,
    },
    {
      profileImg: "https://placehold.co/100x100/FFC8DD/FF0077?text=PR",
      name: "Definitely Real Person",
      title: "Product Manager",
      review:
        "“So much faster than opening a new tab and Googling a sentence!”",
      stars: 5,
    },
    {
      profileImg: "https://placehold.co/100x100/ADD8E6/00008B?text=AU",
      name: "Anonymous User",
      title: "S Class Hunter",
      review: "“Highly recommended, if I could I’d pay for it!”",
      stars: 5,
    },
    // Adding more reviews for a smoother, more realistic infinite scroll
    {
      profileImg: "https://placehold.co/100x100/D4A5A5/5C0000?text=MK",
      name: "Maria K.",
      title: "Marketing Specialist",
      review:
        "“Simplr saved us hours on manual tasks. A game-changer for productivity!”",
      stars: 5,
    },
    {
      profileImg: "https://placehold.co/100x100/B0E0E6/004080?text=LT",
      name: "Leon T.",
      title: "Freelance Designer",
      review:
        "“Incredibly intuitive and powerful. Simplr is now essential to my workflow.”",
      stars: 4,
    },
  ];

  // --- BEGINNING OF ANIMATION LOGIC ADDITIONS ---

  // 1. State to control pause/play of the animation
  const [isPaused, setIsPaused] = useState(false);

  // 2. Ref to connect to the DOM element for hover detection
  const scrollerRef = useRef(null);

  // 3. Duplicate reviews for the infinite loop effect
  // This creates a much longer array of reviews: [review1, ..., reviewN, review1, ..., reviewN, review1, ..., reviewN]
  const duplicatedReviews = [...reviewData, ...reviewData, ...reviewData];

  // 4. Event handlers for mouse interactions (pause/resume)
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // 5. Custom CSS for the animation itself (keyframes and pseudo-elements)
  // This CSS will be dynamically injected into the component.
  const customCss = `
    /* Define the animation named 'scroll' */
    @keyframes scroll {
      0% {
        transform: translateX(0); /* Start position: no horizontal offset */
      }
      100% {
        /* End position: move left by exactly one-third of the total width
           of the duplicated content. This makes the loop seamless. */
        transform: translateX(calc(-100% / 3)); 
      }
    }

    /* Apply the 'scroll' animation to elements with 'animate-scroll' class */
    .animate-scroll {
      animation: scroll 30s linear infinite; /* Animation runs for 60 seconds, at a constant speed, forever */
    }

    /* When 'paused' class is also present, stop the animation */
    .animate-scroll.paused {
      animation-play-state: paused; 
    }

    /* Styles for the fading effect at the edges of the scroller */
    .scroller-container::before,
    .scroller-container::after {
      content: ''; /* Necessary for pseudo-elements */
      position: absolute; /* Positions them relative to their parent .scroller-container */
      top: 0;
      width: 10%; /* How wide the fade gradient is */
      height: 100%;
      pointer-events: none; /* Allows clicks/hovers to pass through these overlays to the cards */
      z-index: 10; /* Ensures they are on top of the scrolling reviews */
    }

    .scroller-container::before {
      left: 0; /* Position at the left edge */
      /* Gradient fading from your section's background color (#F0F8FF) to transparent */
      background: linear-gradient(to right, #F0F8FF, rgba(240, 248, 255, 0));
    }

    .scroller-container::after {
      right: 0; /* Position at the right edge */
      /* Gradient fading from transparent to your section's background color (#F0F8FF) */
      background: linear-gradient(to left, #F0F8FF, rgba(240, 248, 255, 0));
    }

   

    
  `;

  // --- END OF ANIMATION LOGIC ADDITIONS ---

  return (
    <section
      id="reviews"
      className="scroll-mt-20 py-6 px-6 bg-[#F0F8FF] font-sans" // Use direct hex code or Tailwind config
      // Inline style to define CSS variables for colors used in components/CSS
    >
      {/* 6. Inject the custom CSS into the HTML head */}
      <style dangerouslySetInnerHTML={{ __html: customCss }} />

      <div className="container wrapper mx-auto flex flex-col justify-center">
        <h3 className="header-text mb-4">Reviews</h3>

        {/* 7. This is the main scrolling viewport container */}
        <div
          ref={scrollerRef} // Attach the ref here to detect hover
          className="scroller-container relative w-full overflow-hidden py-4 rounded-xl"
          onMouseEnter={handleMouseEnter} // Calls the function to pause animation
          onMouseLeave={handleMouseLeave} // Calls the function to resume animation
        >
          {/* 8. This is the inner div that actually moves (the 'track') */}
          <div
            className={`flex flex-row flex-nowrap w-max ${
              isPaused ? "paused" : ""
            } animate-scroll`}
          >
            {/* 9. Map over the duplicated reviews to render ReviewCard components */}
            {/* This replaces your hardcoded ReviewCard instances */}
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={index} {...review} /> // Each duplicated review is rendered as a card
            ))}
          </div>
        </div>

        {/* Optional text to guide the user */}
        <div className="mt-8 p-4 text-center text-gray-600 max-w-2xl mx-auto">
          <p>
            Hover over the reviews to pause the scrolling animation and read
            them carefully. Move your mouse away to resume the seamless loop.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
