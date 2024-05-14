import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  // sets current active page and sets query param
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[1.5em] font-bold cursor-pointer flex gap-1">
            Sion
            <span className="navTitle:block hidden"> | Web Developer </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navlink) => (
            <li
              key={navlink.id}
              className={`${
                active === navlink.title ? "text-white" : "text-secondary"
              } hover:text-white text-[1.5em] font-medium cursor-pointer`}
              onClick={() => setActive}
            >
              <a href={`#${navlink.id}`}>{navlink.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[2em] h-[2em] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((navlink) => (
                <li
                  key={navlink.id}
                  className={`${
                    active === navlink.title ? "text-white" : "text-secondary"
                  } font-poppins text-[1em] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle); // this will close hamburger menu after link has been clicked
                    setActive(navlink.title);
                  }}
                >
                  <a href={`#${navlink.id}`}>{navlink.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
