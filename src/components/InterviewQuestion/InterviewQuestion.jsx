import React, { useRef, useState, useEffect } from "react";

export default function InterviewQuestion({ question, children }) {
  return (
    <div className="w-full h-fit mb-12">
      <h2 className="h-full w-fit font-semibold font-crimson-pro text-[1.6em] md:text-[1.7em] leading-7 select-none mb-3">{question}</h2>
      <div className="font-inter text-md md:text-lg leading-[1.4em] select-none">{children}</div>
    </div>
  );
}
