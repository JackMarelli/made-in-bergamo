import React, { useState, useRef, useEffect } from "react";
import simpleParallax from "simple-parallax-js";

export default function ImageRect({
  imageUrl,
  altText = "",
  dida = "",
  className,
  parallax = true,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const didaTransitionDuration = 100;

  useEffect(() => {
    if (imageRef.current && parallax) {
      new simpleParallax(imageRef.current, {
        delay: 0.6,
        scale: 1.2,
        transition: "cubic-bezier(0,0,0,1)",
      });
    }
  }, [parallax]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handleMouseLeave = () => {
    setTimeout(() => setIsHovering(false), didaTransitionDuration);
  };

  const containerStyle = {
    cursor: isHovering ? "none" : "auto",
  };

  const followerStyle = {
    position: "fixed",
    top: mousePosition.y,
    left: mousePosition.x,
    transform: "translate(-50%, -50%)",
    opacity: isHovering ? 1 : 0,
    transition: `opacity ${didaTransitionDuration}ms ease`,
    zIndex: 9999,
    pointerEvents: "none",
    whiteSpace: "nowrap",
    overflow: "hidden",
    userSelect: "none"
  };

  return (
    <div
      ref={containerRef}
      className={`${className} h-fit md:mb-12 relative select-none pointer-events-none`}
      style={containerStyle} // Apply the container style here
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={imageUrl}
        alt={altText}
        className="w-full h-auto"
      />
      <div
        style={followerStyle}
        className="px-5 py-2 bg-mib-beige-light border-2 border-mib-brown-dark rounded-full font-semibold text-mib-brown-dark select-none pointer-events-none"
      >
        {dida}
      </div>
    </div>
  );
}
