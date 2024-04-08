import React, { useRef, useState, useEffect } from "react";

export default function SpyTextGalleryLayout({
  text,
  children,
  textColor,
  backgroundColor = "bg-transparent",
}) {
  return (
    <div className="relative col-span-4 md:col-span-12 md:my-24">
      <div className="sticky top-[30vh]">
        <h2
          className={`mb-6 text-4xl md:text-7xl lg:text-9xl font-medium font-crimson-pro text-center select-none pointer-events-none ${textColor}`}
        >
          {text}
        </h2>
      </div>
      <div className="w-full grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0">
        {children}
      </div>
      <h2
        className={`mt-6 md:mt-20 text-4xl md:text-7xl lg:text-9xl font-medium font-crimson-pro text-center text-transparent select-none pointer-events-none`}
      >
        {text}
      </h2>
    </div>
  );
}
