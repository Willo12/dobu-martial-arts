import { title } from "process";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";

type ListProps = {
  Title: string;
  list1?: string;
  list2?: string;
  list3?: string;
  list4?: string;
  list5?: string;
  list6?: string;
};

const ListServices = ({
  Title,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
}: ListProps) => {
  const [serviceOpen, setserviceOpen] = useState(false);
  const ArrowRight = AiOutlineArrowRight;
  const ArrowDown = AiOutlineArrowDown;

  return (
    <>
      <div className="flex items-center  justify-center lg:block  ">
        <div className="flex w-56 items-center justify-center rounded-2xl bg-red-600 lg:block lg:bg-slate-900">
          <button
            className="lg:hidden"
            onClick={() => setserviceOpen(!serviceOpen)}
          >
            <h2 className=" flex text-center  text-3xl text-white lg:block">
              {Title}{" "}
              {serviceOpen ? (
                <ArrowDown className="mt-1 lg:collapse" fontSize={30} />
              ) : (
                <ArrowRight className="mt-1 lg:invisible" fontSize={30} />
              )}
            </h2>
          </button>
          <h2 className="hidden lg:visible lg:block  lg:text-center lg:text-3xl lg:text-white">
            {Title}
          </h2>
        </div>
      </div>
      <div
        className={` ${
          serviceOpen
            ? " flex w-full items-center justify-center lg:block "
            : " absolute"
        }  `}
      >
        <div
          className={`${
            serviceOpen
              ? " w-40 rounded-b-lg bg-gradient-to-b from-red-500 to-red-400 transition-all lg:w-auto lg:bg-none"
              : " visible "
          } `}
        >
          <ul
            className={`${
              serviceOpen
                ? " visible text-center text-white lg:ml-10 lg:w-56 lg:text-left "
                : "hidden"
            }`}
          >
            <li className="mt-3">{list1}</li>

            <li className="mt-3">{list2}</li>

            <li className="mt-3">{list3}</li>

            <li className="mt-3">{list4}</li>

            <li className="mt-3">{list5}</li>

            <li className="mt-3">{list6}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListServices;
