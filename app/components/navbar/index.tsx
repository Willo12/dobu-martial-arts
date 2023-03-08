import logo from "~/assets/png/db-logo.png";
import NavabarLink from "./NavbarLink";
import { useState, useEffect } from "react";

type NavbarProps = {
  className?: string;
  threshold?: number;
};

// Functionality
const Navbar = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let threshold = 200;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.history.pushState({}, "", event.currentTarget.href);
  };

  // DOM
  return (
    <header
      className={`fixed transition-all duration-300 ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      } bg-gray-900 px-4 py-3 md:flex md:justify-between md:justify-items-center md:px-52 ${className}`}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1 }}
    >
      <div className=" flex items-center justify-between ">
        <div>
          <a href="/">
            <img
              className="mr-20 h-20 w-auto md:h-24"
              src={logo}
              alt="Dobu Martial Arts Gym"
            />
          </a>
        </div>
        <div className=" justify-items-end md:hidden">
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
      <div className="md:block">
        <div className="mr-6 hidden items-baseline justify-end md:visible md:flex">
          <NavabarLink url="/" classname="text-sm md:visible ">
            Timetable
          </NavabarLink>
          <NavabarLink url="/" classname="text-sm md:visible">
            Contact us
          </NavabarLink>
        </div>

        <div
          className={`px-2 pt-2 pb-2 ${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center`}
        >
          <NavabarLink url="/">Home</NavabarLink>
          <NavabarLink url="/classes">Classes</NavabarLink>
          <NavabarLink url="/kids">Kids</NavabarLink>
          <NavabarLink url="/" classname="md:hidden">
            Timetable
          </NavabarLink>
          <NavabarLink url="/" classname="md:hidden">
            Contact us
          </NavabarLink>
          <NavabarLink url="/about/about">About us</NavabarLink>
          <NavabarLink
            url="/membership"
            classname="md:border md:rounded-xl md:w-24 md:text-center  hidden sm:block"
          >
            Login
          </NavabarLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
