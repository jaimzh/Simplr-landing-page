import React from "react";
import PropTypes from "prop-types";

function ReviewCard({
  profileImg = "/src/assets/profile-placeholder.png",
  name = "Reviewer Name",
  title = "Verified User",
  review = "This is a sample review. Simplr made everything easier!",
  stars = 5,
}) {
  return (
    <div className="mx-2 flex justify-center items-center flex-shrink-0 scale-90 sm:scale-100">
      <div className="bg-white border-2 border-[var(--simplr-blue)] rounded-2xl p-4 m-0 flex flex-col justify-center gap-4 h-[200px] max-w-[367px] max-h-[300px]  mx-auto">
        {/* Top Row: Profile + Name/Title + Stars */}
        <div className="flex items-center justify-between gap-4">
          {/* Profile and Name/Title */}
          <div className="flex items-center gap-4">
            <img
              src={profileImg}
              alt={name}
              className="w-14 h-14 rounded-full border-2 border-[var(--simplr-blue)] object-cover"
            />
            <div className="flex flex-col">
              <span className="font-bold text-[var(--simplr-blue)]">
                {name}
              </span>
              <span className="text-sm text-gray-500">{title}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill={i < stars ? "var(--simplr-blue)" : "#e5e7eb"}
              viewBox="0 0 20 20"
              className="w-5 h-5"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          ))}
        </div>
        {/* Review Text */}
        <div className="text-[var(--simplr-dark-blue)] text-base text-left">
          {review}
        </div>
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  profileImg: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  review: PropTypes.string,
  stars: PropTypes.number,
};

export default ReviewCard;
