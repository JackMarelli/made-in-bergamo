import React, { useState, useRef, useEffect } from "react";
import simpleParallax from "simple-parallax-js";

export default function ImageRect({
  imageUrl,
  altText = "",
  dida = "",
  className,
  imgClassName = "",
  parallax = true,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false); // Tracks if the component is actively hovered
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isHomePage, setIsHomePage] = useState(
    !window.location.href.includes("interview")
  );

  useEffect(() => {
    if (imageRef.current && parallax) {
      new simpleParallax(imageRef.current, {
        delay: 0.6,
        scale: 1.2,
        transition: "cubic-bezier(0,0,0,1)",
      });
    }

    const checkHoverState = () => {
      if (!containerRef.current) return;
      const containerBounds = containerRef.current.getBoundingClientRect();
      const isInside =
        isActive &&
        mousePosition.x >= containerBounds.left &&
        mousePosition.x <= containerBounds.right &&
        mousePosition.y >= containerBounds.top &&
        mousePosition.y <= containerBounds.bottom;
      setIsHovering(isInside);
    };

    // Attach scroll listener to update hover state based on cursor position
    window.addEventListener("scroll", checkHoverState);

    // Cleanup to remove the event listener
    return () => window.removeEventListener("scroll", checkHoverState);
  }, [parallax, mousePosition, isActive]);

  useEffect(() => {
    // This useEffect is used to handle cases where the mouse leaves the component while scrolling
    const handleMouseLeaveOnScroll = () => {
      if (!isActive) setIsHovering(false);
    };

    window.addEventListener("scroll", handleMouseLeaveOnScroll);
    return () => window.removeEventListener("scroll", handleMouseLeaveOnScroll);
  }, [isActive]);

  const handleMouseEnter = () => {
    setIsActive(true);
    setIsHovering(true);
  };

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setIsHovering(false);
  };

  const followerStyle = {
    position: "fixed",
    top: mousePosition.y,
    left: mousePosition.x,
    transform: "translate(-50%, -50%)",
    opacity: isHovering ? 1 : 0,
    transition: "opacity 300ms ease",
    zIndex: 9999,
    pointerEvents: "none",
    overflow: "hidden",
    userSelect: "none",
    minWidth: "260px",
    maxWidth: "100vw",
  };

  return (
    <div
      ref={containerRef}
      className={`h-fit md:my-8 relative rounded-md overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={imageUrl}
        alt={altText}
        className={`w-full h-auto select-none object-cover ${imgClassName}`}
      />
      {dida !== "" && (
        <div
          style={followerStyle}
          className="px-5 py-2 mx-2 bg-mib-beige-light border-2 border-mib-brown-dark rounded-full font-semibold text-mib-brown-dark text-sm text-center"
        >
          {dida}
        </div>
      )}
    </div>
  );
}
