import React, { useRef, useState, useEffect } from "react";

export default function InterviewQuestion({ question, children }) {
  return (
    <div className="w-full h-fit mb-12">
      <h2 className="h-full w-fit uppercase text-[14px] md:text-[18px] font-semibold leading-4 md:leading-6 select-none mb-3 md:mb-4">{question}</h2>
      <div className="font-crimson-text text-xl leading-[1.05em] md:leading-[1.2em] select-none">{children}</div>
    </div>
  );
}
