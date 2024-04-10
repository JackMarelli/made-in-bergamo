import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const menuRef = useRef();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className="h-fit p-4 pt-8 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 text-xs font-semibold relative">
      <div
        ref={menuRef}
        className={`absolute top-0 left-0 bottom-0 right-0 h-fit p-4 pt-8 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 h-fit ${
          !menuIsOpen && "-translate-y-full"
        } z-10 bg-mib-beige-dark`}
      >
        <div className="col-span-4 md:col-span-12 flex justify-between items-start mt-32">
          <a className="w-fit text-5xl font-crimson-pro" href="#">
            Brand
          </a>
          <a className="w-fit text-5xl font-crimson-pro" href="#">
            Brand
          </a>
          <a className="w-fit text-5xl font-crimson-pro" href="#">
            Brand
          </a>
          <a className="w-fit text-5xl font-crimson-pro" href="#">
            Brand
          </a>
          <a className="w-fit text-5xl font-crimson-pro" href="#">
            Brand
          </a>
          <a className="w-fit text-5xl font-crimson-pro" href="#">
            Brand
          </a>
        </div>
      </div>
      <span className="col-span-4 md:col-span-3">
        Il prodotto moda artigianale sostenibile: dalle materie prime al
        prodotto finito con un focus sulla produzione territoriale.
      </span>
      <span
        className="col-span-4 md:col-start-7 col-span-1 cursor-pointer z-20"
        onClick={() => {
          setMenuIsOpen(!menuIsOpen);
        }}
      >
        {menuIsOpen ? "Close" : "Menu"}
      </span>
      <span className="col-span-4 my-8 md:my-0 md:col-start-10 md:col-span-1">
        Bergamo, Italy
      </span>
      <div className="col-span-4 md:col-start-11 md:col-span-2 flex flex-col md:items-end">
        <span className="w-fit text-end">+39 555 555 5555</span>
        <span className="w-fit">sample@mail.com</span>
      </div>
    </nav>
  );
}
