import DoBuGraphic from "~/assets/webp/dobuFooter.webp";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import Share from "./socialShare";
import ListLinks from "./listLinks";
import ListServices from "./listServices";
import "./verticalLine.css";
import { FaCopyright } from "react-icons/fa";
const Graphic1 = DoBuGraphic;
const TelephoneGraphic = BsFillTelephoneFill;
const EmailGraphic = AiOutlineMail;
const FacebookGraphic = FaFacebookSquare;
const TwitterGraphic = FaTwitterSquare;
const InstagramGraphic = FaInstagramSquare;

type FooterProps = {
  title: string;
  titleDescription: string;
};

const Footer = ({ title, titleDescription }: FooterProps) => {
  return (
    <>
      {/* Title */}
      <div className="w-auto bg-slate-900 lg:flex">
        <div className="w-auto lg:mx-10 lg:flex lg:px-32">
          <div>
            <div className="flex w-auto justify-center lg:ml-24 lg:w-36">
              <div className="absolute mt-7 flex h-[192px] w-[226px] items-center justify-center rounded-xl bg-red-600 lg:h-[242px] lg:w-80">
                <img
                  src={Graphic1}
                  alt="DoBu-Martial arts session"
                  className="h-[178.8px] w-[203.4px] rounded-xl object-cover lg:h-[217px] lg:w-[293px]"
                />
              </div>
            </div>
            <div className="block lg:flex ">
              <div className="mt-60 block justify-center lg:mt-80 lg:flex lg:items-start lg:justify-start">
                <h1 className="text-center text-3xl text-white ">
                  {titleDescription}
                  <div className="mt-4 block w-auto items-center justify-center lg:-ml-0.5 lg:w-96 lg:items-start lg:justify-start">
                    <p className="ml-10 mr-10 text-center text-sm text-white opacity-70 lg:ml-0  lg:text-base">
                      {title}
                    </p>
                  </div>
                </h1>
              </div>
              <div className="lg:w-52">
                <hr className="ml-10 mr-10 mt-6 h-4 opacity-50 lg:my-0 lg:ml-20 lg:mr-0 lg:h-96 lg:w-64 lg:-rotate-90" />
              </div>
            </div>
          </div>

          <div className="mt-2 w-auto items-center justify-center lg:flex lg:-translate-x-40">
            {/* Links */}
            <div className="items-center lg:mb-40 lg:block">
              <ListLinks
                Title="Browse Links"
                Link1="Home"
                Link2="Classes"
                Link3="Kids"
                Link4="About us"
                Link5="Timetable"
                Link6="Contact us"
                LinkUrl1="/"
                LinkUrl2="/classes"
                LinkUrl3="/kids"
                LinkUrl4="/about/about"
                LinkUrl5="/timetable"
                LinkUrl6="/contact"
              />{" "}
            </div>
            <div className="lg:52 lg:mb-20">
              <hr className="ml-10 mr-10 mt-6 h-4 opacity-50 lg:my-0 lg:ml-28 lg:mr-0 lg:h-96 lg:w-64 lg:-rotate-90" />
            </div>

            {/* Services */}
            <div className="lg:flex lg:w-20 lg:-translate-x-72">
              <div className="lg:mr-96 lg:block lg:w-32 lg:translate-y-6">
                <ListServices
                  Title="Services"
                  list1="Six-week beginners’ self-defence course"
                  list2="Karate"
                  list3="Judo"
                  list4="The use of the Gym"
                  list5="Private tuition"
                  list6="Jiu-jitsu"
                />
              </div>
              <div className="lg:mb-20 lg:w-32 lg:-translate-x-72">
                <hr className="ml-10 mr-10 mt-6 h-4 opacity-50 lg:my-0 lg:ml-28 lg:mr-0 lg:h-96 lg:w-64 lg:-rotate-90" />
              </div>
            </div>

            {/* Contact info */}
            <div className="flex w-auto flex-col  justify-center lg:-translate-y-20 lg:pr-48">
              <h1 className="justify-center text-center text-3xl text-white lg:mb-4 lg:text-left lg:text-4xl">
                Where to Find Us
              </h1>
              <div className="lg:flex">
                <div>
                  <div className="lg:block">
                    <div className="mt-6 flex items-center justify-center">
                      <Share />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <TelephoneGraphic size={25} className="mx-5" />
                    <h2 className="text-white">Telephone: +443456-33881</h2>
                  </div>
                </div>
                <div className="mt-6 w-auto">
                  <h1 className="mx-10 text-3xl text-white">Address</h1>
                  <div className="my-2 flex h-auto w-full items-center justify-center">
                    <ul className="mt-4 mr-9 h-36 px-24 text-white opacity-70">
                      <li>City: Adeleberg</li>
                      <li>Address: 488 Hill Square</li>
                      <li>Zip Code: SW20</li>
                      <li>E-mail: dobu@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End footer */}
      <div className="w-full bg-stone-900 text-center lg:w-full lg:px-44">
        <div className="lg:flex lg:justify-between">
          <h3 className="flex translate-y-3 justify-center text-center text-sm text-white ">
            <FaCopyright className="mt-1 mr-2" size={15} />
            2023 DoBu Martial-Arts. All Rights Reserved.
          </h3>
          <h3 className="mt-10 flex justify-start px-20 text-left text-sm text-white lg:-translate-y-6">
            Privacy Policy
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
