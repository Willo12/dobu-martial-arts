import logo from "~/assets/png/db-logo.png";
import NavabarLink from "./NavbarLink";
import { useState, useEffect } from "react";

type NavbarProps = {
  className?: string;
};

const Navbar = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const threshold = 100;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed transition-all duration-500 ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      } bg-gray-900 px-4 py-3 shadow-xl md:flex md:justify-between md:justify-items-center md:px-52 ${className}`}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1 }}
    >
      <div className=" flex items-center justify-between ">
        <div>
          <a href="/">
            <img
              className="mr-20 h-20 w-auto"
              src={logo}
              alt="Dobu Martial Arts Gym"
            />
          </a>
        </div>
        <div className=" md:hidden">
          <NavabarLink
            url="/membership"
            classname="border rounded-xl w-24 text-center"
          >
            Login
          </NavabarLink>
        </div>
        <div className="md:hidden">
          <button
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`px-2 pt-2 pb-2  ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center`}
      >
        <NavabarLink url="/">Home</NavabarLink>
        <NavabarLink url="/about">About us</NavabarLink>
        <NavabarLink url="/classes">Classes</NavabarLink>
        <NavabarLink
          url="/membership"
          classname="md:border md:rounded-xl md:w-24 md:text-center  hidden sm:block"
        >
          Login
        </NavabarLink>
      </div>
    </header>
  );
};

export default Navbar;
