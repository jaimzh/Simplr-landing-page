import React, { useState, useRef, useEffect } from "react";
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
      profileImg: "https://placehold.co/100x100/FFC8DD/FF0077?text=PM",
      name: "Definitely Real Person",
      title: "Product Manager",
      review:
        "“So much faster than opening a new tab and Googling a sentence!”",
      stars: 5,
    },
    {
      profileImg: "https://placehold.co/100x100/212121/FAFAFA?text=J",
      name: "Jin Woo",
      title: "S Class Hunter",
      review: "“Highly recommended. Efficiency, leveled up! ”",
      stars: 5,
    },
    
    {
      profileImg: "https://placehold.co/100x100/D4A5A5/5C0000?text=MK",
      name: "Maria K.",
      title: "Marketing Specialist",
      review:
        "“Simplr is so good, it's criminal that it's free. Honestly, i wish they had a 'take my money' button”",
      stars: 5,
    },
    {
      profileImg: "https://placehold.co/100x100/B0E0E6/004080?text=M",
      name: "Mufasa",
      title: "Chief Hype Officer",
      review:
        "“Incredibly intuitive and powerful. Simplr is now essential to my workflow.”",
      stars: 4,
    },
  ];

  // STUFF I ADDED FOR THE ANIMATION AND SCROLLER EFFECTS....Still need to learn more on this in depth

  // State to control pause/play of the animation
  const [isPaused, setIsPaused] = useState(false);
  // State to control if section is in view
  const [inView, setInView] = useState(false);

  // Ref that connects to the DOM element for hover detection and intersection observer
  const scrollerRef = useRef(null);
  const sectionRef = useRef(null);

  //  Duplicated the reviews for the infinite loop effect using that spread operator
  const duplicatedReviews = [...reviewData, ...reviewData, ...reviewData];

  //  Event handlers for mouse interactions (pause/resume)
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Using observer to detect if the section is in view so the animation only plays when the section is visible
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // So we got some custom CSS for the animation and even the fading effect at the edges
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
      /* White (#F0F8FF) to transparent gradient */
      background: linear-gradient(to right, #fff, rgba(255,255,255,0));
    }

    .scroller-container::after {
      right: 0; /* Position at the right edge */
      /* Gradient fading from transparent to your section's background color (#F0F8FF) */
      background: linear-gradient(to left, #fff, rgba(255,255,255,0));
    }

   

    
  `;

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="scroll-mt-20 py-6 px-6 bg-white font-sans"
    >
      {/* injecting custom CSS for animation just cuz it said it's dangerous doesn't mean it is , i thinkkkkk */}
      <style dangerouslySetInnerHTML={{ __html: customCss }} />

      <div className="container wrapper mx-auto flex flex-col justify-center">
        <h3 className="header-text mb-4">Reviews</h3>
       
          <p className="mb-5 text-left  text-[var(--simplr-grey)]   ">
            Real users, real feedback. See why Simplr is loved by so many.(Most
            of them weren't paid to say this, we promise)
          </p>
       

        {/* scrolling container */}
        <div
          ref={scrollerRef} // ref here to detect hover
          className="scroller-container relative w-full overflow-hidden py-4 rounded-xl"
          onMouseEnter={handleMouseEnter} // Calls the function to pause animation
          onMouseLeave={handleMouseLeave} // Calls the function to resume animation
        >
          {/* This is the inner div that actually moves (the 'track') */}
          <div
            className={`flex flex-row flex-nowrap w-max ${
              isPaused || !inView ? "paused" : ""
            } animate-scroll`}
          >
            {/* Map over the duplicated reviews to render ReviewCard components */}

            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={index} {...review} /> // Each duplicated review is rendered as a card
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
