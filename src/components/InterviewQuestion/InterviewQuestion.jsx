import React, { useRef, useState, useEffect } from "react";

export default function SpyTextGalleryLayout({ question, children }) {
  return (
    <div className="w-full h-fit mb-12">
      <h2 className="h-full w-fit uppercase text-[18px] font-semibold leading-6 select-none mb-4">{question}</h2>
      <div className="font-crimson-text text-md md:text-xl tracking-tight leading-[1em] select-none">{children}</div>
    </div>
  );
}
