import React, { useState, useRef } from "react";

export default function ImageRect({
  imageUrl,
  altText = "",
  dida = "",
  className,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseMove = (event) => {
    if (isHovering) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };
  const handleMouseLeave = () => setIsHovering(false);

  // Prepare the styles for the div that should appear when hovering.
  const followerStyle = {
    position: "fixed",
    top: mousePosition.y,
    left: mousePosition.x,
    transform: "translate(-50%, -50%)",
    display: isHovering ? "block" : "none",
    pointerEvents: "none", // Make sure the div doesn't interfere with mouse events.
  };

  return (
    <div
      ref={containerRef}
      className={`${className} h-fit relative`} // Ensuring the container has a relative positioning.
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={imageUrl}
        className="w-full h-auto"
        alt={altText}
      />
      <div style={followerStyle}>{dida}</div>
    </div>
  );
}
