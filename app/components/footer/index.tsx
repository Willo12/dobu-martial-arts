import DoBuGraphic from "~/assets/webp/dobuFooter.webp";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineArrowDown, AiOutlineCopyrightCircle } from "react-icons/ai";
import { useState } from "react";
import Share from "./socialShare";

const Graphic1 = DoBuGraphic;

const TelephoneGraphic = BsFillTelephoneFill;
const ArrowRight = AiOutlineArrowRight;
const ArrowDown = AiOutlineArrowDown;
const Copyright = AiOutlineCopyrightCircle;

type FooterProps = {
  title: string;
  titleDescription: string;
};

const Footer = ({ title, titleDescription }: FooterProps) => {
  const [linksOpen, setlinksOpen] = useState(false);
  const [serviceOpen, setserviceOpen] = useState(false);

  return (
    <>
      <div className=" w-full bg-slate-900 md:px-32 ">
        <div className="flex w-full justify-center md:ml-24 md:justify-start  ">
          <div className="absolute mt-7  flex h-[192px] w-[226px] items-center justify-center rounded-xl bg-red-600 ">
            <img
              src={Graphic1}
              alt="DoBu-Martial arts session"
              className="h-[178.8px] w-[203.4px]  rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="mt-60 flex w-full justify-center md:ml-24 md:justify-start">
          <h1 className=" text-3xl text-white">{titleDescription}</h1>
        </div>
        <div className="mt-4 flex w-full items-center justify-center md:ml-14 md:w-96 md:justify-start">
          <p className="ml-10 mr-10 text-center text-sm text-white opacity-70 md:text-left md:text-base">
            {title}
          </p>
        </div>
        <hr className="ml-10 mr-10 mt-6 h-4 opacity-50 md:flex md:w-[600px] md:translate-x-28  md:-translate-y-16 md:rotate-90" />
        <div className="mt-6 w-full items-center justify-center">
          <div className="flex  items-center justify-center  ">
            <div className="flex  w-56 items-center justify-center rounded-2xl bg-red-600">
              <button onClick={() => setlinksOpen(!linksOpen)}>
                <h2 className=" flex  text-center text-3xl text-white">
                  Browse Links{" "}
                  {linksOpen ? (
                    <ArrowRight className="mt-1 md:invisible" fontSize={30} />
                  ) : (
                    <ArrowDown className="mt-1 md:collapse" fontSize={30} />
                  )}
                </h2>
              </button>
            </div>
          </div>

          <div
            className={` ${
              linksOpen ? "absolute " : " "
            } flex w-full items-center justify-center `}
          >
            <div
              className={`${
                linksOpen
                  ? "visible"
                  : "h-56 w-40 rounded-b-lg  bg-gradient-to-b from-red-400 to-red-300 transition-all "
              } `}
            >
              <ul
                className={`${
                  linksOpen ? "invisible " : "visible text-center text-white"
                }`}
              >
                <a href="/">
                  <li className="mt-3">Home</li>
                </a>
                <a href="/classes">
                  <li className="mt-3">Classes</li>
                </a>
                <a href="/kids">
                  <li className="mt-3">Kids</li>
                </a>
                <a href="/about/about">
                  <li className="mt-3">About Us</li>
                </a>
                <a href="/timetable">
                  <li className="mt-3">Timetable</li>
                </a>
                <a href="/contact">
                  <li className="mt-3">Contact Us</li>
                </a>
              </ul>
            </div>
          </div>
          <hr className="ml-10 mr-10 mt-10 h-4 opacity-50" />
          <div className="mt-6">
            <div className="flex  items-center justify-center  ">
              <div className="flex  w-56 items-center justify-center rounded-2xl bg-red-600">
                <button onClick={() => setserviceOpen(!serviceOpen)}>
                  <h2 className=" flex  text-center text-3xl text-white">
                    Services{" "}
                    {serviceOpen ? (
                      <ArrowRight
                        className="mt-1 ml-4 md:invisible"
                        fontSize={30}
                      />
                    ) : (
                      <ArrowDown
                        className="mt-1 ml-4 md:collapse"
                        fontSize={30}
                      />
                    )}
                  </h2>
                </button>
              </div>
            </div>
            <div
              className={` ${
                serviceOpen ? "absolute  " : ""
              } flex w-full items-center justify-center   `}
            >
              <div
                className={`${
                  serviceOpen
                    ? "visible"
                    : "h-72 w-40 rounded-b-lg bg-gradient-to-b from-red-400 to-red-300"
                } `}
              >
                <ul
                  className={`${
                    serviceOpen
                      ? "invisible "
                      : "visible text-center text-white"
                  }`}
                >
                  <li className="mt-3 px-6">
                    Six-week beginners’ self-defence course{" "}
                  </li>
                  <li className="mt-3">Karate</li>
                  <li className="mt-3">Judo</li>
                  <li className="mt-3">The Use of the Gym</li>
                  <li className="mt-3">Private Tuition</li>
                  <li className="mt-3">Jiu-Jitsu</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="ml-10 mr-10 mt-10 h-4 opacity-50" />
          <div className="w-full text-center">
            <h1 className="text-3xl text-white">Where to Find Us</h1>
            <div className="mt-6">
              <Share />
            </div>
          </div>
          <hr className="ml-10 mr-10 mt-10 h-4 opacity-50" />
        </div>
        <div className=" flex w-full items-center justify-center ">
          {" "}
          <TelephoneGraphic size={25} className="mx-5" />{" "}
          <h2 className="text-white">Telephone: +443456-33881</h2>
        </div>
        <div className="mt-7   w-full">
          <h1 className="ml-16 text-3xl text-white">Address</h1>
          <div className="flex w-full items-center justify-center">
            <ul className="mt-4 mr-9 h-36 px-24 text-white opacity-70">
              <li>City: Adeleberg</li>
              <li>Address: 488 Hill Square</li>
              <li>Zip Code: SW20</li>
              <li>E-mail: dobu@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-full  bg-stone-900 text-center">
        <div className="">
          <h3 className="  flex translate-y-3 justify-center text-center text-sm text-white">
            <Copyright className="mt-1 mr-2" size={15} /> 2023 DoBu
            Martial-Arts. All Rights Reserved.
          </h3>
          <h3 className="mt-10  flex justify-start px-20 text-left text-sm text-white">
            Privacy Policy
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
