import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SmallCta from "../SmallCta/SmallCta";
import InterviewsNavigator from "../../components/InterviewsNavigator/InterviewsNavigator";

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
        className={`h-screen md:h-fit fixed top-0 left-0 bottom-0 right-0 p-4 pt-8 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 z-10 bg-mib-beige-light ${
          menuIsOpen ? "translate-y-0" : "-translate-y-full"
        } border-b-2 border-mib-beige-dark`}
      >
        <div className="col-span-4 md:col-span-12 flex flex-col justify-center items-start md:items-center gap-x-8 mt-8 md:mt-20 mb-4">
          <div
            className={`w-fit text-3xl md:text-5xl font-crimson-pro tracking-[-0.5px] md:tracking-[0] cursor-pointer text-mib-${
              isHomePage ? "beige-dark" : "brown-dark"
            }`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className={`w-fit text-3xl md:text-5xl font-crimson-pro tracking-[-0.5px] md:tracking-[0] cursor-pointer text-mib-${
              isHomePage ? "brown-dark" : "beige-dark"
            }`}
            onClick={() => {
              navigate("/interview/neimieipanni");
            }}
          >
            Le realtà bergamasche
          </div>
          <div className="h-fit flex md:hidden flex-col justify-start align-start mt-4">
            <InterviewsNavigator />
          </div>
          <div className="col-span-4 flex flex-col md:items-center gap-1 mt-40 md:mt-16 z-0 md:z-20">
            <span className="w-fit">Bergamo, Italy</span>
            <span className="w-fit">+39 555 555 5555</span>
            <span className="w-fit">sample@mail.com</span>
          </div>
        </div>
      </div>
      <span className="col-span-3 z-0 md:z-20">
        Il prodotto moda artigianale sostenibile: dalle materie prime al
        prodotto finito con un focus sulla produzione territoriale.
      </span>
      <span
        className="w-fit h-fit fixed top-8 right-4 md:right-8 px-3 md:px-4 py-1 md:py-2 cursor-pointer z-20 bg-mib-brown-dark text-mib-beige-light rounded-full flex justify-center items-center"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {menuIsOpen ? "Close" : "Menu"}
      </span>
    </nav>
  );
}
