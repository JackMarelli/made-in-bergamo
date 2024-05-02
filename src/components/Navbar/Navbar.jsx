import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SmallCta from "../SmallCta/SmallCta";

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
        className={`h-screen md:h-fit fixed top-0 left-0 bottom-0 right-0 p-4 pt-8 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 z-10 bg-mib-beige-light ${
          menuIsOpen ? "translate-y-0" : "-translate-y-full"
        } border-b-2 border-mib-beige-dark`}
      >
        <div className="col-span-4 md:col-span-12 flex flex-col justify-center items-start md:items-center gap-x-8 mt-8 md:mt-20 mb-4">
          <div
            className={`w-fit text-5xl font-crimson-pro cursor-pointer text-mib-${
              isHomePage ? "beige-dark" : "brown-dark"
            }`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className={`w-fit text-5xl font-crimson-pro cursor-pointer text-mib-${
              isHomePage ? "brown-dark" : "beige-dark"
            }`}
            onClick={() => {
              navigate("/interview/neimieipanni");
            }}
          >
            Interviste
          </div>
          <div className="h-fit flex md:hidden flex-col justify-start align-start mt-4">
            <Link to="/interview/neimieipanni">
              <SmallCta text="Nei Miei Panni" />
            </Link>
            <Link to="/interview/albinigroup">
              <SmallCta text="Albini Group" />
            </Link>
            <Link to="/interview/officinae">
              <SmallCta text="Officinae" />
            </Link>
            <Link to="/interview/sophiestique">
              <SmallCta text="Sophie Stique*" />
            </Link>
            <Link to="/interview/ertkingdom">
              <SmallCta text="E RT Kingdom" />
            </Link>
          </div>
          <div className="col-span-4 flex flex-col md:items-center gap-1 mt-40 md:mt-16 z-0 md:z-20">
            <SmallCta />
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
        className="w-fit h-fit px-4 py-2 cursor-pointer z-20 col-start-4 md:col-start-12 col-span-1 justify-self-end bg-mib-brown-dark text-mib-beige-light rounded-full flex justify-center items-center"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {menuIsOpen ? "Close" : "Menu"}
      </span>
    </nav>
  );
}
