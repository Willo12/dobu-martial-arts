import logo from "~/assets/png/db-logo2.png";
import NavabarLink from "./NavbarLink";
import { useState, useEffect } from "react";
import { useOptionalUser } from "~/utils";
import { Link } from "@remix-run/react";
import { Form } from "@remix-run/react";

type NavbarProps = {
  className?: string;
  threshold?: number;
};

// Functionality
const Navbar = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let threshold = 200;
  const user = useOptionalUser();

  function shortUser(email: string) {
    const UserName = email.substring(0, 7) + "...";
    return <p>{UserName}</p>;
  }

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
              className="mr-20 h-20 w-auto translate-y-3 scale-150 md:h-28"
              src={logo}
              alt="Dobu Martial Arts Gym"
            />
          </a>
        </div>
        <div className=" justify-items-end md:hidden">
          {/* <NavabarLink
            url="/membership"
            classname="border rounded-xl w-24 text-center"
          >
            Login
          </NavabarLink> */}
          {user ? (
            <Form action="/logout" method="post">
              <button
                type="submit"
                className="mt-1 block w-24   border py-2 px-2 text-center font-semibold text-white hover:bg-slate-800 md:ml-4 "
              >
                Logout {shortUser(user.email)}
              </button>
            </Form>
          ) : (
            <Link
              to="/login"
              type="button"
              className="mt-1 block w-24 rounded-xl  border py-2 px-2 text-center font-semibold text-white hover:bg-slate-800 md:ml-4 "
            >
              Login
            </Link>
          )}
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
          <NavabarLink url="/timetable" classname="text-sm md:visible ">
            Timetable
          </NavabarLink>
          <NavabarLink url="/memberships">Memberships</NavabarLink>
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
          <NavabarLink url="/timetable" classname="md:hidden">
            Timetable
          </NavabarLink>
          <NavabarLink url="/" classname="md:hidden">
            Contact us
          </NavabarLink>
          <NavabarLink url="/about">About us</NavabarLink>
          <div className="md:hidden">
            <NavabarLink url="/memberships">Memberships</NavabarLink>
          </div>

          {user ? (
            <Form action="/logout" method="post">
              <button
                type="submit"
                className="mt-1 block hidden   py-2 px-2 font-semibold text-white hover:bg-slate-800 sm:block md:ml-4 md:w-auto  md:border md:text-center"
              >
                Logout {shortUser(user.email)}
              </button>
            </Form>
          ) : (
            <Link
              to="/login"
              type="button"
              className="mt-1 block hidden rounded py-2 px-2 font-semibold text-white hover:bg-slate-800 sm:block md:ml-4 md:w-24 md:rounded-xl  md:border md:text-center"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
