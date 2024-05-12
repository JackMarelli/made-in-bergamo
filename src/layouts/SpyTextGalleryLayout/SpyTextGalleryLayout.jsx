import React, { useRef, useState, useEffect } from "react";

export default function SpyTextGalleryLayout({
  text,
  children,
  textColor,
  backgroundColor = "bg-transparent",
}) {
  return (
    <div className="relative col-span-4 md:col-span-12 md:my-16">
      <div className="w-full grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0">
        <div className="col-span-4 md:col-span-12 sticky top-[30vh] bottom-[30vh] md:mb-24">
          <h2
            className={`md:px-20 text-3xl md:text-5xl lg:text-[16rem] md:leading-[12rem] font-crimson-pro text-center select-none pointer-events-none ${textColor}`}
          >
            {text}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
}
