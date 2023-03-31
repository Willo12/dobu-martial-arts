import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";

type LinkProps = {
  Title: string;

  Link1?: string;
  Link2?: string;
  Link3?: string;
  Link4?: string;
  Link5?: string;
  Link6?: string;

  LinkUrl1?: string;
  LinkUrl2?: string;
  LinkUrl3?: string;
  LinkUrl4?: string;
  LinkUrl5?: string;
  LinkUrl6?: string;
};

const ListLinks = ({
  Title,
  Link1,
  Link2,
  Link3,
  Link4,
  Link5,
  Link6,
  LinkUrl1,
  LinkUrl2,
  LinkUrl3,
  LinkUrl4,
  LinkUrl5,
  LinkUrl6,
}: LinkProps) => {
  const [linksOpen, setlinksOpen] = useState(false);
  const ArrowRight = AiOutlineArrowRight;
  const ArrowDown = AiOutlineArrowDown;
  return (
    <>
      <div className="flex items-center  justify-center lg:block  ">
        <div className="flex w-56 items-center justify-center rounded-2xl bg-red-600 lg:block lg:bg-slate-900">
          <button
            className="lg:hidden"
            onClick={() => setlinksOpen(!linksOpen)}
          >
            <h2 className=" flex text-center  text-3xl text-white lg:block">
              {Title}{" "}
              {linksOpen ? (
                <ArrowDown className="mt-1 lg:collapse" fontSize={30} />
              ) : (
                <ArrowRight className="mt-1 lg:invisible" fontSize={30} />
              )}
            </h2>
          </button>
          <h2 className="hidden lg:visible lg:block  lg:text-center lg:text-3xl lg:text-white">
            Browse links
          </h2>
        </div>
      </div>
      <div
        className={` ${
          linksOpen
            ? " flex w-full items-center justify-center lg:block "
            : " absolute"
        }  `}
      >
        <div
          className={`${
            linksOpen
              ? " w-40 rounded-b-lg bg-gradient-to-b from-red-500 to-red-400 transition-all lg:w-auto lg:bg-none"
              : " visible "
          } `}
        >
          <ul
            className={`${
              linksOpen
                ? " visible text-center text-white lg:ml-10 lg:text-left "
                : "hidden"
            }`}
          >
            <a href={LinkUrl1}>
              <li className="mt-3">{Link1}</li>
            </a>
            <a href={LinkUrl2}>
              <li className="mt-3">{Link2}</li>
            </a>
            <a href={LinkUrl3}>
              <li className="mt-3">{Link3}</li>
            </a>
            <a href={LinkUrl4}>
              <li className="mt-3">{Link4}</li>
            </a>
            <a href={LinkUrl5}>
              <li className="mt-3">{Link5}</li>
            </a>
            <a href={LinkUrl6}>
              <li className="mt-3">{Link6}</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListLinks;
