import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const menuRef = useRef();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isHomePage, setIsHomePage] = useState(
    !window.location.href.includes("interview")
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add the transition effect when the component mounts
  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, []);

  return (
    <nav
      className="h-fit p-4 
    pt-8 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 text-xs font-semibold z-[99999] text-mib-brown-dark md:fixed md:top-0"
    >
      <div
        ref={menuRef}
        className={`h-screen md:h-fit fixed top-0 left-0 bottom-0 right-0 p-4 pt-8 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 z-10 bg-mib-beige-light ${menuIsOpen ? "translate-y-0" : "-translate-y-full"
          } border-b-2 border-mib-beige-dark`}
      >
        <div className="col-span-4 md:col-span-12 flex flex-col md:flex-row justify-center items-start gap-x-8 mt-8 md:mt-40 mb-4">
          <div
            className={`w-fit text-5xl font-crimson-pro cursor-pointer text-mib-${isHomePage ? "beige-dark" : "brown-dark"
              }`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className={`w-fit text-5xl font-crimson-pro cursor-pointer text-mib-${isHomePage ? "brown-dark" : "beige-dark"
              }`}
            onClick={() => {
              navigate("/interview");
            }}
          >
            Interviste
          </div>
        </div>
      </div>
      <span className="col-span-3 z-0 md:z-20">
        Il prodotto moda artigianale sostenibile: dalle materie prime al
        prodotto finito con un focus sulla produzione territoriale.
      </span>
      <span
        className="col-span-4 md:col-start-7 md:col-span-1 cursor-pointer z-20 fixed right-4 md:relative"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {menuIsOpen ? "Close" : "Menu"}
      </span>
      <span className="col-span-4 my-8 md:my-0 md:col-start-10 md:col-span-1 z-0 md:z-20">
        Bergamo, Italy
      </span>
      <div className="col-span-4 md:col-start-11 md:col-span-2 flex flex-col md:items-end z-0 md:z-20">
        <span className="w-fit text-end">+39 555 555 5555</span>
        <span className="w-fit">sample@mail.com</span>
      </div>
    </nav>
  );
}